"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function QuestionnairePage() {
  // Page state: 1 = Basic Info, 2 = 6-Step Questions, 3 = Thank You
  const [page, setPage] = useState<1 | 2 | 3>(1);
  const [qIndex, setQIndex] = useState<number>(0); // 0 to 5 for the 6 questions
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Page 1 state
  const [name, setName] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Page 2 answers state
  const [whatWeSell, setWhatWeSell] = useState<string>("");
  const [clientSource, setClientSource] = useState<string>("");
  const [monthlyClients, setMonthlyClients] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [nextAction, setNextAction] = useState<string>("");
  const [followUpSpeed, setFollowUpSpeed] = useState<string>("");

  const handlePage1Next = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !businessName.trim() || !email.trim()) {
      setErrorMsg("Please fill out all required (*) fields.");
      return;
    }
    setErrorMsg("");
    setPage(2);
    setQIndex(0);
  };

  const handleQNext = () => {
    setErrorMsg("");
    const currentAnswer = [
      whatWeSell,
      clientSource,
      monthlyClients,
      websiteUrl,
      nextAction,
      followUpSpeed
    ][qIndex];

    if (!currentAnswer && qIndex !== 3) {
      setErrorMsg("Please select or enter an answer.");
      return;
    }

    if (qIndex < 5) {
      setQIndex(qIndex + 1);
    } else {
      setPage(3);
    }
  };

  const handleQBack = () => {
    setErrorMsg("");
    if (qIndex > 0) {
      setQIndex(qIndex - 1);
    } else {
      setPage(1);
    }
  };

  return (
    <div className="h-screen max-h-screen w-full bg-[#FFFFFF] flex flex-col items-center justify-between font-body-lg overflow-hidden select-none">
      {/* 
        CRITICAL OVERRIDES: Force strictly 100vh white screen with black text and zero scroll.
        Includes high-intensity transition keyframes for dynamic step changes.
      */}
      <style>{`
        html, body {
          background-color: #FFFFFF !important;
          color: #0C0C0C !important;
          height: 100vh !important;
          max-height: 100vh !important;
          overflow: hidden !important;
          margin: 0;
          padding: 0;
        }
        .brand-logo, .brand-logo span, .override-black, .override-black * {
          color: #0C0C0C !important;
        }
        .override-white, .override-white * {
          color: #FFFFFF !important;
        }
        @keyframes intenseFadeSlide {
          0% {
            opacity: 0;
            transform: translateY(28px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-step {
          animation: intenseFadeSlide 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      {/* Minimal Header */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center flex-shrink-0 bg-[#FFFFFF] z-10">
        <Link className="brand-logo flex items-center gap-3 text-[22px] sm:text-[24px] font-black tracking-tight" href="/">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} className="h-[30px] w-auto brightness-0" />
          <span className="override-black font-black">REVON SOLUTIONS</span>
        </Link>
        <Link href="/" className="override-black flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Back</span>
        </Link>
      </header>

      {/* Main Container - Widened to 1350px max width */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 w-full max-w-[1350px] mx-auto overflow-hidden max-h-full">
        
        {/* PAGE 1: BASIC INFO */}
        {page === 1 && (
          <div key="page-1" className="animate-step w-full max-w-[700px] mx-auto flex flex-col items-center text-center">
            {/* Centered Headline */}
            <h1 className="override-black text-[30px] sm:text-[38px] md:text-[46px] font-black tracking-tight leading-[1.1] mb-6 sm:mb-8 w-full max-w-[600px]">
              Where should we send your free plan?
            </h1>

            {/* Horizontally Expanded Form Below */}
            <div className="w-full max-w-[480px] text-left">
              {errorMsg && (
                <div className="mb-2.5 text-[#711111] font-bold text-xs text-center">{errorMsg}</div>
              )}

              <form onSubmit={handlePage1Next} className="space-y-3 sm:space-y-3.5">
                <div>
                  <label className="override-black block text-xs font-extrabold mb-1 uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="override-black w-full bg-white border border-[#0C0C0C]/35 rounded-full px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-[15px] focus:outline-none focus:ring-0 focus:border-[#0C0C0C]/35 placeholder:text-[#0C0C0C]/40 transition-none"
                  />
                </div>

                <div>
                  <label className="override-black block text-xs font-extrabold mb-1 uppercase tracking-wider">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Acme Corp"
                    className="override-black w-full bg-white border border-[#0C0C0C]/35 rounded-full px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-[15px] focus:outline-none focus:ring-0 focus:border-[#0C0C0C]/35 placeholder:text-[#0C0C0C]/40 transition-none"
                  />
                </div>

                <div>
                  <label className="override-black block text-xs font-extrabold mb-1 uppercase tracking-wider">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@acmecorp.com"
                    className="override-black w-full bg-white border border-[#0C0C0C]/35 rounded-full px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-[15px] focus:outline-none focus:ring-0 focus:border-[#0C0C0C]/35 placeholder:text-[#0C0C0C]/40 transition-none"
                  />
                </div>

                {/* Centered Next Button (No shadow, 2:1 horizontal/vertical padding ratio) */}
                <div className="flex justify-center pt-4 sm:pt-5">
                  <button
                    type="submit"
                    style={{ padding: "12px 24px" }}
                    className="override-white bg-[#0C0C0C] font-black text-xs sm:text-sm uppercase tracking-wider rounded-full hover:opacity-85 transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-none"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* PAGE 2: QUESTIONS (1 Per View with High-Intensity Transition) */}
        {page === 2 && (
          <div key={`page-2-q-${qIndex}`} className="animate-step w-full max-w-[700px] mx-auto flex flex-col items-center text-center">
            
            {/* Centered Headline */}
            <div className="w-full mb-5 sm:mb-7 max-w-[620px]">
              {qIndex === 0 && (
                <h1 className="override-black text-[28px] sm:text-[36px] md:text-[40px] font-black tracking-tight leading-[1.15]">
                  What do you sell? Say it in one short sentence.
                </h1>
              )}
              {qIndex === 1 && (
                <h1 className="override-black text-[28px] sm:text-[36px] md:text-[40px] font-black tracking-tight leading-[1.15]">
                  Where do most of your clients come from now?
                </h1>
              )}
              {qIndex === 2 && (
                <h1 className="override-black text-[28px] sm:text-[36px] md:text-[40px] font-black tracking-tight leading-[1.15]">
                  How many new clients do you get each month right now?
                </h1>
              )}
              {qIndex === 3 && (
                <h1 className="override-black text-[28px] sm:text-[36px] md:text-[40px] font-black tracking-tight leading-[1.15]">
                  Add the link to your website or landing page.
                </h1>
              )}
              {qIndex === 4 && (
                <h1 className="override-black text-[28px] sm:text-[36px] md:text-[40px] font-black tracking-tight leading-[1.15]">
                  When someone shows they are interested, what do you do next?
                </h1>
              )}
              {qIndex === 5 && (
                <h1 className="override-black text-[28px] sm:text-[36px] md:text-[40px] font-black tracking-tight leading-[1.15]">
                  How fast do you follow up with a new lead?
                </h1>
              )}
            </div>

            {/* Horizontally Expanded Form / Options Below */}
            <div className="w-full max-w-[480px] text-left">
              {errorMsg && (
                <div className="mb-2.5 text-[#711111] font-bold text-xs text-center">{errorMsg}</div>
              )}

              <div className="space-y-2 sm:space-y-2.5">
                {/* Q1 */}
                {qIndex === 0 && (
                  <input
                    type="text"
                    value={whatWeSell}
                    onChange={(e) => setWhatWeSell(e.target.value)}
                    placeholder="e.g., Lead gen for real estate agents"
                    className="override-black w-full bg-white border border-[#0C0C0C]/35 rounded-full px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-[15px] focus:outline-none focus:ring-0 focus:border-[#0C0C0C]/35 transition-none"
                    autoFocus
                  />
                )}

                {/* Q2 */}
                {qIndex === 1 && (
                  <div className="flex flex-col gap-2 sm:gap-2.5">
                    {["Ads", "Cold outreach", "Content", "Referrals", "Not sure"].map((opt) => {
                      const selected = clientSource === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setClientSource(opt)}
                          className={`py-3 px-6 rounded-full border font-extrabold text-sm sm:text-[15px] text-center transition-all cursor-pointer ${
                            selected
                              ? "override-white bg-[#0C0C0C] border-[#0C0C0C]"
                              : "override-black bg-white border-[#0C0C0C]/35 hover:bg-black/5"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Q3 (Direct Typed Input Only) */}
                {qIndex === 2 && (
                  <div>
                    <input
                      type="text"
                      value={monthlyClients}
                      onChange={(e) => setMonthlyClients(e.target.value)}
                      placeholder="Type your answer (e.g., 5 clients)..."
                      className="override-black w-full bg-white border border-[#0C0C0C]/35 rounded-full px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-[15px] focus:outline-none focus:ring-0 focus:border-[#0C0C0C]/35 transition-none"
                      autoFocus
                    />
                  </div>
                )}

                {/* Q4 */}
                {qIndex === 3 && (
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourwebsite.com or @social"
                    className="override-black w-full bg-white border border-[#0C0C0C]/35 rounded-full px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-[15px] focus:outline-none focus:ring-0 focus:border-[#0C0C0C]/35 transition-none"
                    autoFocus
                  />
                )}

                {/* Q5 */}
                {qIndex === 4 && (
                  <div className="flex flex-col gap-2.5">
                    {["I call them", "I email them"].map((opt) => {
                      const selected = nextAction === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setNextAction(opt)}
                          className={`py-3.5 px-6 rounded-full border font-extrabold text-sm sm:text-[15px] text-center transition-all cursor-pointer ${
                            selected
                              ? "override-white bg-[#0C0C0C] border-[#0C0C0C]"
                              : "override-black bg-white border-[#0C0C0C]/35 hover:bg-black/5"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                    <input
                      type="text"
                      value={!["I call them", "I email them"].includes(nextAction) ? nextAction : ""}
                      onChange={(e) => setNextAction(e.target.value)}
                      placeholder="Or type what you do..."
                      className="override-black w-full bg-white border border-[#0C0C0C]/35 rounded-full px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-[15px] focus:outline-none focus:ring-0 focus:border-[#0C0C0C]/35 transition-none"
                    />
                  </div>
                )}

                {/* Q6 */}
                {qIndex === 5 && (
                  <div className="flex flex-col gap-2.5">
                    {["Same day", "1 - 2 days", "3+ days"].map((opt) => {
                      const selected = followUpSpeed === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFollowUpSpeed(opt)}
                          className={`py-3.5 px-6 rounded-full border font-extrabold text-sm sm:text-[15px] text-center transition-all cursor-pointer ${
                            selected
                              ? "override-white bg-[#0C0C0C] border-[#0C0C0C]"
                              : "override-black bg-white border-[#0C0C0C]/35 hover:bg-black/5"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Centered Controls */}
                <div className="flex justify-center items-center gap-3 pt-4 sm:pt-5">
                  <button
                    type="button"
                    onClick={handleQBack}
                    style={{ padding: "12px 24px" }}
                    className="override-black rounded-full border border-[#0C0C0C]/35 font-extrabold text-xs uppercase tracking-wider hover:bg-black/5 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-none"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleQNext}
                    style={{ padding: "12px 24px" }}
                    className="override-white bg-[#0C0C0C] font-black text-xs sm:text-sm uppercase tracking-wider rounded-full hover:opacity-85 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-none"
                  >
                    <span>{qIndex < 5 ? "Next" : "Submit"}</span>
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Minimalist Dotted Step Indicator relocated underneath buttons without numbers, ticks, or lines */}
              <div className="flex items-center justify-center gap-2.5 pt-7 sm:pt-8">
                {[0, 1, 2, 3, 4, 5].map((stepIdx) => {
                  const isCompletedOrCurrent = stepIdx <= qIndex;
                  const isCurrent = stepIdx === qIndex;
                  return (
                    <div
                      key={stepIdx}
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#0C0C0C] scale-125"
                          : isCompletedOrCurrent
                          ? "bg-[#0C0C0C]/60"
                          : "bg-[#0C0C0C]/15"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: THANK YOU PAGE (Split-Screen Horizontally Stretched to 1350px) */}
        {page === 3 && (
          <div key="page-3" className="animate-step w-full max-w-[1350px] mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-36 xl:gap-48 items-center text-left py-6">
            
            {/* Left Side: Headline + Less Bold Subheadline */}
            <div className="flex flex-col items-start justify-center pr-0 md:pr-4 lg:pr-8 max-w-[620px] mx-auto md:mx-0 md:ml-auto">
              <h1 className="override-black text-[34px] sm:text-[46px] lg:text-[54px] font-black tracking-tight leading-[1.08] mb-6 sm:mb-8">
                Your 4-week plan is on the way!
              </h1>
              
              <p className="override-black text-base sm:text-lg md:text-xl font-medium max-w-[540px] opacity-80 leading-relaxed">
                We are building your custom growth plan right now. Look for an email from us soon.
              </p>
            </div>

            {/* Right Side: Extra Bold Header + Less Bold Numbered List + Back To Home Button at End */}
            <div className="flex flex-col items-start justify-center pl-0 md:pl-4 lg:pl-8 max-w-[640px] mx-auto md:mx-0 md:mr-auto">
              <h3 className="override-black font-black text-2xl sm:text-3xl md:text-[32px] mb-6 sm:mb-8 tracking-tight">
                Here&apos;s what you get
              </h3>

              <ol className="space-y-6 sm:space-y-7 text-base sm:text-lg md:text-[18px] font-medium leading-relaxed list-none m-0 p-0 mb-8 sm:mb-10">
                <li className="override-black flex items-start gap-3 sm:gap-4">
                  <span className="font-bold flex-shrink-0">1.</span>
                  <span>A custom video showing you exactly where leads are getting lost in your process.</span>
                </li>
                <li className="override-black flex items-start gap-3 sm:gap-4">
                  <span className="font-bold flex-shrink-0">2.</span>
                  <span>Simple fixes to turn those leads into more paying customers.</span>
                </li>
                <li className="override-black flex items-start gap-3 sm:gap-4">
                  <span className="font-bold flex-shrink-0">3.</span>
                  <span>A 30-day advertising checklist guaranteed to get your more qualified leads.</span>
                </li>
              </ol>

              <div>
                <Link
                  href="/"
                  style={{ padding: "12px 24px" }}
                  className="override-white inline-flex items-center justify-center gap-2.5 bg-[#0C0C0C] font-black text-xs sm:text-sm uppercase tracking-wider rounded-full hover:opacity-85 shadow-none"
                >
                  <span>Back To Home</span>
                  <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Tiny spacer for vertical balancing in 100vh layout */}
      <div className="h-2 w-full flex-shrink-0 bg-[#FFFFFF]" />
    </div>
  );
}
