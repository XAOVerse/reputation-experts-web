"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ImageAsset, MuxAsset } from "../../types";

export interface HeroSectionProps {
  headline?: string;
  highlightWord?: string;
  quote?: string;
  quoteBold?: string;
  subQuote?: string;
  ctaLabel?: string;
  ctaLink?: string;
  mediaCaption?: string;
  mediaSrc?: string;
  videoSrc?: string;
  backgroundVideo?: MuxAsset;
  backgroundImage?: ImageAsset;
}

export function HeroSection({
  headline = "Take Control of Your Online Reputation",
  quote = "We help individuals and businesses manage, protect, and improve how they appear online \u2013 across search results, review platforms, and social media.",
  quoteBold = "Expert guidance. Confidential process.",
  subQuote = "Your online reputation shapes first impressions. Whether you're addressing unwanted content or building a stronger digital presence, we can help.",
  ctaLabel = "Free Consultation",
  ctaLink = "/contact",
  mediaSrc = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
}: HeroSectionProps) {
  return (
    <section className="hero relative min-h-[600px] lg:min-h-[680px] overflow-hidden" aria-label="Hero">
      {/* Background image (grayscale) */}
      <div className="absolute inset-0">
        <Image
          src={mediaSrc}
          alt=""
          fill
          className="object-cover"
          style={{ filter: "grayscale(100%)" }}
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 py-20 lg:py-28 flex items-center min-h-[600px] lg:min-h-[680px]">
        <div className="max-w-[600px]">
          {/* Heading */}
          <h1
            className="text-white font-bold text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] tracking-[-0.01em] mb-6 lg:mb-8"
            style={{ fontStyle: "italic" }}
          >
            {headline}
          </h1>

          {/* Quote paragraph + bold line */}
          <div className="mb-5 lg:mb-6">
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.75]">
              {quote}
            </p>
            {quoteBold && (
              <p className="text-white font-bold text-[15px] sm:text-[16px] leading-[1.75] mt-0.5">
                {quoteBold}
              </p>
            )}
          </div>

          {/* Sub-quote paragraph */}
          {subQuote && (
            <div className="mb-8 lg:mb-10">
              <p className="text-white/70 text-[15px] sm:text-[16px] leading-[1.75]">
                {subQuote}
              </p>
            </div>
          )}

          {/* CTA */}
          <div>
            <Link
              href={ctaLink}
              className="inline-flex items-center rounded-full bg-[#28b44f] text-white text-[14px] sm:text-[15px] font-medium px-7 py-3.5 hover:bg-[#1d9440] transition-colors shadow-lg"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
