import React from "react";
import Image from "next/image";

export function ListingOptimisationSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Listing optimisation"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="max-w-[520px]">
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              Listings optimisation
            </p>
            <h2
              className="text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)" }}
            >
              Every listing accurate, optimised and read correctly by search and
              AI engines.
            </h2>
            <p className="text-[#444] text-[16px] leading-[1.65] mb-5">
              We audit your Google Business Profile, Apple Business Connect,
              Bing Places and the long tail of category-specific listings —
              roughly 200 sites in total — and align them so every NAP detail,
              category, opening hour, service area and image is correct,
              consistent and complete.
            </p>
            <p className="text-[#444] text-[16px] leading-[1.65]">
              On your own website we insert the JSON-LD schema markup
              (LocalBusiness, Service, FAQ, Review) that Google's Local Pack and
              AI Overview parsers rely on to rank and cite a business. Most
              competitor sites have none of this. Adding it correctly is one of
              the cheapest, highest-leverage ranking moves available.
            </p>
          </div>

          {/* Image */}
          <div className="bg-[#f4f6f9] rounded-3xl p-6 lg:p-8">
            <Image
              src="/images/reviews/listing-score.png"
              alt="Listing Score dashboard showing per-platform accuracy and discoverability across Google, Apple, Bing and category-specific directories."
              width={1800}
              height={1190}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
