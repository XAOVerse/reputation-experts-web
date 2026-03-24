"use client";

import Image from "next/image";
import React from "react";

export interface PrivacyFeature {
  icon?: string;
  title: string;
  description?: string;
}

export interface PrivacySectionProps {
  heading?: string;
  features?: PrivacyFeature[];
}

const DEFAULT_FEATURES: PrivacyFeature[] = [
  {
    icon: "/images/Icon.svg",
    title: "Comprehensive Digital Scan",
    description:
      "We audit your full digital footprint across search engines, data brokers, and public databases to identify exposed information.",
  },
  {
    icon: "/images/Icon 2.svg",
    title: "Personal Data Protection",
    description:
      "We work to remove or suppress exposed personal data using legitimate methods, overseen by our privacy specialists.",
  },
  {
    icon: "/images/Icon 3.svg",
    title: "Ongoing Monitoring",
    description:
      "Continuous surveillance detects new exposures and reputation risks early, so issues can be addressed before they escalate.",
  },
];

export function PrivacySection({
  heading = "How We Safeguard Your Privacy",
  features = DEFAULT_FEATURES,
}: PrivacySectionProps) {
  return (
    <section className="bg-[#f5f5f3] py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#1a1a1a] font-bold text-[clamp(1.35rem,2.5vw,1.75rem)] tracking-[-0.02em] mb-8">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 border border-[#ebebeb]">
              <div className="w-10 h-10 mb-4 flex items-center justify-start">
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <span className="text-xl">🔒</span>
                )}
              </div>
              <h3 className="text-[#1a1a1a] font-semibold text-[14px] leading-snug mb-2">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-[#777] text-[13px] leading-relaxed">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
