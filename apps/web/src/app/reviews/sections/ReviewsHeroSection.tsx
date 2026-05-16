import React from "react";
import Image from "next/image";

export function ReviewsHeroSection() {
  return (
    <section
      className="bg-white pt-[64px]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reviews hero"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-16 pb-6 lg:pb-10">
        <h1
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[1100px]"
          style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}
        >
          The reputation engine that grows your reviews and removes the content
          that costs you customers.
        </h1>
        <p className="text-[#444] text-[16px] lg:text-[17px] leading-[1.65] max-w-[820px] mb-8">
          We run authentic review growth campaigns across nearly 200 platforms,
          dispute and remove harmful content, optimise every listing with the
          structured-data markup search engines and AI engines actually read,
          and back the work with a written 90-day score guarantee. Miss the
          milestone, we work for free until it is met.
        </p>

        {/* Panoramic dashboard image */}
        <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
          <Image
            src="/images/reviews/birdeye-panoramic.png"
            alt="Reputation Experts dashboard showing review monitoring, location-level scores, and AI-powered review request campaigns across major platforms."
            width={2950}
            height={1185}
            priority
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
