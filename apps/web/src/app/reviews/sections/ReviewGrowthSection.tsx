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
              className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
            >
              More 5-star reviews, generated the right way, in the moments
              customers are most likely to leave one.
            </h2>
          </div>

          {/* Image column — wide, raw image (no card) */}
          <div className="lg:col-span-9">
            <Image
              src="/images/reviews/reporting-agent.png"
              alt="Review Reporting Agent showing per-location performance, automated review request campaigns and sentiment analysis."
              width={1800}
              height={755}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Two-column body text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-10 lg:mt-14">
          <p className="text-[#555] text-[15px] leading-[1.7]">
            The same enterprise platform we use for global hospitality, retail
            and healthcare groups powers your campaigns: review requests sent
            by SMS, email and WhatsApp at the exact moment of completed
            service, with site-of-choice routing so customers leave the review
            on the platform where it builds the most trust for your business.
          </p>
          <p className="text-[#555] text-[15px] leading-[1.7]">
            Templates and timing are A/B tested continuously, and the system
            never pressures unhappy customers, recovery is handled by your
            team privately, before it ever becomes a public 1-star. The result
            is a steady, organic-looking cadence that AI engines and Google's
            Local Pack reward.
          </p>
        </div>
      </div>
    </section>
  );
}
