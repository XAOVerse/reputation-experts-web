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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="max-w-[520px]">
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              Authentic review growth
            </p>
            <h2
              className="text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)" }}
            >
              More 5-star reviews, generated the right way, in the moments
              customers are most likely to leave one.
            </h2>
            <p className="text-[#444] text-[16px] leading-[1.65] mb-5">
              The same enterprise platform we use for global hospitality, retail
              and healthcare groups powers your campaigns: review requests sent
              by SMS, email and WhatsApp at the exact moment of completed
              service, with site-of-choice routing so customers leave the review
              on the platform where it builds the most trust for your business.
            </p>
            <p className="text-[#444] text-[16px] leading-[1.65]">
              Templates and timing are A/B tested continuously, and the system
              never pressures unhappy customers — recovery is handled by your
              team privately, before it ever becomes a public 1-star.
            </p>
          </div>

          {/* Image */}
          <div className="bg-[#f4f6f9] rounded-3xl p-6 lg:p-8">
            <Image
              src="/images/reviews/reporting-agent.png"
              alt="Review Reporting Agent showing per-location performance, automated review request campaigns and sentiment analysis."
              width={1800}
              height={755}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
