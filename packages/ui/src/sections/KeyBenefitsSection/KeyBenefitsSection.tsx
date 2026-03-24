"use client";

import React from "react";
import Image from "next/image";
import type { ImageAsset } from "../../types";

export interface Benefit {
  icon?: ImageAsset;
  iconEmoji?: string;
  title: string;
  description?: string;
}

export interface KeyBenefitsSectionProps {
  heading?: string;
  benefits?: Benefit[];
}

const DEFAULT_BENEFITS: Benefit[] = [
  {
    icon: { src: "/images/asset-1.webp", alt: "Tailored Strategy icon" },
    title: "Tailored Strategy",
    description: "Every client receives a custom reputation management plan designed around their unique situation, goals, and industry.",
  },
  {
    icon: { src: "/images/asset-2.webp", alt: "Platform Expertise icon" },
    title: "Platform Expertise",
    description: "Deep knowledge of how search engines, review platforms, and social networks work — so we can navigate them effectively on your behalf.",
  },
  {
    icon: { src: "/images/asset-3.webp", alt: "Global Reach icon" },
    title: "Global Reach",
    description: "We operate across all major platforms and markets worldwide, supporting clients wherever their reputation matters.",
  },
  {
    icon: { src: "/images/asset-4.webp", alt: "Complete Confidentiality icon" },
    title: "Complete Confidentiality",
    description: "Every engagement is handled with full discretion. We protect your privacy at every stage of the process.",
  },
  {
    icon: { src: "/images/asset-5.webp", alt: "Ethical Methods icon" },
    title: "Ethical Methods",
    description: "We only use legitimate, platform-compliant approaches. No fake reviews, no manipulation — just professional reputation management.",
  },
  {
    icon: { src: "/images/asset-6.webp", alt: "Continuous Monitoring icon" },
    title: "Continuous Monitoring",
    description: "Real-time alerts and ongoing surveillance help you stay ahead of emerging issues before they become crises.",
  },
  {
    icon: { src: "/images/asset-7.webp", alt: "Fast Response icon" },
    title: "Fast Response",
    description: "We move quickly when your reputation is at stake — most clients receive an initial assessment within 24 hours.",
  },
];

export function KeyBenefitsSection({
  heading = "Key Benefits",
  benefits = DEFAULT_BENEFITS,
}: KeyBenefitsSectionProps) {
  return (
    <section className="key-benefits bg-[#f2f2f2] py-14 lg:py-20">
      <div className="key-benefits__inner max-w-[1280px] mx-auto px-5 lg:px-8">

        <h2 className="key-benefits__heading text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.01em] mb-10">
          {heading}
        </h2>

        <div className="key-benefits__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="key-benefits__card bg-white rounded-2xl p-6 hover:shadow-sm transition-all duration-200"
            >
              {/* Icon */}
              <div className="key-benefits__card-icon w-11 h-11 flex items-center justify-center mb-5 overflow-hidden shrink-0">
                {benefit.icon ? (
                  <Image
                    src={benefit.icon.src}
                    alt={benefit.icon.alt ?? benefit.title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-xl">{benefit.iconEmoji ?? "✦"}</span>
                )}
              </div>

              <h3 className="key-benefits__card-title font-bold text-[#0f0f0f] text-[18px] leading-[1.3] mb-2">
                {benefit.title}
              </h3>

              {benefit.description && (
                <p className="key-benefits__card-description text-[#666] text-[15px] leading-[1.7]">
                  {benefit.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
