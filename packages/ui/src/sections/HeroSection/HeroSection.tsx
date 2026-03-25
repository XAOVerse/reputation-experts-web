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
  headline = "Take Control of Your\nOnline Reputation",
  quote = "We help individuals and businesses manage, protect, and improve how they appear online - across search results, review platforms, and social media.",
  quoteBold = "Expert guidance. Confidential process.",
  subQuote = "Your online reputation shapes first impressions. Whether you're addressing unwanted content or building a stronger digital presence, we can help.",
  ctaLabel = "Free Consultation",
  ctaLink = "/contact",
  mediaSrc = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
}: HeroSectionProps) {
  return (
    <section className="bg-[#f2f2f2] pt-[64px]" aria-label="Hero">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 py-8 lg:py-12">
        {/* Contained rounded card with background image */}
        <div className="relative rounded-[20px] overflow-hidden min-h-[420px] lg:min-h-[520px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={mediaSrc}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.05) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center min-h-[420px] lg:min-h-[520px] px-8 sm:px-10 lg:px-14 py-12 lg:py-16">
            <div className="max-w-[540px]">
              {/* Heading */}
              <h1 className="text-white font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-6 lg:mb-8">
                {headline.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              {/* Quote paragraph + bold line */}
              <div className="mb-5 lg:mb-6">
                <p className="text-white/75 text-[14px] sm:text-[15px] leading-[1.75]">
                  {quote}
                </p>
                {quoteBold && (
                  <p className="text-white font-bold text-[14px] sm:text-[15px] leading-[1.75] mt-0.5">
                    {quoteBold}
                  </p>
                )}
              </div>

              {/* Sub-quote paragraph */}
              {subQuote && (
                <div className="mb-8 lg:mb-10">
                  <p className="text-white/65 text-[14px] sm:text-[15px] leading-[1.75]">
                    {subQuote}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div>
                <Link
                  href={ctaLink}
                  className="inline-flex items-center rounded-full bg-[#e8522a] text-white text-[13px] sm:text-[14px] font-medium px-6 py-3 hover:bg-[#d04520] transition-colors"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
