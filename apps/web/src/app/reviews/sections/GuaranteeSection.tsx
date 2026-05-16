import React from "react";

const POINTS = [
  {
    n: "1",
    title: "We agree the milestone in writing",
    body: "Before any work starts we look at your current score, your competitors and your review velocity, and we set the target. For example moving you from 4.2 to 4.6 in 90 days, or adding 80 fresh 5-star reviews per location.",
  },
  {
    n: "2",
    title: "You receive weekly progress reports",
    body: "Per location, per platform, with the trend line back to the baseline week. No surprises and no end-of-quarter scrambles to explain what happened.",
  },
  {
    n: "3",
    title: "Miss the milestone, we work for free until it is met",
    body: "If we do not hit the agreed score by day 90, the engagement continues at no additional cost until we do. The risk sits with us, not you.",
  },
];

export function GuaranteeSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="90-day guarantee"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header — full width */}
        <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
          90-day guarantee
        </p>
        <h2
          className="text-[#0f0f0f] font-medium leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
        >
          We commit to a target score in writing. Miss it, and we work for free
          until it is reached.
        </h2>
        <p className="text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-10 lg:mb-14">
          Every other reputation agency sells effort. We sell outcomes. The
          score we agree on day one is the score we have to deliver by day 90,
          or the work continues at no extra cost until we do.
        </p>

        {/* 3 steps — editorial style (thin top divider, no boxes, no divider lines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {POINTS.map((p) => (
            <div key={p.n} className="border-t border-[#e5e5e5] pt-6">
              <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
                Step {p.n}
              </p>
              <h3 className="text-[#1a1a1a] text-[18px] sm:text-[20px] font-medium leading-[1.3] tracking-[-0.01em] mb-3">
                {p.title}
              </h3>
              <p className="text-[#555] text-[14.5px] sm:text-[15px] leading-[1.7]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
