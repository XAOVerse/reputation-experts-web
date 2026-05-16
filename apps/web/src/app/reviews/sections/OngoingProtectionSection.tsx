import React from "react";
import Image from "next/image";

const ACTIONS = [
  {
    title: "Dispute & remove policy-violating reviews",
    body: "We file removal requests for reviews that breach Google, Trustpilot, Tripadvisor and Yelp policy — fake, off-topic, conflict-of-interest, harassment, hate speech. If the platform reinstates a removed review, we re-file on the new ground.",
  },
  {
    title: "Defamation & impersonation takedowns",
    body: "For reviews and posts that cross the line into defamation or impersonate your business, we coordinate the formal takedown notices the platform requires and, where appropriate, the cease-and-desist your solicitor needs to act on.",
  },
  {
    title: "Image and copyright protection",
    body: "If a competitor or scraper site is using your photos, branding or treatment results without permission, we file the DMCA and Google copyright notices that get the assets removed at source.",
  },
  {
    title: "24/7 monitoring & re-disputes",
    body: "Harmful content rarely stops at one post. Our monitors flag every new review and mention as it appears so the dispute is filed before it has time to influence prospective customers — and re-filed every time it reappears.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Image (left on desktop) */}
          <div className="bg-[#f4f6f9] rounded-3xl p-6 lg:p-8 lg:order-1 order-2">
            <Image
              src="/images/reviews/reporting-agent-2.png"
              alt="Always-on review monitoring dashboard showing flagged reviews, dispute status, and removal outcomes per location."
              width={1800}
              height={755}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Copy */}
          <div className="max-w-[520px] lg:order-2 order-1">
            <p className="text-[#e8503a] text-[12px] tracking-[0.22em] uppercase font-semibold mb-5">
              Always-on protection
            </p>
            <h2
              className="text-[#0f0f0f] font-medium leading-[1.15] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)" }}
            >
              We dispute, remove and re-dispute harmful content the moment it
              appears.
            </h2>
            <p className="text-[#444] text-[16px] leading-[1.65] mb-6">
              Most reputation damage is done in the days between when a harmful
              review goes live and when anyone on your team notices. We close
              that window.
            </p>

            <ul className="space-y-5">
              {ACTIONS.map((a) => (
                <li key={a.title}>
                  <p className="text-[#1a1a1a] text-[15.5px] font-semibold mb-1">
                    {a.title}
                  </p>
                  <p className="text-[#555] text-[14.5px] leading-[1.6]">
                    {a.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
