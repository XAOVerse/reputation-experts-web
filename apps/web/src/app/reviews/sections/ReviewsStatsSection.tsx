"use client";

import React, { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 128,
    suffix: "%",
    label: "Review growth in 90 days",
    body: "Average lift in authentic 5-star reviews for new clients in their first quarter with us.",
  },
  {
    value: 78,
    suffix: "%",
    label: "Harmful reviews removed",
    body: "Of all the harmful reviews our clients flag, we successfully take down 78%. The rest are suppressed under fresh positive volume.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Hit the agreed score, guaranteed",
    body: "Every client gets a written 90-day score target. Miss it and we work for free until we reach it.",
  },
];

function useCountUp(target: number, duration = 1600, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTs = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTs;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  body,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  body: string;
  start: boolean;
}) {
  const animated = useCountUp(value, 1600, start);
  return (
    <div className="border-t border-[#e5e5e5] pt-6">
      <p
        className="text-[#1a1a1a] font-medium leading-none tracking-[-0.02em] mb-4 tabular-nums"
        style={{ fontSize: "clamp(2.5rem, 4.4vw, 3.5rem)" }}
      >
        {animated}
        {suffix}
      </p>
      <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-3">
        {label}
      </p>
      <p className="text-[#555] text-[14.5px] leading-[1.7]">{body}</p>
    </div>
  );
}

export function ReviewsStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-2 pb-8 lg:pt-3 lg:pb-12"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reviews outcomes"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {STATS.map((s) => (
            <StatItem
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              body={s.body}
              start={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
