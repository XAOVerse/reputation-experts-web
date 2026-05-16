"use client";

import React from "react";

export function StatBannerSection() {
  return (
    <section
      className="bg-white py-9 lg:py-14"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="AI visibility outcome"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text (first on mobile via source order; right column on desktop via order) */}
          <div className="lg:order-2">
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              The outcome
            </p>
            <h2
              className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)" }}
            >
              Multi-location brands see AI search visibility lift{" "}
              <span className="text-[#e8503a]">61% within 60 days</span>{" "}
              of switching on Search AI.
            </h2>
          </div>

          {/* Chart (after text on mobile; left column on desktop via order) */}
          <div className="lg:order-1">
            <img
              src="/images/outcome-chart.png"
              alt="Search AI outcome chart: AI overview accuracy lift over a 12-week period across Google AI Overview, ChatGPT, Gemini and Perplexity for UK multi-location brands."
              width={1625}
              height={968}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
