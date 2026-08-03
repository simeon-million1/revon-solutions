import {
  Playfair_Display,
  Anton,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  PT_Serif,
} from "next/font/google";

/* ------------------------------------------------------------------ */
/*  1. HEADLINE FONTS                                                 */
/* ------------------------------------------------------------------ */

// Playfair Display - Serif Headline (400 weight & bold)
export const fontPlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair-display",
  display: "swap",
});

// Anton - Bold Impact Headline (400 weight)
export const fontAnton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

// Google Sans Flex / Plus Jakarta Sans - Modern Geometric Headline
export const fontGoogleSansFlex = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-google-sans-flex",
  display: "swap",
});

// Stack Sans Notch / Space Grotesk - Futuristic Display Headline
export const fontStackSansNotch = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-stack-sans-notch",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  2. BODY TEXT FONTS                                                */
/* ------------------------------------------------------------------ */

// Google Sans - Clean Modern Sans Body Text
export const fontGoogleSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-google-sans",
  display: "swap",
});

// PT Serif Caption - Classic Readable Serif Body Text
export const fontPtSerifCaption = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif-caption",
  display: "swap",
});

// Stack Sans Text - Tech Sans Body Text (400 weight)
export const fontStackSansText = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-stack-sans-text",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  3. FONT REGISTRY (Easily add new fonts here in 1 step!)           */
/* ------------------------------------------------------------------ */

export const fontLibrary = {
  headlines: {
    playfairDisplay: {
      name: "Playfair Display",
      font: fontPlayfairDisplay,
      className: fontPlayfairDisplay.className,
      variable: fontPlayfairDisplay.variable,
      cssVariable: "var(--font-playfair-display)",
    },
    anton: {
      name: "Anton",
      font: fontAnton,
      className: fontAnton.className,
      variable: fontAnton.variable,
      cssVariable: "var(--font-anton)",
    },
    googleSansFlex: {
      name: "Google Sans Flex",
      font: fontGoogleSansFlex,
      className: fontGoogleSansFlex.className,
      variable: fontGoogleSansFlex.variable,
      cssVariable: "var(--font-google-sans-flex)",
    },
    stackSansNotch: {
      name: "Stack Sans Notch",
      font: fontStackSansNotch,
      className: fontStackSansNotch.className,
      variable: fontStackSansNotch.variable,
      cssVariable: "var(--font-stack-sans-notch)",
    },
  },
  body: {
    googleSans: {
      name: "Google Sans",
      font: fontGoogleSans,
      className: fontGoogleSans.className,
      variable: fontGoogleSans.variable,
      cssVariable: "var(--font-google-sans)",
    },
    ptSerifCaption: {
      name: "PT Serif Caption",
      font: fontPtSerifCaption,
      className: fontPtSerifCaption.className,
      variable: fontPtSerifCaption.variable,
      cssVariable: "var(--font-pt-serif-caption)",
    },
    stackSansText: {
      name: "Stack Sans Text",
      font: fontStackSansText,
      className: fontStackSansText.className,
      variable: fontStackSansText.variable,
      cssVariable: "var(--font-stack-sans-text)",
    },
  },
};

// All CSS variables combined for root layout injection
export const fontLibraryVariables = [
  fontPlayfairDisplay.variable,
  fontAnton.variable,
  fontGoogleSansFlex.variable,
  fontStackSansNotch.variable,
  fontGoogleSans.variable,
  fontPtSerifCaption.variable,
  fontStackSansText.variable,
].join(" ");
