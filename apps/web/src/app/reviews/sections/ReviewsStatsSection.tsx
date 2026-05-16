import React from "react";

const STATS = [
  {
    value: "128%",
    label: "Review growth in 90 days",
    body: "Average lift in authentic 5-star reviews for new clients in their first quarter with us.",
  },
  {
    value: "78%",
    label: "Harmful reviews removed",
    body: "Of all the harmful reviews our clients flag, we successfully take down 78%. The rest are suppressed under fresh positive volume.",
  },
  {
    value: "100%",
    label: "Hit the agreed score, guaranteed",
    body: "Every client gets a written 90-day score target. Miss it and we work for free until we reach it.",
  },
];

export function ReviewsStatsSection() {
  return (
    <section
      className="bg-white pt-4 pb-12 lg:pt-6 lg:pb-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reviews outcomes"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {STATS.map((s) => (
            <div key={s.label} className="border-t border-[#e5e5e5] pt-6">
              <p
                className="text-[#1a1a1a] font-medium leading-none tracking-[-0.02em] mb-4"
                style={{ fontSize: "clamp(2.5rem, 4.4vw, 3.5rem)" }}
              >
                {s.value}
              </p>
              <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
                {s.label}
              </p>
              <p className="text-[#555] text-[14.5px] leading-[1.7]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
