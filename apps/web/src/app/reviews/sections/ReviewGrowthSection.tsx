import React from "react";
import Image from "next/image";

export function ReviewGrowthSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Review growth"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Top row — narrow heading (left) + wide raw image (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Heading column — narrow */}
          <div className="lg:col-span-3">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
              Authentic review growth
            </p>
            <h2
              className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
            >
              More 5-star reviews, faster, every month.
            </h2>
            <p className="text-[#555] text-[15px] leading-[1.7]">
              We grow your review count and lift your score. Backed by a written
              90-day guarantee, miss the target, we work for free until it is
              met.
            </p>
          </div>

          {/* Image column — wide, raw image with rounded corners (no card) */}
          <div className="lg:col-span-9">
            <Image
              src="/images/reviews/reporting-agent.png"
              alt="Reputation Experts dashboard showing reviews growth and per-location score tracking across UK cities."
              width={1800}
              height={755}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        {/* Two outcomes below */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-14 lg:gap-y-10">
          <div>
            <h3 className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
              Review count goes up
            </h3>
            <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7]">
              You see more authentic 5-star reviews on Google, Trustpilot,
              Tripadvisor and every platform that matters to your buyers, every
              single month. New volume, fresh dates, real customers. The kind
              of cadence that builds trust with prospects and the AI engines
              they ask.
            </p>
          </div>
          <div>
            <h3 className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
              Score goes up, guaranteed in 90 days
            </h3>
            <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7]">
              Before we start we agree the target score in writing. By day 90 we
              have hit it, or the work continues at no extra cost until we do.
              The outcome sits with us, not you, which is how this work should
              be sold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
