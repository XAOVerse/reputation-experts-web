"use client";

import React from "react";

export interface FeatureSplitSectionProps {
  eyebrow: string;
  heading: string;
  body: string;
  illustration: React.ReactNode;
  reverse?: boolean;
  background?: "white" | "cream";
}

export function FeatureSplitSection({
  eyebrow,
  heading,
  body,
  illustration,
  reverse = false,
  background = "white",
}: FeatureSplitSectionProps) {
  return (
    <section
      className="bg-white py-10 lg:py-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label={eyebrow}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Copy column */}
          <div className="max-w-[480px]">
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              {eyebrow}
            </p>
            <h2
              className="text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)" }}
            >
              {heading}
            </h2>
            <p className="text-[#444] text-[16px] leading-[1.65] text-justify lg:text-left">{body}</p>
          </div>

          {/* Illustration column */}
          <div>{illustration}</div>
        </div>
      </div>
    </section>
  );
}
