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
        <div className="relative flex items-center max-w-[1350px] mx-auto px-6 md:px-12 h-20">

          {/* Left: Logo */}
          <div className="flex items-center">
            <Link
              className="brand-logo flex items-center gap-1.5 text-[22px] font-black tracking-tighter text-[#0C0C0C] whitespace-nowrap"
              href="/"
            >
              <Image
                src="/logo.svg"
                alt="REVON SOLUTIONS Logo"
                width={36}
                height={36}
                className="h-[28px] w-auto brightness-0"
              />
              <span>REVON SOLUTIONS</span>
            </Link>
          </div>

          {/* Center: Nav links — phone-only hidden */}
          <nav className="flex max-sm:hidden absolute left-1/2 -translate-x-1/2 items-center gap-10">
            <Link
              className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#c90101] hover:text-[#c90101] transition-colors tracking-widest uppercase"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#0C0C0C] hover:text-[#c90101] transition-colors tracking-widest uppercase"
              href="/services"
            >
              Services
            </Link>
          </nav>

          {/* Right: CTA text link — phone-only hidden */}
          <div className="ml-auto flex max-sm:hidden items-center">
            <Link
              className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#0C0C0C] hover:text-[#c90101] transition-colors tracking-widest uppercase"
              href="/form"
            >
              Get Your Free Strategy →
            </Link>
          </div>

        </div>
      </header>

      <main className="flex-grow relative overflow-hidden">

        <div className="relative w-full h-screen bg-[#F0F3F5] flex items-center justify-center">
          
          <section className="h-screen max-w-[1350px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center pt-36 pb-10 text-center relative z-10">

            <h1 className="hero-headline text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-[#0C0C0C] mb-4 md:mb-6 max-w-4xl mx-auto tracking-tighter leading-[1.08] md:leading-tight">
            <span className="text-[#c90101]">$10K+/Month Service Businesses:</span> Get More Qualified Clients Every Month.
          </h1>
          <p className="font-body-lg text-[17px] md:text-[16px] lg:text-[18px] leading-relaxed text-[#313131] max-w-2xl mx-auto mb-6 md:mb-8">
            Not reaching your target number of clients? We help you build a more reliable path to growth.
          </p>
          <Link
            className="btn-solid-black group min-h-[46px] mx-auto"
            href="/form"
          >
            Get Your Free Strategy
            <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
        </div>

        {/* ───────── 3. Problem (Inverted White/Black Editorial Redesign) ───────── */}
        <section className="w-full h-screen inverted-section bg-[#F0F3F5] py-12 md:py-16 relative z-10 overflow-hidden border-y border-white/10 shadow-2xl flex items-center">
          {/* Removed background warm red ambient glows */}
          <div className="max-w-[1350px] mx-auto px-6 md:px-12 flex flex-col items-center relative z-10 w-full">
            <h2 className="text-[31px] md:text-[43px] lg:text-[51px] font-black text-[#0C0C0C] mb-14 md:mb-20 text-center tracking-tighter leading-tight">
              Do You Struggle With <span className="text-[#c90101]">ANY of These?</span>
            </h2>

            {/* 3 Problems in the same row - Perfectly aligned elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch w-full">
              {/* Item 01 */}
              <div className="flex flex-col items-center text-center justify-between gap-2 h-full">
                <div className="flex flex-col items-center w-full">
                  <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                    01
                  </div>
                  <div className="min-h-[70px] md:min-h-[95px] flex items-center justify-center w-full px-2">
                    <h3 className="question-headline text-[19px] md:text-[29px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                      Wrong People
                    </h3>
                  </div>
                </div>

                <div className="w-16 h-1.5 bg-[#c90101] rounded-full my-1.5 flex-shrink-0" />

                <div className="min-h-[60px] md:min-h-[80px] flex items-start justify-center w-full max-w-[340px]">
                  <p className="font-body-lg text-[17px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                    People who were never going to buy waste your time.
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="flex flex-col items-center text-center justify-between gap-2 h-full">
                <div className="flex flex-col items-center w-full">
                  <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                    02
                  </div>
                  <div className="min-h-[70px] md:min-h-[95px] flex items-center justify-center w-full px-2">
                    <h3 className="question-headline text-[19px] md:text-[29px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                      Lost Opportunities
                    </h3>
                  </div>
                </div>

                <div className="w-16 h-1.5 bg-[#c90101] rounded-full my-1.5 flex-shrink-0" />

                <div className="min-h-[60px] md:min-h-[80px] flex items-start justify-center w-full max-w-[340px]">
                  <p className="font-body-lg text-[17px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                    Not enough qualified leads become paying clients.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="flex flex-col items-center text-center justify-between gap-2 h-full">
                <div className="flex flex-col items-center w-full">
                  <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                    03
                  </div>
                  <div className="min-h-[70px] md:min-h-[95px] flex items-center justify-center w-full px-2">
                    <h3 className="question-headline text-[19px] md:text-[29px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                      Inconsistent Months
                    </h3>
                  </div>
                </div>

                <div className="w-16 h-1.5 bg-[#c90101] rounded-full my-1.5 flex-shrink-0" />

                <div className="min-h-[60px] md:min-h-[80px] flex items-start justify-center w-full max-w-[340px]">
                  <p className="font-body-lg text-[17px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                    Some months are good, but struggle to find clients the next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 4. Solution / Value Prop ───────── */}
        <section id="how-it-works" className="w-full min-h-screen bg-[#F0F3F5] px-6 md:px-12 py-16 md:py-20 relative z-10 flex items-center">

          <div className="w-full max-w-[1350px] mx-auto flex flex-col">
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
            <h2 className="text-[31px] md:text-[43px] lg:text-[51px] font-black text-[#0C0C0C] mb-0 tracking-tighter leading-tight">
              Here&apos;s How we <span className="text-[#c90101]">FIX</span> that
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8 w-full">
            {[
              {
                number: "01",
                title: "We make your offer more compelling",
                description: "Through enhancing your offer, more people buy from you.",
              },
              {
                number: "02",
                title: "We bring in qualified leads regularly",
                description: "Through paid ads, cold outreach or content monetization, you get qualified appointments consistently.",
              },
              {
                number: "03",
                title: "We fix the spots where leads fall off",
                description: "Through optimizing your conversion rate, more of your leads turn into clients.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group border border-black/10 hover:-translate-y-2 transition-all duration-500"
              >

                <div className="flex flex-col gap-2 md:gap-3 relative z-10">
                  <div className="flex items-center justify-start">
                    <span className="font-headline-md text-[28px] md:text-[42px] lg:text-[54px] font-black text-[#0C0C0C] group-hover:text-[#c90101] transition-colors duration-500 select-none tracking-tighter leading-none">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 md:gap-2">
                    <h3 className="font-headline-md text-[19px] md:text-[20px] lg:text-[27px] font-bold text-[#0C0C0C] tracking-tight group-hover:text-[#c90101] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-8 md:w-10 lg:w-12 h-0.5 lg:h-1 bg-[#c90101] rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>

                  <p className="font-body-lg text-[17px] md:text-[15px] lg:text-[18px] text-[#313131] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 flex justify-center">
            <Link
              className="btn-on-light group"
              href="/services"
            >
              See More
              <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          </div>
        </section>


        {/* ───────── 9. Final CTA (Inverted White/Black Editorial Redesign) ───────── */}
        <section className="w-full inverted-section bg-[#F0F3F5] py-20 md:py-28 relative z-10 flex flex-col items-center justify-center overflow-hidden border-t border-white/10 shadow-2xl">
          {/* Removed background warm red ambient glow */}
          <div className="max-w-[1350px] mx-auto text-center px-6 md:px-12 flex flex-col items-center justify-center z-10">
            <h2 className="text-[31px] md:text-[43px] lg:text-[51px] font-black text-[#0C0C0C] mb-8 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
              Start With A <span className="text-[#c90101]">FREE Strategy</span>
            </h2>
            <p className="font-body-lg text-[17px] md:text-[16px] lg:text-[18px] leading-relaxed text-[#313131] max-w-2xl mx-auto mb-8 md:mb-10">
              Fill out a form (takes 5 min) and receive a <strong>READY TO USE</strong> personalized strategy you can use in your business <strong>IMMEDIATELY</strong>.
            </p>
            <Link
              className="btn-on-light group shadow-[0_15px_35px_rgba(201,1,1,0.25)] hover:shadow-[0_20px_45px_rgba(201,1,1,0.4)] transition-all duration-300"
              href="/form"
            >
              Get Yours
              <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-black/10 mt-auto relative z-10">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Far Left: Big Logo & REVON SOLUTIONS where container starts */}
          <div className="flex items-center gap-1.5">
            <Image
              src="/logo.svg"
              alt="REVON SOLUTIONS Logo"
              width={36}
              height={36}
              className="h-[28px] w-auto brightness-0"
            />
            <span className="brand-logo text-[22px] font-black tracking-tighter text-on-surface whitespace-nowrap">
              REVON SOLUTIONS
            </span>
          </div>

          {/* Center: Terms of Service & Privacy Policy */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              className="font-label-md text-[14px] md:text-[13px] text-[#313131] hover:text-[#c90101] transition-colors duration-300 uppercase tracking-widest font-semibold"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="font-label-md text-[14px] md:text-[13px] text-[#313131] hover:text-[#c90101] transition-colors duration-300 uppercase tracking-widest font-semibold"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Far Right: Copyright on right side of container */}
          <div className="font-body-md text-[14px] md:text-[13px] text-[#313131] opacity-60 font-medium">
            © 2026 REVON SOLUTIONS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
