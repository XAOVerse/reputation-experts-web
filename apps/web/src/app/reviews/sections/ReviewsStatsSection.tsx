import React from "react";

const CARDS = [
  {
    iconColor: "#FF461E",
    title: "Right reviews at the right time",
    body: "AI-timed review request campaigns run across nearly 200 sites, A/B tested by template, channel and send time to lift open and completion rates without ever pressuring an unhappy customer.",
    stat: "128%",
    caption: "Average growth in authentic reviews with Reputation Experts in the first 90 days.",
  },
  {
    iconColor: "#FF461E",
    title: "Ongoing protection from harmful content",
    body: "Always-on monitoring and dispute work for new harmful reviews, defamation, impersonation and image misuse. We file removals the moment something appears and again every time it reappears.",
    stat: "78%",
    caption: "Of all flagged harmful reviews are successfully removed for our clients.",
  },
  {
    iconColor: "#FF461E",
    title: "Guaranteed improvement in 90 days",
    body: "Before we start we put a target score in writing — for example 4.2 to 4.6 in 90 days. If we miss it, we keep working at no extra cost until your milestone is reached.",
    stat: "100%",
    caption: "Of clients hit the agreed score milestone — we work for free until they do.",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function ReviewsStatsSection() {
  return (
    <section
      className="bg-white py-9 lg:py-14"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reviews outcomes"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-[#eee] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 lg:p-7 flex flex-col gap-5"
            >
              <CheckIcon color={c.iconColor} />
              <h3 className="text-[#1a1a1a] font-semibold text-[18px] lg:text-[20px] leading-[1.3] pb-3 border-b border-[#e0e0e0]">
                {c.title}
              </h3>
              <p className="text-[#444] text-[14.5px] leading-[1.55]">{c.body}</p>

              <div className="mt-auto bg-[#f4f6f9] rounded-xl p-5">
                <p className="text-[#1a1a1a] text-[34px] lg:text-[38px] font-medium leading-none mb-3">
                  {c.stat}
                </p>
                <p className="text-[#3e424d] text-[14px] leading-[1.5]">
                  {c.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
