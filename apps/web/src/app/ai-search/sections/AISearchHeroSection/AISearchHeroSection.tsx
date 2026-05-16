"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors"
              >
                Get Your Free 7-Page Audit
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#eee] shadow-[0_8px_40px_rgba(0,0,0,0.05)] p-4 sm:p-6 lg:p-8">
              <Image
                src="/images/ai-search-hero.png"
                alt="ChatGPT visibility dashboard showing dental clinic recommendations and brand visibility rankings"
                width={1400}
                height={900}
                priority
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
