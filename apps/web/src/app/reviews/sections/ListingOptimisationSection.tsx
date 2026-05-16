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
        {/* Top row — narrow heading column (left) + wide image column (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Heading column — narrow */}
          <div className="lg:col-span-3">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
              Listings optimisation
            </p>
            <h2
              className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
            >
              Every listing accurate, optimised and read correctly by search
              and AI engines.
            </h2>
          </div>

          {/* Image column — wide, raw image (no card) */}
          <div className="lg:col-span-9">
            <Image
              src="/images/reviews/listing-score.png"
              alt="Listing Score dashboard showing per-platform accuracy and discoverability across Google, Apple, Bing and category-specific directories."
              width={1800}
              height={1190}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Two-column body text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-10 lg:mt-14">
          <p className="text-[#555] text-[15px] leading-[1.7]">
            We audit your Google Business Profile, Apple Business Connect, Bing
            Places and the long tail of category-specific listings, roughly 200
            sites in total, and align them so every NAP detail, category,
            opening hour, service area and image is correct, consistent and
            complete.
          </p>
          <p className="text-[#555] text-[15px] leading-[1.7]">
            On your own website we insert the JSON-LD schema markup
            (LocalBusiness, Service, FAQ, Review) that Google's Local Pack and
            AI Overview parsers rely on to rank and cite a business. Most
            competitor sites have none of this. Adding it correctly is one of
            the cheapest, highest-leverage ranking moves available.
          </p>
        </div>
      </div>
    </section>
  );
}
