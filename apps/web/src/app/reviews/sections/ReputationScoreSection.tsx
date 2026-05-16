import React from "react";
import Image from "next/image";

export function ReputationScoreSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reputation Score"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Image (left on desktop) */}
          <div className="bg-[#f4f6f9] rounded-3xl p-6 lg:p-8 lg:order-1 order-2">
            <Image
              src="/images/reviews/reputation-score.png"
              alt="Reputation Score view showing star rating, review velocity, sentiment and competitor comparison across locations."
              width={1800}
              height={1090}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Copy (right on desktop) */}
          <div className="max-w-[520px] lg:order-2 order-1">
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              Reputation Score
            </p>
            <h2
              className="text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)" }}
            >
              A single, honest read on how your brand is being judged online.
            </h2>
            <p className="text-[#444] text-[16px] leading-[1.65] mb-5">
              Star rating, review velocity, sentiment trend, response times and
              competitor benchmarks rolled into one score per location, updated
              weekly. You see what is improving, what is decaying and what is
              dragging the average down — without spreadsheets and without
              having to log into seven different platforms.
            </p>
            <p className="text-[#444] text-[16px] leading-[1.65]">
              Your dedicated reputation manager walks you through it every
              month, flags the highest-leverage fixes, and turns the report into
              the next 30 days of work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
