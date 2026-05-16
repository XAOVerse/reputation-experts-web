"use client";

import React, { useState } from "react";
import Link from "next/link";

const FAQ = [
  {
    q: "How many platforms do you actually grow reviews on?",
    a: "Nearly 200 in total, but the work concentrates on the eight to twelve that matter most for your category. Every business gets Google, Trustpilot, Facebook and Apple as a baseline; from there we layer in the trade-specific platforms — Tripadvisor and Booking.com for hospitality, Doctify and WhatClinic for healthcare, Yell and Bark for home services, Tradesy and Houzz for trades, and so on. The platform identifies the highest-leverage sites for your specific niche and routes review requests to the ones that move bookings.",
  },
  {
    q: "What does the 90-day score guarantee actually cover?",
    a: "Before we start we agree a written target — typically the move from your current average star rating to a higher one (e.g. 4.2 to 4.6), plus a minimum number of fresh authentic reviews per location. If we don't hit those numbers by day 90, the engagement keeps running at no additional cost until we do. The guarantee is anchored to specific written metrics, not vague effort.",
  },
  {
    q: "Can you actually remove harmful or fake reviews?",
    a: "We successfully remove around 78% of the reviews our clients flag. Anything that breaches the platform's policy — fake, off-topic, conflict-of-interest, harassment, hate speech, content from people who were never customers — is grounds for dispute. We file the request, follow it through, and re-file every time a removed review reappears. For reviews that don't meet the policy bar, we focus on burying them under a steady flow of authentic positive reviews so the platform's algorithm ranks them lower in the visible feed.",
  },
  {
    q: "Do you handle defamation and copyright takedowns too?",
    a: "Yes. For posts that cross into defamation or impersonate your business, we coordinate the formal takedown notices each platform requires. For competitors or scraper sites using your photos, branding or treatment results without permission, we file DMCA and Google copyright notices that get the assets removed at source. Where a matter needs to go beyond platform processes we brief your solicitor with the evidence pack ready.",
  },
  {
    q: "What's the listings optimisation, and why does it affect ranking?",
    a: "Google, Apple, Bing and category-specific directories all read structured data — JSON-LD schema markup like LocalBusiness, Service, FAQ and Review — to understand and rank a business. Most competitor sites have none of it. We audit your Google Business Profile, Apple Business Connect, Bing Places and the long tail of directories so every detail is accurate, consistent and complete, then insert the right schema on your own website so search engines and AI engines can read your business correctly. It is one of the highest-leverage SEO moves available and most agencies skip it.",
  },
  {
    q: "Will more reviews actually move my AI Overview and ChatGPT visibility?",
    a: "Yes — directly. AI engines treat review depth, recency and sentiment as primary signals when deciding which businesses to name in an answer. A business with 600 fresh reviews above 4.6 stars is dramatically more likely to be cited than a competitor with 80 reviews at 4.1. The work on this page feeds straight into the work on /ai-search: reviews are the highest-weight input AI engines look at when generating recommendations.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see meaningful score movement and visible review velocity inside the first 30 days. By day 60, AI engines and Google Maps typically begin re-ranking the business upward. The full 90 days is needed for the harder lifts — moving an established score by 0.3 or more — because authentic reviews have to be earned at the speed your real customers can leave them.",
  },
  {
    q: "Do you ever ask customers to write fake reviews?",
    a: "No, ever. Fake reviews are a fast way to get a business permanently delisted from Google and Trustpilot, and they show up in AI sentiment analysis as obviously inauthentic. Everything we do is built on real customers leaving real opinions at the right moment — timed, prompted and routed correctly, but never invented.",
  },
  {
    q: "Can you exclude unhappy customers from review campaigns?",
    a: "We do not gate reviews — that breaches platform policy. What we do is route the request differently: an unhappy customer who completes our follow-up gets a private recovery flow first (your team gets a chance to fix the issue before any public review is invited), while a satisfied customer goes straight to the public review platform. This is policy-compliant and improves both your average rating and your customer relationships.",
  },
  {
    q: "Do you replace my marketing agency or work alongside them?",
    a: "Either. Most clients keep their ads and content agency, and use us as the reputation layer underneath. Some hand us the full presence — listings, reviews, schema, AI search, PR — and we coordinate with their internal marketing. There's no required setup; the work plugs in beside whatever you already have.",
  },
];

export function ReviewsFAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section
      className="bg-white pt-6 pb-14 lg:pt-10 lg:pb-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reviews FAQ"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10 lg:mb-12">
          Frequently asked questions
        </h2>

        <div>
          {FAQ.map((item, i) => {
            const isOpen = openItem === i;
            return (
              <div key={i} className="border-t border-[#e0e0e0] last:border-b">
                <button
                  onClick={() => setOpenItem(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[15px] lg:text-[16px] font-normal leading-snug group-hover:text-[#444] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-[#e8502a] text-[22px] leading-none font-light transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[2000px] pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-3xl text-justify lg:text-left">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-12 lg:mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
          >
            Talk To Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
