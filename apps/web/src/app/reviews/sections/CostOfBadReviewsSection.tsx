import React from "react";

const COSTS = [
  {
    number: "01",
    title: "Customers walk past anything under 4.5 stars",
    body: "When two listings sit side by side, the lower-rated one is invisible. Even a single recent 1-star review can sink booking intent for weeks. The buyer never even calls, so you never get the chance to win them back on the phone.",
  },
  {
    number: "02",
    title: "Your paid ad spend pays for the click, then dies on the listing",
    body: "A prospect sees your ad, clicks the location, sees a thin or negative review profile, and chooses a competitor. You paid for the impression, the click and the bid premium, and the conversion went next door. Every marketing pound past that point is subsidising a leaky funnel.",
  },
  {
    number: "03",
    title: "AI engines stop recommending you",
    body: "ChatGPT, Google AI Overview, Perplexity and Gemini weight review depth, recency and sentiment heavily. A weak profile means the AI suggests a competitor by name, and you never appear in the answer at all. AI traffic is the channel that is growing fastest, and a poor review profile locks you out of it entirely.",
  },
  {
    number: "04",
    title: "You disappear from the Google Maps trust filter",
    body: "Maps users skim ratings and review count before they read anything else. A low rating or fewer than 20 reviews drops your click-through rate to a fraction of what it should be, even when you outrank competitors on map position. You have the visibility, the customer just chooses someone else.",
  },
];

export function CostOfBadReviewsSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="The cost of weak reviews"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <div className="h-[2px] w-10 bg-[#e8503a] mb-6" aria-hidden="true" />
          <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
            Why this matters
          </p>
          <h2
            className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(1.625rem, 3.4vw, 2.5rem)" }}
          >
            A weak review profile is a quiet, expensive leak across every
            channel you already pay for.
          </h2>
          <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7]">
            Most businesses notice the symptoms first, fewer enquiries, lower
            marketing ROI, dropping organic traffic, long before they trace it
            back to reviews. By the time the pattern is obvious, six to twelve
            months of revenue has already gone to a better-reviewed competitor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {COSTS.map((c) => (
            <div key={c.number} className="border-t border-[#e5e5e5] pt-6">
              <p className="text-[#e8503a] text-[12px] tracking-[0.18em] uppercase font-semibold mb-3">
                {c.number}
              </p>
              <h3 className="text-[#1a1a1a] text-[20px] sm:text-[22px] font-medium leading-[1.25] tracking-[-0.01em] mb-3">
                {c.title}
              </h3>
              <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
