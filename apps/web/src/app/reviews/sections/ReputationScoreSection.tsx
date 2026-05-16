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
        {/* Top row — narrow heading (left) + wide raw image (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Heading column — narrow */}
          <div className="lg:col-span-3">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
              Reputation Score
            </p>
            <h2
              className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
            >
              A single, honest read on how your brand is being judged online.
            </h2>
          </div>

          {/* Image column — wide, raw image (no card) */}
          <div className="lg:col-span-9">
            <Image
              src="/images/reviews/reputation-score.png"
              alt="Reputation Score view showing star rating, review velocity, sentiment and competitor comparison across locations."
              width={1800}
              height={1090}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Two-column body text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-10 lg:mt-14">
          <p className="text-[#555] text-[15px] leading-[1.7]">
            Star rating, review velocity, sentiment trend, response times and
            competitor benchmarks rolled into one score per location, updated
            weekly. You see what is improving, what is decaying and what is
            dragging the average down, without spreadsheets and without having
            to log into seven different platforms.
          </p>
          <p className="text-[#555] text-[15px] leading-[1.7]">
            Your dedicated reputation manager walks you through it every month,
            flags the highest-leverage fixes, and turns the report into the
            next 30 days of work. No vanity metrics, no slides padding out the
            report, just the moves that will lift the score.
          </p>
        </div>
      </div>
    </section>
  );
}
