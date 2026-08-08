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
              className="brand-logo flex items-center gap-2.5 text-[18px] md:text-[20px] font-black tracking-tighter text-[#0C0C0C] whitespace-nowrap"
              href="/"
            >
              <Image
                src="/logo.svg"
                alt="REVON SOLUTIONS Logo"
                width={30}
                height={30}
                className="h-[26px] w-auto brightness-0"
              />
              <span>REVON SOLUTIONS</span>
            </Link>
          </div>

          {/* Center: Nav links — hidden on mobile, visible on md+ */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            <Link
              className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#0C0C0C] hover:text-[#EE0000] transition-colors tracking-widest uppercase"
              href="#how-it-works"
            >
              Services
            </Link>
            <Link
              className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#0C0C0C] hover:text-[#EE0000] transition-colors tracking-widest uppercase"
              href="/form"
            >
              Contact
            </Link>
          </nav>

          {/* Right: CTA text link — hidden on mobile, visible on md+ */}
          <div className="ml-auto hidden md:flex items-center">
            <Link
              className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#0C0C0C] hover:text-[#EE0000] transition-colors tracking-widest uppercase"
              href="/form"
            >
              Get Your Free 4-week Plan →
            </Link>
          </div>

        </div>
      </header>

      <main className="flex-grow relative overflow-hidden">

        <div className="relative w-full min-h-[110vh] bg-[#F6F9FC] flex items-center justify-center">
          
          <section className="min-h-[110vh] max-w-[1350px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center pt-20 pb-36 md:py-36 lg:py-48 text-center relative z-10">

            <h1 className="hero-headline text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-[#0C0C0C] mb-6 md:mb-8 max-w-4xl mx-auto tracking-tighter leading-[1.08] md:leading-tight">
            Turn Strangers Into <span className="text-[#EE0000]">PAYING CUSTOMERS</span>
          </h1>
          <p className="font-body-lg text-[17px] md:text-[16px] lg:text-[18px] leading-relaxed text-[#0C0C0C]/70 max-w-2xl mx-auto mb-8 md:mb-10">
            Not enough people buying from you? We fix that in 4 weeks with a 7-figure strategy built just for you.
          </p>
          <Link
            className="btn-solid-black group min-h-[46px] mx-auto"
            href="/form"
          >
            Get Your Free 4-week Plan
            <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
        </div>

        {/* ───────── 3. Problem (Inverted White/Black Editorial Redesign) ───────── */}
        <section className="w-full inverted-section bg-[#F6F9FC] py-20 md:py-32 relative z-10 overflow-hidden border-y border-white/10 shadow-2xl">
          {/* Removed background warm red ambient glows */}
          <div className="max-w-[1350px] mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-[#0C0C0C] mb-16 md:mb-24 text-center tracking-tighter leading-tight">
              Is This <span className="text-[#EE0000]">YOU?</span>
            </h2>

            {/* 3 Problems in the same row - Perfectly aligned elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-stretch w-full">
              {/* Item 01 */}
              <div className="flex flex-col items-center text-center justify-between gap-4 h-full">
                <div className="flex flex-col items-center w-full">
                  <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                    01
                  </div>
                  <div className="min-h-[70px] md:min-h-[95px] flex items-center justify-center w-full px-2">
                    <h3 className="question-headline text-[24px] md:text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                      Leads Not The Right <br /> Fit?
                    </h3>
                  </div>
                </div>

                <div className="w-16 h-1.5 bg-[#EE0000] rounded-full my-2 flex-shrink-0" />

                <div className="min-h-[60px] md:min-h-[80px] flex items-start justify-center w-full max-w-[340px]">
                  <p className="font-body-lg text-[17px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                    You get leads who were never going to buy
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="flex flex-col items-center text-center justify-between gap-4 h-full">
                <div className="flex flex-col items-center w-full">
                  <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                    02
                  </div>
                  <div className="min-h-[70px] md:min-h-[95px] flex items-center justify-center w-full px-2">
                    <h3 className="question-headline text-[24px] md:text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                      Not Getting Leads Consistently?
                    </h3>
                  </div>
                </div>

                <div className="w-16 h-1.5 bg-[#EE0000] rounded-full my-2 flex-shrink-0" />

                <div className="min-h-[60px] md:min-h-[80px] flex items-start justify-center w-full max-w-[340px]">
                  <p className="font-body-lg text-[17px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                    Even when they are the right fit, there&apos;s just not enough of them consistently coming in
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="flex flex-col items-center text-center justify-between gap-4 h-full">
                <div className="flex flex-col items-center w-full">
                  <div className="select-none pointer-events-none watermark-number text-[56px] md:text-[120px] leading-none tracking-tighter -mb-2">
                    03
                  </div>
                  <div className="min-h-[70px] md:min-h-[95px] flex items-center justify-center w-full px-2">
                    <h3 className="question-headline text-[24px] md:text-[34px] font-extrabold leading-[1.15] tracking-tight text-[#0C0C0C]">
                      Leads Not Turning Into Customers?
                    </h3>
                  </div>
                </div>

                <div className="w-16 h-1.5 bg-[#EE0000] rounded-full my-2 flex-shrink-0" />

                <div className="min-h-[60px] md:min-h-[80px] flex items-start justify-center w-full max-w-[340px]">
                  <p className="font-body-lg text-[17px] md:text-[18px] leading-relaxed text-[#0C0C0C]">
                    Leads come in, but they never become paying clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 4. Solution / Value Prop ───────── */}
        <section id="how-it-works" className="w-full bg-[#F6F9FC] px-6 md:px-12 py-16 md:py-24 lg:py-32 relative z-10">

          
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16 lg:mb-24">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-[#0C0C0C] mb-4 md:mb-6 tracking-tighter leading-tight">
              Here&apos;s How we <span className="text-[#EE0000]">FIX</span> that
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 w-full max-w-[1350px] mx-auto">
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
                className="p-6 md:p-8 lg:p-12 rounded-2xl lg:rounded-3xl flex flex-col justify-between relative overflow-hidden group border border-black/10 hover:-translate-y-2.5 transition-all duration-500"
              >

                <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 relative z-10">
                  <div className="flex items-center justify-start">
                    <span className="font-headline-md text-[28px] md:text-[42px] lg:text-[54px] font-black text-[#0C0C0C] group-hover:text-[#EE0000] transition-colors duration-500 select-none tracking-tighter leading-none">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    <h3 className="font-headline-md text-[24px] md:text-[25px] lg:text-[32px] font-bold text-[#0C0C0C] tracking-tight group-hover:text-[#EE0000] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-8 md:w-10 lg:w-12 h-0.5 lg:h-1 bg-[#EE0000] rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>

                  <p className="font-body-lg text-[17px] md:text-[15px] lg:text-[18px] text-[#0C0C0C]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ───────── 9. Final CTA (Inverted White/Black Editorial Redesign) ───────── */}
        <section className="min-h-[70vh] md:min-h-[80vh] w-full inverted-section bg-[#F6F9FC] py-32 md:py-52 relative z-10 flex flex-col items-center justify-center overflow-hidden border-t border-white/10 shadow-2xl mt-12">
          {/* Removed background warm red ambient glow */}
          <div className="max-w-[1350px] mx-auto text-center px-6 md:px-12 flex flex-col items-center justify-center z-10">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-[#0C0C0C] mb-8 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
              Start With A <span className="text-[#EE0000]">Free 4-week Plan</span>
            </h2>
            <p className="mb-8 text-[17px] md:text-[18px] leading-relaxed font-medium max-w-xl text-[#0C0C0C]">
              Fill out a form (takes 5 min) and receive a <strong>READY TO USE</strong> personalized plan.
            </p>
            <Link
              className="btn-on-light group shadow-[0_15px_35px_rgba(226,50,50,0.25)] hover:shadow-[0_20px_45px_rgba(226,50,50,0.4)] transition-all duration-300"
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
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Far Left: Big Logo & REVON SOLUTIONS where container starts */}
          <div className="flex items-center gap-2.5 md:gap-3">
            <Image
              src="/logo.svg"
              alt="REVON SOLUTIONS Logo"
              width={38}
              height={36}
              className="h-[28px] md:h-[36px] w-auto brightness-0"
            />
            <span className="brand-logo font-headline-md text-[20px] md:text-[24px] font-black tracking-tighter text-on-surface whitespace-nowrap">
              REVON SOLUTIONS
            </span>
          </div>

          {/* Center: Terms of Service & Privacy Policy */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              className="font-label-md text-[14px] md:text-[13px] text-on-surface-variant hover:text-[#EE0000] transition-colors duration-300 uppercase tracking-widest font-semibold"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="font-label-md text-[14px] md:text-[13px] text-on-surface-variant hover:text-[#EE0000] transition-colors duration-300 uppercase tracking-widest font-semibold"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Far Right: Copyright on right side of container */}
          <div className="font-body-md text-[14px] md:text-[13px] text-on-surface-variant opacity-60 font-medium">
            © 2026 REVON SOLUTIONS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
