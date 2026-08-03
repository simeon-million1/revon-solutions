import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  ArrowRight,
  Target,
  Clock,
  AlertTriangle
} from "lucide-react";



/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      {/* ───────── 1. Navigation ───────── */}
      <header className="absolute top-0 left-0 right-0 w-full z-50 bg-transparent">
        <div className="relative flex justify-between items-center max-w-[1350px] mx-auto px-6 md:px-12 h-24">
          <div className="flex items-center">
            <Link
              className="brand-logo flex items-center gap-3 font-headline-md text-[26px] font-black tracking-tighter text-on-surface"
              href="/"
            >
              <Image
                src="/logo.svg"
                alt="REVON SOLUTIONS Logo"
                width={38}
                height={38}
                className="h-[38px] w-auto brightness-0 invert"
              />
              <span>REVON SOLUTIONS</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="hidden md:inline-flex btn-on-dark"
              href="/questionnaire"
            >
              Get Your Free 4-week Plan
            </Link>
            <button className="md:hidden text-on-surface">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow relative overflow-hidden">

        {/* ───────── 2. Hero (Minimal Design Kept) ───────── */}
        <section className="min-h-[95vh] md:min-h-[105vh] max-w-[1350px] mx-auto px-6 md:px-12 flex flex-col items-start justify-start pt-44 md:pt-52 pb-36 md:pb-52 text-left relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#711111]/25 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-[48px] md:text-[80px] font-black text-on-surface mb-8 max-w-4xl tracking-tighter leading-tight">
            Turn Strangers Into Paying Customers
          </h1>
          <p className="font-body-lg text-[14px] md:text-[18px] leading-relaxed text-on-surface-variant max-w-2xl mb-10">
            Not enough people buying from you? We fix that in 4 weeks with a 7-figure strategy built just for you.
          </p>
          <Link
            className="btn-solid-white group"
            href="/questionnaire"
          >
            Get Your Free 4-week Plan
            <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* ───────── 3. Problem (Inverted White/Black Editorial Redesign) ───────── */}
        <section className="w-full inverted-section bg-[#FFFFFF] py-20 md:py-32 relative z-10 overflow-hidden border-y border-white/10 shadow-2xl">
          {/* Subtle background warm red ambient glows */}
          <div className="absolute top-[15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#711111]/[0.05] blur-[130px] pointer-events-none -z-0" />
          <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#711111]/[0.05] blur-[150px] pointer-events-none -z-0" />

          <div className="max-w-[1350px] mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
            <h2 className="font-display-lg-mobile md:font-display-lg text-[38px] md:text-[70px] font-black text-[#0C0C0C] mb-16 md:mb-24 text-center tracking-tighter leading-tight">
              Is This YOU?
            </h2>

            {/* 3 Problems in the same row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start w-full">
              {/* Item 01 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                  01
                </div>
                <h3 className="question-headline text-[22px] md:text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                  Leads Not The Right Fit?
                </h3>
                <div className="w-16 h-1.5 bg-[#711111] rounded-full my-1" />
                <p className="font-body-lg text-[14px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                  You get leads who were never going to buy
                </p>
              </div>

              {/* Item 02 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                  02
                </div>
                <h3 className="question-headline text-[22px] md:text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                  Not Getting Leads Consistently?
                </h3>
                <div className="w-16 h-1.5 bg-[#711111] rounded-full my-1" />
                <p className="font-body-lg text-[14px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                  Even when they are the right fit, there&apos;s just not enough of them consistently coming in
                </p>
              </div>

              {/* Item 03 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                  03
                </div>
                <h3 className="question-headline text-[22px] md:text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                  Leads Not Turning Into Customers?
                </h3>
                <div className="w-16 h-1.5 bg-[#711111] rounded-full my-1" />
                <p className="font-body-lg text-[14px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                  Leads come in, but they never become paying clients
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 4. Solution / Value Prop ───────── */}
        <section id="how-it-works" className="max-w-[1350px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#711111]/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
          
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="font-display-lg-mobile md:font-display-lg text-[38px] md:text-[70px] font-black text-on-surface mb-6 tracking-tighter leading-tight">
              Here&apos;s How we FIX that
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 w-full mx-auto">
            {[
              {
                number: "01",
                title: "We make your offer easy to say yes to",
                description: "Through optimizing your offer, more people buy without you changing what you sell.",
              },
              {
                number: "02",
                title: "We bring in qualified leads regularly",
                description: "Through paid ads, cold outreach or content monetization, you get leads every week, not just once in a while.",
              },
              {
                number: "03",
                title: "We fix the spots where leads fall off",
                description: "Through conversion rate optimization, more of your leads turn into paying customers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-panel ghost-border p-10 md:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(113,17,17,0.15)] transition-all duration-500 border border-[#F0F3F5]/15 bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#711111]/20 blur-[50px] group-hover:bg-[#711111]/40 transition-all duration-500 pointer-events-none" />

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-center justify-start">
                    <span className="font-headline-md text-[44px] md:text-[54px] font-black text-on-surface/30 group-hover:text-white transition-colors duration-500 select-none tracking-tighter leading-none drop-shadow-[0_0_12px_rgba(113,17,17,0.3)]">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-headline-md text-[28px] md:text-[32px] font-bold text-on-surface tracking-tight group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#711111] rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>

                  <p className="font-body-lg text-[14px] md:text-[18px] text-on-surface-variant leading-relaxed opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ───────── 9. Final CTA (Inverted White/Black Editorial Redesign) ───────── */}
        <section className="min-h-[70vh] md:min-h-[80vh] w-full inverted-section bg-[#FFFFFF] py-32 md:py-52 relative z-10 flex flex-col items-center justify-center overflow-hidden border-t border-white/10 shadow-2xl mt-12">
          {/* Subtle background warm red ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-[#711111]/[0.06] blur-[160px] pointer-events-none -z-0" />
          
          <div className="max-w-[1350px] mx-auto text-center px-6 md:px-12 flex flex-col items-center justify-center z-10">
            <h2 className="font-display-lg-mobile md:font-display-lg text-[38px] md:text-[70px] font-black text-[#0C0C0C] mb-8 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
              Start With A Free 4-week Plan
            </h2>
            <p className="mb-8 text-[14px] md:text-[18px] leading-relaxed font-medium max-w-xl text-[#0C0C0C]">
              Fill out a form (takes 5 min) and receive a <strong>READY TO USE</strong> personalized plan.
            </p>
            <Link
              className="btn-on-light group shadow-[0_15px_35px_rgba(113,17,17,0.25)] hover:shadow-[0_20px_45px_rgba(113,17,17,0.4)] transition-all duration-300"
              href="/questionnaire"
            >
              Get Yours
              <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background dark:bg-background border-t border-white/10 mt-auto relative z-10">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Far Left: Big Logo & REVON SOLUTIONS where container starts */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="REVON SOLUTIONS Logo"
              width={36}
              height={36}
              className="h-[36px] w-auto brightness-0 invert"
            />
            <span className="brand-logo font-headline-md text-[24px] font-black tracking-tighter text-on-surface">
              REVON SOLUTIONS
            </span>
          </div>

          {/* Center: Terms of Service & Privacy Policy */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              className="font-label-md text-[13px] text-on-surface-variant hover:text-white transition-colors duration-300 uppercase tracking-widest font-semibold"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="font-label-md text-[13px] text-on-surface-variant hover:text-white transition-colors duration-300 uppercase tracking-widest font-semibold"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Far Right: Copyright on right side of container */}
          <div className="font-body-md text-[13px] text-on-surface-variant opacity-60 font-medium">
            © 2026 REVON SOLUTIONS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
