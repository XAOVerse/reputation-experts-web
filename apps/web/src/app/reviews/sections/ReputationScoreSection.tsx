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

          {/* Image column — wide, raw image with rounded corners (no card) */}
          <div className="lg:col-span-9">
            <Image
              src="/images/reviews/reputation-score.png"
              alt="Reputation Score tracking dashboard showing star rating, review count, response rate and score over time across UK locations."
              width={1804}
              height={872}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        {/* Two outcomes below — tight gap */}
        <div className="mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-14 lg:gap-y-10">
          <div>
            <h3 className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
              One score, every location, every week
            </h3>
            <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7]">
              Star rating, review velocity, sentiment trend, response time and
              competitor benchmarks rolled into a single number per location.
              No spreadsheets, no logging into seven different platforms, no
              guessing where the leak is.
            </p>
          </div>
          <div>
            <h3 className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
              The fixes, ranked by impact
            </h3>
            <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7]">
              Your reputation manager turns the report into the next 30 days of
              work, ranked by which moves will lift your score the fastest. No
              vanity metrics, no slides padding out the deck, just the work
              that changes the number.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
