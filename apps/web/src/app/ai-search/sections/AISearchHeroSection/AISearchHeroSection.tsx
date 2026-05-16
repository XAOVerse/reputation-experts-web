"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Engine = {
  name: string;
  color: string;
  icon: React.ReactNode | null;
};

const ENGINES: Engine[] = [
  { name: "Perplexity", color: "#0f0f0f", icon: null },
  {
    name: "Gemini",
    color: "#0f0f0f",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[0.85em] h-[0.85em]" aria-hidden="true">
        <path
          d="M12 2 C12 7 17 12 22 12 C17 12 12 17 12 22 C12 17 7 12 2 12 C7 12 12 7 12 2 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  { name: "ChatGPT", color: "#0f0f0f", icon: null },
  { name: "AI", color: "#0f0f0f", icon: null },
];

/* Stylised sparkle glyph used in place of the ChatGPT product logo */
const SparkleGlyph = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 3 L13.6 9.5 L20 11 L13.6 12.5 L12 19 L10.4 12.5 L4 11 L10.4 9.5 Z"
      fill="currentColor"
    />
  </svg>
);

const RECOMMENDATIONS = [
  { name: "Marina Dental Studio", rating: 4.8, reviews: 412 },
  { name: "Downtown Smile Clinic", rating: 4.6, reviews: 287 },
  { name: "DIFC Dental Care", rating: 4.5, reviews: 196 },
  { name: "Palm Dental Group", rating: 4.4, reviews: 154 },
];

const VISIBILITY_BARS = [
  { name: "Marina Dental Studio (You)", value: 87, you: true },
  { name: "Downtown Smile Clinic", value: 76, you: false },
  { name: "DIFC Dental Care", value: 47, you: false },
  { name: "Palm Dental Group", value: 28, you: false },
];

export function AISearchHeroSection() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIdx((i) => (i + 1) % ENGINES.length);
        setVisible(true);
      }, 220);
      return () => clearTimeout(swap);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const engine = ENGINES[idx];

  return (
    <section
      className="bg-white pt-12 lg:pt-20 pb-10 lg:pb-16"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="AI Search hero"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-5">
            <p className="text-[#7c7c7c] text-[15px] sm:text-[16px] font-normal tracking-[0.01em] mb-5">
              Search AI
            </p>
            <h1
              className="text-[#0f0f0f] font-medium leading-[1.05] tracking-[-0.025em] mb-7"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)" }}
            >
              Be the #1 Answer on{" "}
              <span
                className="inline-flex items-baseline gap-2 align-baseline transition-opacity duration-200"
                style={{ opacity: visible ? 1 : 0, color: engine.color }}
              >
                {engine.icon && (
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center"
                  >
                    {engine.icon}
                  </span>
                )}
                <span className="font-semibold">{engine.name}</span>
              </span>
            </h1>
            <p className="text-[#444] text-[16px] lg:text-[17px] leading-[1.65] mb-8 max-w-[440px] text-justify lg:text-left">
              AI agents that track visibility and act on what is missing, across
              every location.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#FF461E] text-white text-[14px] font-semibold tracking-[0.01em] hover:bg-[#e63b15] transition-colors"
              >
                Get Your Free 7-Page Audit
              </Link>
            </div>
          </div>

          {/* Right: two-panel ChatGPT-visibility mock */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#eee] overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Dark conversation panel */}
                <div className="bg-[#1f1f24] text-white p-5 lg:p-6">
                  {/* Avatar + prompt bubble */}
                  <div className="flex items-start gap-3 mb-5">
                    <span
                      aria-hidden="true"
                      className="w-8 h-8 rounded-full bg-[#0f0f0f] flex items-center justify-center text-white flex-shrink-0"
                    >
                      <SparkleGlyph className="w-4 h-4" />
                    </span>
                    <div className="bg-[#2c2c33] rounded-2xl px-3 py-2 text-[11.5px] leading-[1.4]">
                      Where can I find the best dental care near me?
                    </div>
                  </div>

                  <p className="text-[11px] tracking-[0.04em] text-white/70 mb-3">
                    4 recommendations
                  </p>
                  <ul className="space-y-3">
                    {RECOMMENDATIONS.map((r) => (
                      <li key={r.name} className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="w-9 h-9 rounded-lg bg-[#3a3a42] flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-[12px] leading-tight truncate">
                            {r.name}
                          </p>
                          <p className="text-[10.5px] text-white/70 leading-tight mt-0.5">
                            {r.rating.toFixed(1)} ★ ({r.reviews})
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 bg-[#2c2c33] rounded-full px-3.5 py-2 flex items-center justify-between text-white/60 text-[11.5px]">
                    <span>Ask anything</span>
                    <span
                      aria-hidden="true"
                      className="w-5 h-5 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center text-[10px]"
                    >
                      ↑
                    </span>
                  </div>
                </div>

                {/* Light visibility panel */}
                <div className="bg-[#fafafa] p-5 lg:p-6">
                  <div className="flex items-center justify-end mb-3 text-[10.5px] text-[#5f6368]">
                    <span aria-hidden="true" className="mr-1">🔍</span>
                    Search AI
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <SparkleGlyph className="w-5 h-5 text-[#0f0f0f]" />
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0f0f0f]">
                      ChatGPT visibility
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#5f6368] mb-5">
                    Percentage of searches where your brand appears.
                  </p>

                  <div className="bg-white rounded-2xl border border-[#eee] p-4">
                    <div className="flex justify-end text-[9px] tracking-[0.16em] uppercase text-[#5f6368] mb-3">
                      Visibility
                    </div>
                    <ul className="space-y-3">
                      {VISIBILITY_BARS.map((row, i) => (
                        <li key={row.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11.5px] text-[#0f0f0f] flex items-center gap-2">
                              <span className="text-[#5f6368] tabular-nums w-3 text-right">
                                {i + 1}
                              </span>
                              <span className="truncate">{row.name}</span>
                            </span>
                            <span className="text-[11px] text-[#0f0f0f] font-medium tabular-nums">
                              {row.value}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                row.you
                                  ? "bg-gradient-to-r from-[#3b5bf5] to-[#7e3bf5]"
                                  : "bg-[#d6d6dc]"
                              }`}
                              style={{ width: `${row.value}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
