"use client";

import React from "react";

export function SearchEvolvedSection() {
  return (
    <section
      className="bg-white py-10 lg:py-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Search has evolved"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2
          className="text-center text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-12 lg:mb-16 max-w-[1100px] mx-auto"
          style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
        >
          Search has changed. Customers now ask AI for the answer.
        </h2>

        <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: pull stat */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <p
                className="text-[#0f0f0f] font-medium leading-[1.05] tracking-[-0.03em] mb-3"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
              >
                Roughly half of UK consumers
              </p>
              <p className="text-[#444] text-[18px] leading-[1.55] text-justify lg:text-left">
                now use AI-powered search at least once a week when deciding
                which business to buy from, book with, or visit.
              </p>
            </div>

            {/* Right: stylised illustration of an AI conversation */}
            <div className="bg-gradient-to-br from-[#fff5f1] to-[#f5f0ff] p-8 lg:p-12 flex items-center justify-center min-h-[320px]">
              <div className="w-full max-w-[420px] space-y-3">
                <div className="bg-white rounded-2xl rounded-bl-md border border-[#eee] px-4 py-3 max-w-[80%] shadow-sm">
                  <p className="text-[13px] text-[#5f6368] mb-1 font-semibold uppercase tracking-[0.1em]">
                    Customer
                  </p>
                  <p className="text-[14px] text-[#202124] leading-[1.5]">
                    Which is the best aesthetic clinic in Mayfair with bilingual French and Mandarin speaking doctors?
                  </p>
                </div>
                <div className="bg-[#0f0f0f] text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[85%] shadow-sm ml-auto">
                  <p className="text-[12px] text-[#bbb] mb-1 font-semibold uppercase tracking-[0.1em]">
                    AI
                  </p>
                  <p className="text-[14px] leading-[1.5]">
                    Three clinics in Mayfair match your criteria. The most highly rated, with multilingual care confirmed across reviews, is…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
