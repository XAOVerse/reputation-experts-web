"use client";

import React from "react";

const PILLARS = [
  {
    number: "01",
    title: "AI-ready content and listings",
    body: "Our AI-driven systems organise your business data and produce accurate, up-to-date content so platforms like Google, ChatGPT, Perplexity and Gemini can recognise, surface and cite your brand with confidence.",
  },
  {
    number: "02",
    title: "Reputation as a trust signal",
    body: "Verified reviews carry weight with both customers and AI platforms. We help you collect them and respond to them continuously, boosting the trust signals AI uses to rank and feature businesses.",
  },
  {
    number: "03",
    title: "Driving direct actions",
    body: "From click-to-call and booking buttons to messaging and directions, we enable trackable business outcomes directly from AI-powered interfaces like Maps, Local Pack and Search.",
  },
  {
    number: "04",
    title: "Entity authority, everywhere",
    body: "Whether it is expert bios or hyperlocal content, we ensure your brand is positioned as a reliable answer in both local UK and broader international AI interactions.",
  },
  {
    number: "05",
    title: "Compliance and brand safety",
    body: "Every response, review and listing is managed in a way that is compliant, accurate and on-brand, so your digital reputation is protected as the volume scales.",
  },
];

export function ZeroClickOutcomesSection() {
  return (
    <section
      className="bg-white py-10 lg:py-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="How Reputation Experts converts zero-click search into real-world outcomes"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <div
            aria-hidden="true"
            className="h-[2px] w-10 bg-[#e8503a] mb-6"
          />
          <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
            From visibility to outcomes
          </p>
          <h2
            className="text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
          >
            How we convert zero-click search into real-world results.
          </h2>
          <p className="text-[#444] text-[15px] sm:text-[16px] leading-[1.7] text-justify lg:text-left">
            Our focus is on turning AI-driven visibility into measurable
            business results. We help brands strengthen their presence where
            customers make decisions: inside search results, map packs and
            AI-generated summaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-14 lg:mb-16">
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

        {/* Final-thought block */}
        <div className="border-t border-[#e5e5e5] pt-8 lg:pt-10">
          <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-4">
            Final thought
          </p>
          <h3
            className="text-[#0f0f0f] font-medium leading-[1.2] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
          >
            Do not fear zero-click. Lead it.
          </h3>
          <p className="text-[#444] text-[15px] sm:text-[16px] leading-[1.7] text-justify lg:text-left">
            The future of digital discovery belongs to brands that are
            credible, consistent and easy for AI platforms to recognise. Search
            visibility may rise and fall, but authority is something you build
            and maintain. The brands that win meet customers where decisions
            are made, across every AI-moderated touchpoint.
          </p>
        </div>
      </div>
    </section>
  );
}
