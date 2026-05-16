import React from "react";
import Image from "next/image";

const ACTIONS = [
  {
    title: "Dispute & remove policy-violating reviews",
    body: "We file removal requests for reviews that breach Google, Trustpilot, Tripadvisor and Yelp policy, fake, off-topic, conflict-of-interest, harassment, hate speech. If the platform reinstates a removed review, we re-file on the new ground.",
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
    body: "Harmful content rarely stops at one post. Our monitors flag every new review and mention as it appears so the dispute is filed before it has time to influence prospective customers, and re-filed every time it reappears.",
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
              We dispute, remove and re-dispute harmful content the moment it
              appears.
            </h2>
          </div>

          {/* Image column — wide, raw image (no card) */}
          <div className="lg:col-span-9">
            <Image
              src="/images/reviews/reporting-agent-2.png"
              alt="Always-on review monitoring dashboard showing flagged reviews, dispute status, and removal outcomes per location."
              width={1800}
              height={755}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Intro paragraph + 4 actions in 2-col grid */}
        <div className="mt-10 lg:mt-14">
          <p className="text-[#555] text-[15px] leading-[1.7] max-w-[820px] mb-8 lg:mb-10">
            Most reputation damage is done in the days between when a harmful
            review goes live and when anyone on your team notices. We close
            that window.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-14 lg:gap-y-10">
            {ACTIONS.map((a) => (
              <div key={a.title}>
                <h3 className="text-[#1a1a1a] text-[16px] sm:text-[17px] font-semibold leading-[1.3] mb-3">
                  {a.title}
                </h3>
                <p className="text-[#555] text-[14.5px] leading-[1.7]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
