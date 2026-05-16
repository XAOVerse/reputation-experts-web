import React from "react";

const COSTS = [
  {
    title: "Customers walk past anything under 4.5 stars",
    body: "When two listings sit side by side, the lower-rated one is invisible. Even a single recent 1-star review can sink booking intent for weeks. The buyer never even calls.",
  },
  {
    title: "Your paid ad spend pays for the click — then dies on the listing",
    body: "A prospect sees your ad, clicks the location, sees a thin or negative review profile, and chooses a competitor. You paid for the impression, the click and the bid premium, and the conversion went next door.",
  },
  {
    title: "AI engines stop recommending you",
    body: "ChatGPT, Google AI Overview, Perplexity and Gemini weight review depth, recency and sentiment heavily. A weak profile means the AI suggests a competitor by name — and you never appear in the answer at all.",
  },
  {
    title: "You disappear from the Google Maps trust filter",
    body: "Maps users skim ratings and review count before they read anything else. A low rating or fewer than 20 reviews drops your click-through rate to a fraction of what it should be — even when you outrank competitors on map position.",
  },
];

export function CostOfBadReviewsSection() {
  return (
    <section
      className="bg-[#0f0f0f] text-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="The cost of weak reviews"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-[#FF461E] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
          Why this matters
        </p>
        <h2
          className="font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[1000px]"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          A weak review profile is a quiet, expensive leak across every channel
          you already pay for.
        </h2>
        <p className="text-white/70 text-[16px] lg:text-[17px] leading-[1.65] max-w-[820px] mb-10 lg:mb-14">
          Most businesses notice the symptoms — fewer enquiries, lower marketing
          ROI, dropping organic traffic — long before they trace it back to
          reviews. By the time the pattern is obvious, six to twelve months of
          revenue has already gone to a better-reviewed competitor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {COSTS.map((c) => (
            <div
              key={c.title}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 lg:p-7"
            >
              <h3 className="text-white text-[17px] lg:text-[18px] font-semibold leading-[1.3] mb-3">
                {c.title}
              </h3>
              <p className="text-white/65 text-[14.5px] leading-[1.6]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
