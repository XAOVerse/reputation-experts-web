import React from "react";
import Image from "next/image";

export function ReviewsHeroSection() {
  return (
    <section
      className="bg-white pt-[64px]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reviews hero"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 pt-7 sm:pt-10 lg:pt-11 pb-6 lg:pb-10">
        <h1
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.625rem)" }}
        >
          The #1 Reputation Management Platform, boosting positive reviews and
          removing harmful content that damages your brand.
        </h1>
        <p className="text-[#555] text-[15px] leading-[1.65] mb-8">
          We run authentic review growth campaigns across nearly 200 platforms,
          dispute and remove harmful content, optimise every listing with the
          structured-data markup search engines and AI engines actually read,
          and back the work with a written 90-day score guarantee. Miss the
          milestone, we work for free until it is met.
        </p>

        {/* Panoramic dashboard image — raw per Figma, no card wrapping */}
        <Image
          src="/images/reviews/birdeye-panoramic.png"
          alt="Reputation Experts dashboard showing review monitoring, location-level scores, and AI-powered review request campaigns across major platforms."
          width={2950}
          height={1185}
          priority
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </section>
  );
}
