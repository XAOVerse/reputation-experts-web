import React from "react";
import Image from "next/image";

const OUTCOMES = [
  {
    title: "Harmful reviews removed",
    body: "We remove harmful reviews from Google, Trustpilot, Tripadvisor, Yelp and every major platform. The ones that cannot be taken down outright are suppressed beneath a steady flow of authentic positive reviews so they stop influencing buyers.",
  },
  {
    title: "Defamation and impersonation handled",
    body: "False claims, defamatory posts, fake accounts and impersonation of your brand are taken down at source. Your name is protected on every channel your customers and prospects look at.",
  },
  {
    title: "Stolen images and content recovered",
    body: "Photos, branding, treatment results, copy, anything of yours that a competitor or scraper site is using without permission is removed. The asset goes away, and the site loses the credibility it borrowed from you.",
  },
  {
    title: "Always watching, always acting",
    body: "Reputation damage happens in the hours between when something bad goes live and when anyone on your team notices. Our team is monitoring 24/7 so the work starts the moment the content appears, and continues every time it tries to reappear.",
  },
];

export function OngoingProtectionSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Ongoing protection"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Top row — narrow heading (left) + wide raw image (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Heading column — narrow */}
          <div className="lg:col-span-3">
            <p className="text-[#e8503a] text-[11px] tracking-[0.22em] uppercase font-semibold mb-5">
              Always-on protection
            </p>
            <h2
              className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
            >
              Harmful content gone the moment it appears.
            </h2>
          </div>

          {/* Image column — wide, raw image (no card) */}
          <div className="lg:col-span-9">
            <Image
              src="/images/reviews/reporting-agent-2.png"
              alt="Always-on reputation monitoring dashboard tracking new mentions, flagged content and removal outcomes across locations."
              width={1800}
              height={755}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Intro + 4 outcomes in 2-col grid */}
        <div className="mt-10 lg:mt-14">
          <p className="text-[#555] text-[15px] leading-[1.7] max-w-[820px] mb-8 lg:mb-10">
            What is removable, we remove. What is not, we suppress. Either way
            the content stops costing you customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-14 lg:gap-y-10">
            {OUTCOMES.map((o) => (
              <div key={o.title}>
                <h3 className="text-[#1a1a1a] text-[16px] sm:text-[17px] font-semibold leading-[1.3] mb-3">
                  {o.title}
                </h3>
                <p className="text-[#555] text-[14.5px] leading-[1.7]">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
