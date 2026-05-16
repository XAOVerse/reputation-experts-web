import React from "react";
import Link from "next/link";

const POINTS = [
  {
    n: "1",
    title: "We agree the milestone in writing",
    body: "Before any work starts we look at your current score, your competitors and your review velocity, and we set the target — for example moving you from 4.2 to 4.6 in 90 days, or adding 80 fresh 5-star reviews per location.",
  },
  {
    n: "2",
    title: "You receive weekly progress reports",
    body: "Per location, per platform, with the trend line back to the baseline week. No surprises and no end-of-quarter scrambles to explain what happened.",
  },
  {
    n: "3",
    title: "Miss the milestone? We work for free until it is met",
    body: "If we don't hit the agreed score by day 90, the engagement continues at no additional cost until we do. The risk sits with us, not you.",
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
        <div className="bg-[#0f0f0f] rounded-3xl px-6 sm:px-10 lg:px-14 py-12 lg:py-16 text-white">
          <p className="text-[#FF461E] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
            90-day guarantee
          </p>
          <h2
            className="font-medium leading-[1.1] tracking-[-0.02em] mb-6 max-w-[1000px]"
            style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
          >
            We commit to a target score in writing. Miss it, and we work for
            free until it's reached.
          </h2>
          <p className="text-white/65 text-[16px] lg:text-[17px] leading-[1.65] max-w-[820px] mb-10">
            Every other reputation agency sells effort. We sell outcomes. The
            score we agree on day one is the score we have to deliver by day 90
            — or the work continues at no extra cost until we do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10">
            {POINTS.map((p) => (
              <div
                key={p.n}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 lg:p-7"
              >
                <p className="text-[#FF461E] text-[14px] font-semibold mb-3">
                  Step {p.n}
                </p>
                <p className="text-white text-[16px] font-semibold leading-[1.3] mb-3">
                  {p.title}
                </p>
                <p className="text-white/65 text-[14.5px] leading-[1.6]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

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
