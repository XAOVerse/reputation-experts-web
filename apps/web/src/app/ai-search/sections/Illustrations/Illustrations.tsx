"use client";

import React from "react";

/* Visibility — user-provided panel showing AI visibility share per engine */
export function VisibilityIllustration() {
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
      <img
        src="/images/visibility-view.png"
        alt="AI visibility share view: your brand vs Dubai competitors across Google AI Overview, ChatGPT, Perplexity and Gemini."
        width={1639}
        height={959}
        className="w-full h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  );
}

/* Citations — user-provided panel showing sites that shape AI answers */
export function CitationsIllustration() {
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
      <img
        src="/images/citations-view.png"
        alt="Citations view: the top sites and publications shaping AI answers about Dubai businesses, with citation counts and which sources currently feature the brand."
        width={1548}
        height={1016}
        className="w-full h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  );
}

/* Accuracy — image asset of how AI engines currently describe a Dubai business */
export function AccuracyIllustration() {
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
      <img
        src="/images/accuracy-ai-overview.png"
        alt="Profile accuracy view: how AI engines currently describe a Dubai business across fields such as business name, categories, opening hours, phone number, languages served and service area."
        width={1627}
        height={967}
        className="w-full h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  );
}

/* Sentiment — SWOT view of how AI describes a business per location */
export function SentimentIllustration() {
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
      <img
        src="/images/sentiment-swot.png"
        alt="SWOT view of how AI describes a Dubai Marina business across strengths, weaknesses, opportunities and threats."
        width={1504}
        height={976}
        className="w-full h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  );
}

/* AI agents — workflow with three steps */
export function AIAgentsIllustration() {
  const steps = [
    { title: "Listings refresh", body: "Agents push Arabic + English copy to Google Business Profile, Apple Business Connect and Bing Places." },
    { title: "Review generation", body: "Agents send multilingual review requests timed to checkout, treatment completion or project handover." },
    { title: "Content updates", body: "Agents publish location-specific FAQs and service pages that AI engines cite." },
  ];
  return (
    <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-7 lg:p-9">
      <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#5f6368] mb-1">
        Agent activity, last 7 days
      </p>
      <h3 className="text-[18px] font-semibold text-[#0f0f0f] mb-6">
        Tasks Search AI executed automatically
      </h3>
      <ul className="space-y-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="flex gap-4 items-start p-4 bg-white border border-[#eee] rounded-2xl"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center text-[14px] font-semibold">
              {i + 1}
            </span>
            <div>
              <p className="text-[14.5px] font-semibold text-[#0f0f0f] mb-1">
                {s.title}
              </p>
              <p className="text-[13px] text-[#5f6368] leading-[1.55]">
                {s.body}
              </p>
            </div>
            <span className="ml-auto text-[11px] px-2.5 py-0.5 rounded-full bg-[#e8f5e9] text-[#2e7d32] font-semibold whitespace-nowrap">
              Live
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
