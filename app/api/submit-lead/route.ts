import { NextResponse } from 'next/server';

// --- Simple in-memory rate limiter ---
// Stores { count, resetAt } per IP. Resets every 15 minutes.
// Limits each IP to 5 submissions per window to prevent HubSpot spam.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// --- Input sanitization ---
// Strips HTML tags and trims whitespace to prevent XSS in HubSpot notes
function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value
    .trim()
    .replace(/<[^>]*>/g, '') // strip HTML tags
    .slice(0, maxLength);
}

function sanitizeEmail(value: unknown): string {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim().toLowerCase().slice(0, 254);
  // Basic RFC-5321 email shape validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed) ? trimmed : '';
}

export async function POST(request: Request) {
  // --- Rate limiting ---
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const raw = body as Record<string, unknown>;

    // --- Sanitize and validate all fields ---
    const name = sanitize(raw.name, 100);
    const businessName = sanitize(raw.businessName, 200);
    const email = sanitizeEmail(raw.email);
    const whatWeSell = sanitize(raw.whatWeSell, 500);
    const clientSource = sanitize(raw.clientSource, 500);
    const monthlyClients = sanitize(raw.monthlyClients, 100);
    const websiteUrl = sanitize(raw.websiteUrl, 500);
    const nextAction = sanitize(raw.nextAction, 500);
    const followUpSpeed = sanitize(raw.followUpSpeed, 200);

    // Required field validation
    if (!name || !businessName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, businessName, or email.' },
        { status: 400 }
      );
    }

    // --- Token ---
    const token = process.env.HUBSPOT_SERVICE_KEY || process.env.HUBSPOT_ACCESS_TOKEN;
    if (!token) {
      // Silently succeed for the user — don't expose configuration state
      console.warn('[submit-lead] HubSpot token not configured. Submission skipped.');
      return NextResponse.json({ success: true });
    }

    const nameParts = name.split(' ');
    const firstname = nameParts[0] || '';
    const lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    // --- Step 1: Create Contact in HubSpot CRM ---
    const contactPayload = {
      properties: {
        email,
        firstname,
        lastname,
        company: businessName,
        website: websiteUrl,
      },
    };

    const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(contactPayload),
    });

    let contactId: string | null = null;

    if (res.ok) {
      const contactData = await res.json();
      contactId = contactData.id;
    } else if (res.status === 409) {
      // Contact already exists — not an error for the user
      console.warn('[submit-lead] Contact already exists in HubSpot CRM for submitted email.');
      return NextResponse.json({ success: true });
    } else {
      // Log full error server-side only; never expose it to the client
      const errorData = await res.json().catch(() => ({}));
      console.error('[submit-lead] HubSpot contact creation failed:', res.status, JSON.stringify(errorData));
      return NextResponse.json({ error: 'Failed to save your information. Please try again.' }, { status: 502 });
    }

    // --- Step 2: Attach a CRM Note with questionnaire answers ---
    if (contactId) {
      const noteBody = [
        '<p><strong>Lead Questionnaire Submission (REVON Growth Plan)</strong></p>',
        '<ul>',
        `  <li><strong>What we sell:</strong> ${whatWeSell || 'N/A'}</li>`,
        `  <li><strong>Current client source:</strong> ${clientSource || 'N/A'}</li>`,
        `  <li><strong>Monthly clients:</strong> ${monthlyClients || 'N/A'}</li>`,
        `  <li><strong>Website URL:</strong> ${websiteUrl || 'N/A'}</li>`,
        `  <li><strong>Next action when interested:</strong> ${nextAction || 'N/A'}</li>`,
        `  <li><strong>Follow-up speed:</strong> ${followUpSpeed || 'N/A'}</li>`,
        '</ul>',
      ].join('\n');

      try {
        const noteRes = await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            properties: {
              hs_timestamp: Date.now(),
              hs_note_body: noteBody,
            },
            associations: [
              {
                to: { id: contactId },
                types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
              },
            ],
          }),
        });

        if (!noteRes.ok) {
          const noteErr = await noteRes.json().catch(() => ({}));
          console.error('[submit-lead] Failed to attach note to contact:', noteRes.status, JSON.stringify(noteErr));
        }
      } catch (noteErr) {
        console.error('[submit-lead] Network error attaching note:', noteErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[submit-lead] Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
