"use client";

import React from "react";

/**
 * TrustStripSection
 * Compact "as seen in" press logo strip just under the hero.
 * Reinforces credibility before the visitor scrolls.
 */
export function TrustStripSection() {
  return (
    <section
      className="bg-white border-y border-[#f0f0f0] py-7 lg:py-9"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="As seen in major media"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-center text-[#888] text-[11px] tracking-[0.18em] uppercase font-medium mb-5">
          Featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:gap-x-14">
          <img src="/images/forbes-logo-black.svg" alt="Forbes" style={{ height: 22, opacity: 0.7 }} />
          <img src="/images/bloomberg-logo-black.svg" alt="Bloomberg" style={{ height: 18, opacity: 0.7 }} />
          <img src="/images/ap-logo-tight.svg" alt="Associated Press" style={{ height: 18, opacity: 0.7 }} />
          <img src="/images/cbs-logo.svg" alt="CBS" style={{ height: 18, opacity: 0.7 }} />
          <img src="/images/nbc-logo.svg" alt="NBC" style={{ height: 22, opacity: 0.7 }} />
          <img src="/images/yahoo-finance-logo-black.svg" alt="Yahoo Finance" style={{ height: 22, opacity: 0.7 }} />
        </div>
      </div>
    </section>
  );
}
