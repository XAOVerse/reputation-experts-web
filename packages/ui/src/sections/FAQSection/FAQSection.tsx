"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQSectionProps {
  sectionLabel?: string;
  heading?: string;
  items?: FAQItem[];
}

const DEFAULT_ITEMS: FAQItem[] = [
  {
    question: "What does Reputation Experts do?",
    answer: "We are a professional online reputation management firm. We help individuals and businesses manage, protect, and improve how they appear online — across search results, review platforms, social media, and news outlets.",
  },
  {
    question: "Which platforms and channels do you cover?",
    answer: "We work across all major search engines, review platforms, social networks, and media outlets — including Google, Bing, Trustpilot, Glassdoor, LinkedIn, and many more. Our team understands the nuances of each platform.",
  },
  {
    question: "How does your process work?",
    answer: "Every engagement starts with a free, confidential consultation. We audit your current digital presence, identify risks and opportunities, develop a tailored strategy, and provide ongoing support and reporting as we execute.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Timelines vary depending on the complexity of each case. Some improvements can be seen within weeks, while comprehensive reputation rebuilding programmes typically show significant progress within two to four months.",
  },
  {
    question: "Do you work with individuals or just businesses?",
    answer: "We work with both. Our clients include executives, professionals, public figures, startups, SMBs, and large enterprises. Every solution is tailored to the specific needs and scale of the engagement.",
  },
];

export function FAQSection({
  heading = "FAQ",
  items = DEFAULT_ITEMS,
}: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f3] pt-6 pb-14 lg:pt-8 lg:pb-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#1a1a1a] font-bold text-[clamp(2.5rem,5vw,3.5rem)] tracking-[-0.03em] mb-10 lg:mb-12">
          {heading}
        </h2>

        <div>
          {items.map((item, i) => {
            const isOpen = openItem === i;
            return (
              <div key={item.question} className="border-t border-[#d5d4d0] last:border-b">
                <button
                  onClick={() => setOpenItem(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[15px] lg:text-[16px] font-normal leading-snug group-hover:text-[#444] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-[#e8613c] text-[22px] leading-none font-light transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-6" : "max-h-0"}`}
                >
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-3xl">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
