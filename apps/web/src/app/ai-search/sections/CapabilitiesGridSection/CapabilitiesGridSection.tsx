"use client";

import React from "react";

const CARDS = [
  {
    title: "Visibility insights",
    bullets: [
      "How often does AI mention you?",
      "How do you rank across locations?",
      "How does AI describe you?",
    ],
    iconSrc: "/images/icon-visibility.png",
    iconAlt: "Visibility insights icon",
  },
  {
    title: "Citations intelligence",
    bullets: [
      "What sites shape AI answers?",
      "Does your brand feature there?",
    ],
    iconSrc: "/images/icon-citations.png",
    iconAlt: "Citations intelligence icon",
  },
  {
    title: "Agent-led execution",
    bullets: [
      "Agents create and update website content.",
      "Agents generate reviews and fix your listings.",
    ],
    iconSrc: "/images/icon-agents.png",
    iconAlt: "Agent-led execution icon",
  },
];

export function CapabilitiesGridSection() {
  return (
    <section
      className="bg-white py-10 lg:py-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="What Search AI does"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2
          className="text-center text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-12 lg:mb-16 max-w-[1100px] mx-auto"
          style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
        >
          The tools Dubai brands need to dominate AI search and reach more customers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#eee] rounded-3xl p-6 lg:p-7 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-4 w-[52px] h-[52px] flex items-center justify-center">
                <img
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  width={52}
                  height={52}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[#0f0f0f] text-[18px] lg:text-[20px] font-medium tracking-[-0.01em] mb-3">
                {card.title}
              </h3>
              <ul className="space-y-2 text-left max-w-[280px] mx-auto w-full">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[13.5px] text-[#444] leading-[1.45]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e8503a] text-white text-[11px] flex items-center justify-center mt-0.5"
                    >
                      →
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
