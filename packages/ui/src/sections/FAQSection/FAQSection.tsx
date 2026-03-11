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
    answer: "Reputation Experts is a professional online reputation management firm. We specialise in identifying, disputing, and removing harmful, fake, or defamatory content about your business or personal brand across review platforms, search engines, and social media.",
  },
  {
    question: "Which platforms do you work with?",
    answer: "We work across all major platforms including Google, Yelp, Trustpilot, Glassdoor, Facebook, BBB, Ripoff Report, PissedConsumer, and 50+ others. Our team has deep expertise in each platform's specific removal and dispute processes.",
  },
  {
    question: "How does the process work?",
    answer: "Our process starts with a free case assessment where we audit all harmful content. We then develop a custom removal strategy, formally dispute policy-violating content, monitor progress, and provide regular updates until resolution.",
  },
  {
    question: "What if the content does not violate platform rules?",
    answer: "While we achieve a high removal success rate, not all content is guaranteed to be removed as platforms have final authority. In those cases, we deploy suppression strategies — publishing positive, high-authority content to push negatives lower in search results.",
  },
  {
    question: "Do you work with businesses or individuals?",
    answer: "We work with both individuals and businesses of all sizes — from executives and public figures to SMBs and enterprise brands. Our solutions are tailored to the specific needs and scale of each client.",
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
