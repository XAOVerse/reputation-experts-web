"use client";

import React from "react";

const PILLARS = [
  {
    number: "01",
    title: "Distributed, verifiable authority",
    body: "Keep listings, bios, reviews and brand details accurate across every platform. Every location should have current hours, photos and service information on Google, Apple Business Connect, Yelp and the industry-specific directories that matter in your category.",
  },
  {
    number: "02",
    title: "E-E-A-T for AI",
    body: "Create content that demonstrates Experience, Expertise, Authoritativeness and Trustworthiness, for both classic search engines and the AI summaries that increasingly sit above them.",
  },
  {
    number: "03",
    title: "Entity recognition",
    body: "Ensure AI platforms know exactly who you are, what you do and where you operate. Consistent entity signals are what let an AI confidently name you in an answer instead of guessing or omitting you.",
  },
];

export function LeadershipOpportunitySection() {
  return (
    <section
      className="bg-white py-10 lg:py-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="The leadership opportunity: build authority, not just awareness"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />
          <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
            The leadership opportunity
          </p>
          <h2
            className="text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
          >
            Build authority, not just awareness.
          </h2>
          <p className="text-[#444] text-[15px] sm:text-[16px] leading-[1.7] text-justify lg:text-left">
            In a zero-click world, better visibility belongs to the brands that
            are recognised as credible, consistent and easy to understand by
            both people and AI systems. For multi-location businesses, that
            means focusing on three things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PILLARS.map((p) => (
            <div key={p.number} className="border-t border-[#e5e5e5] pt-6">
              <p className="text-[#e8503a] text-[12px] tracking-[0.18em] uppercase font-semibold mb-3">
                {p.number}
              </p>
              <h3 className="text-[#0f0f0f] text-[20px] sm:text-[22px] font-medium leading-[1.25] tracking-[-0.01em] mb-3">
                {p.title}
              </h3>
              <p className="text-[#444] text-[14.5px] sm:text-[15px] leading-[1.7] text-justify lg:text-left">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
