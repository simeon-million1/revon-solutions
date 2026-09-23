import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Compelling Offer",
      subtitle: "Make your offer easier to buy.",
      description: "We improve what you sell, how you present it, and what happens after the sale.",
      bullets: ["Value", "Attraction", "Continuity", "Upsells", "Downsells"],
    },
    {
      title: "Strategic Marketing",
      subtitle: "Bring in more of the right people.",
      description: "We build marketing systems that help you reach and attract potential clients.",
      bullets: ["Cold Email & DMs", "Paid Ads", "Referral System", "Content", "SEO"],
    },
    {
      title: "Strong Conversion",
      subtitle: "Turn more leads into booked appointments.",
      description: "We fix the weak points that cause interested leads to drop off.",
      bullets: ["Landing Page Optimization", "Speed to Lead", "Follow-Up Automation"],
    },
    {
      title: "High Close-Rate",
      subtitle: "Close more deals.",
      description: "We improve your sales processes.",
      bullets: ["Script Optimization", "Objection Handling"],
    }
  ];

  return (
    <>
      {/* ───────── 1. Navigation ───────── */}
      <header className="absolute top-0 left-0 right-0 w-full z-50 bg-transparent">
        <div className="relative flex items-center max-w-[1350px] mx-auto px-6 md:px-12 h-20">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link className="brand-logo flex items-center gap-1.5 text-[22px] font-black tracking-tighter text-[#0C0C0C] whitespace-nowrap" href="/">
              <Image src="/logo.svg" alt="REVON SOLUTIONS Logo" width={36} height={36} className="h-[28px] w-auto brightness-0" />
              <span>REVON SOLUTIONS</span>
            </Link>
          </div>

          {/* Center: Nav links — phone-only hidden */}
          <nav className="flex max-sm:hidden absolute left-1/2 -translate-x-1/2 items-center gap-10">
            <Link className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#c90101] hover:text-[#c90101] transition-colors tracking-widest uppercase" href="/services">
              Services
            </Link>
            <Link className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#0C0C0C] hover:text-[#c90101] transition-colors tracking-widest uppercase" href="/form">
              Contact
            </Link>
          </nav>

          {/* Right: CTA text link — phone-only hidden */}
          <div className="ml-auto flex max-sm:hidden items-center">
            <Link className="font-label-md text-[14px] md:text-[13px] font-semibold text-[#0C0C0C] hover:text-[#c90101] transition-colors tracking-widest uppercase" href="/form">
              Get Your Free Strategy →
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow relative overflow-hidden bg-[#F0F3F5]">
        
        {/* ───────── Hero Section (Left-aligned, No CTA) ───────── */}
        <section className="w-full pt-36 pb-12 md:pt-44 md:pb-16 px-6 md:px-12 max-w-[1350px] mx-auto flex flex-col items-start text-left relative z-10">
          <h1 className="hero-headline text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-[#0C0C0C] mb-6 max-w-4xl tracking-tighter leading-[1.05]">
            Everything You Need to <span className="text-[#c90101]">Get More Clients.</span>
          </h1>
          <p className="font-body-lg text-[18px] md:text-[20px] leading-relaxed text-[#313131] max-w-2xl">
            We improve your offer, bring in the right leads, and turn more of them into clients.
          </p>
        </section>

        {/* ───────── Services Section ───────── */}
        <section className="w-full py-12 md:py-20 px-6 md:px-12 max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F0F3F5] p-8 md:p-10 lg:p-12 rounded-3xl border border-black/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full">
                <div className="flex flex-col gap-3 mb-6 md:mb-8">
                  <h2 className="font-headline-md text-[28px] md:text-[32px] font-black text-[#0C0C0C] tracking-tighter leading-tight">
                    {service.title}
                  </h2>
                  <h4 className="text-[17px] md:text-[18px] font-bold text-[#c90101] tracking-tight">
                    {service.subtitle}
                  </h4>
                  <div className="w-12 h-1 bg-[#c90101] rounded-full my-1 opacity-50" />
                  <p className="font-body-lg text-[16px] md:text-[17px] text-[#313131] leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-black/10">
                  <ul className="flex flex-col gap-3.5">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#c90101] shrink-0" />
                        <span className="font-body-md text-[16px] text-[#313131] font-semibold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── Final CTA Section ───────── */}
        <section className="w-full inverted-section bg-[#F0F3F5] py-20 md:py-28 relative z-10 flex flex-col items-center justify-center overflow-hidden border-t border-black/10 shadow-2xl mt-10">
          <div className="max-w-[1350px] mx-auto text-center px-6 md:px-12 flex flex-col items-center justify-center z-10">
            <h2 className="text-[31px] md:text-[43px] lg:text-[51px] font-black text-[#0C0C0C] mb-4 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
              A Complete <span className="text-[#c90101]">Client Acquisition System</span>
            </h2>
            <h4 className="text-[18px] md:text-[22px] font-extrabold text-[#313131] tracking-widest uppercase mb-10 opacity-70">
              Offer → Marketing → Conversion → Sales
            </h4>
            
            <div className="bg-[#F0F3F5] p-8 md:p-10 rounded-3xl border border-black/10 shadow-xl w-full max-w-3xl mb-10">
              <h3 className="font-headline-md text-[20px] md:text-[24px] font-bold text-[#0C0C0C] mb-6 tracking-tight text-center">
                Built to help you:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left max-w-2xl mx-auto">
                {[
                  "Get more qualified leads",
                  "Convert more leads",
                  "Close more sales",
                  "Make more revenue from each client"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#c90101] shrink-0" />
                    <span className="font-body-lg text-[17px] md:text-[18px] font-semibold text-[#0C0C0C]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link className="btn-on-light group shadow-[0_15px_35px_rgba(201,1,1,0.25)] hover:shadow-[0_20px_45px_rgba(201,1,1,0.4)] transition-all duration-300" href="/form">
              Get Your Free Strategy
              <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

      </main>

      {/* ───────── Footer ───────── */}
      <footer className="w-full bg-background border-t border-black/10 mt-auto relative z-10">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Image src="/logo.svg" alt="REVON SOLUTIONS Logo" width={36} height={36} className="h-[28px] w-auto brightness-0" />
            <span className="brand-logo text-[22px] font-black tracking-tighter text-on-surface whitespace-nowrap">
              REVON SOLUTIONS
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            <Link className="font-label-md text-[14px] md:text-[13px] text-[#313131] hover:text-[#c90101] transition-colors duration-300 uppercase tracking-widest font-semibold" href="#">
              Terms of Service
            </Link>
            <Link className="font-label-md text-[14px] md:text-[13px] text-[#313131] hover:text-[#c90101] transition-colors duration-300 uppercase tracking-widest font-semibold" href="#">
              Privacy Policy
            </Link>
          </nav>

          <div className="font-body-md text-[14px] md:text-[13px] text-[#313131] opacity-60 font-medium">
            © 2026 REVON SOLUTIONS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
