"use client";

import React from "react";
import Link from "next/link";

export function AISearchCTASection() {
  return (
    <section
      className="bg-white py-7 lg:py-10 px-5 sm:px-6 lg:px-10"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Final call to action"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl bg-[#141414] px-8 sm:px-12 lg:px-16 py-14 lg:py-16">
          <h2
            className="text-white font-normal leading-[1.15] tracking-[-0.02em] mb-12 lg:mb-14 max-w-[760px]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Be the answer AI gives when Dubai asks who is best.
          </h2>

          <div className="border-t border-white/10 mb-8" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex flex-row items-center gap-3 sm:contents">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
              >
                Talk To Expert
              </Link>
            </div>

            <p className="text-white text-[13px] sm:ml-4 leading-snug">
              Every engagement starts with a free 7-page audit of how Google AI Overview, ChatGPT, Perplexity and Gemini currently see your business, in every language your customers search in. Backed by a 90-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
