"use client";

import React, { useState } from "react";

const FAQ = [
  {
    q: "What is AI search visibility?",
    a: "It is how often your UK business appears, gets named or gets cited when AI search engines (Google AI Overview, ChatGPT, Perplexity, Gemini) generate an answer. Classic SEO ranks pages; AI search visibility ranks businesses. The user sees one answer at the top of the page naming two or three companies. Reputation Experts measures and lifts your share of those answers across every high-intent UK query in your category, weekly.",
  },
  {
    q: "How does Reputation Experts track mentions on ChatGPT, Gemini and Perplexity?",
    a: "Our team runs your high-intent UK queries against every major AI search engine on a recurring schedule, captures the full answer text, parses out which businesses are named and which sources are cited, and aggregates the data into a single dashboard. You see your share of voice per engine, per query and per location. The work is delivered as a monthly report and reviewed with a dedicated reputation manager.",
  },
  {
    q: "How is Reputation Experts different from generic GEO or SEO tools?",
    a: "Generic GEO tools report. Generic SEO tools optimise the ten blue links. We do both, plus the part that actually moves visibility: securing real third-party press placements in the publications AI engines trust, generating authentic reviews from your real customers, and running the structured-data and Google Business Profile work per location. The platform tracks; our UK team executes. And every engagement is backed by a 90-day money-back guarantee tied to the metrics we agree at the start.",
  },
  {
    q: "What are citations and why do they matter?",
    a: "Citations are the third-party sources an AI engine names when generating an answer. For a UK hotel, that might be Condé Nast Traveller, Time Out London or The Telegraph. For a London brokerage, the Financial Times, City AM or the Evening Standard. AI engines are dramatically more likely to recommend a business that appears in the sources they already trust. We map the citation landscape for your category, identify which sources matter most to each AI engine, and earn your brand placements there.",
  },
  {
    q: "How can Reputation Experts help me rank higher in AI search?",
    a: "By engineering all four signals AI engines weight: review depth and recency, language and locale coverage, third-party citation authority and structured-data clarity. We start every engagement with a free 7-page audit of how each AI engine currently sees your business, run the fixes prioritised by expected visibility lift, and report weekly. If we do not hit the written goals in 90 days, you receive a full refund of every pound paid.",
  },
  {
    q: "Does Reputation Experts work for multi-location brands?",
    a: "Yes, and this is exactly what we are built for. A UK hotel group with properties in Mayfair, Knightsbridge and Edinburgh, or a clinic group with branches in The City, Canary Wharf and Manchester, gets per-location AI visibility tracking, per-location competitor benchmarks and per-location execution. Each location has its own review profile, citation landscape and competitor set, so the work has to be done location-by-location. The platform makes that scalable.",
  },
  {
    q: "Why do multi-location brands specifically need a purpose-built AI search tool?",
    a: "Because AI engines build a separate mental model of each location. What works for your flagship in Mayfair will not transfer to your branch in Croydon. Each location has its own review profile, its own competitor set, its own citation context. Without per-location tracking and per-location work, you fix the one branch that already worked and starve the ten that did not. Reputation Experts gives you visibility and execution at the location level by default.",
  },
  {
    q: "What kind of insights does Reputation Experts provide?",
    a: "Where you appear and where you do not, per AI engine and per location. Which queries name you and which name your competitors. Which third-party sources the AI is citing for your category. How AI describes your business and which themes recur. Which fields of your Google Business Profile, Apple Business Connect and Bing Places are inconsistent across engines. And a prioritised list of fixes ranked by expected visibility lift, delivered every month as part of your engagement.",
  },
  {
    q: "Why do certain locations appear in AI results while others do not?",
    a: "AI engines weight review depth, recency and citation authority per location. A London location with 600 fresh reviews and a recent feature in the Evening Standard signals trust to AI engines and gets surfaced. A sister branch with thin reviews and no press coverage looks invisible to the same model and gets demoted. We fix this location-by-location with the right reviews and the right press placements.",
  },
  {
    q: "How do AI engines decide which businesses to recommend?",
    a: "Each engine has its own ranking model and they do not all weight things identically, but in practice four signals consistently separate cited businesses from ignored ones: a steady cadence of authentic recent reviews, a citation footprint across trusted third-party sources, a complete and consistent business profile across Google, Apple and Bing, and topical clarity on your own website that matches the query intent. We work on all four, in parallel, in the order that moves your visibility fastest.",
  },
  {
    q: "Can Reputation Experts improve traditional local SEO too?",
    a: "Yes. The signals that drive AI visibility (complete Google Business Profile, accurate categories, fresh reviews, schema markup) also drive Local Pack and Google Maps rankings. We measure both. Most UK clients see lifts in AI Overview citation share and Local Pack visibility within the first 60 days, with the AI side outpacing the SEO side after that as Google continues to expand the AI Overview surface.",
  },
  {
    q: "What types of UK businesses benefit most?",
    a: "Any business where the customer journey starts with a search query that has commercial intent. Hospitality and dining are the biggest because UK and international visitors plan from home and rely on AI to triage choices. Healthcare and aesthetic clinics, estate and letting agents, financial and professional services, automotive dealerships, home services, cleaning, fitness and wellbeing, salons, and entertainment all see meaningful AI traffic share. We have dedicated solutions for each of these verticals on this site.",
  },
  {
    q: "Does Reputation Experts explain why an engine interprets my brand a certain way?",
    a: "Yes. For every tracked query, the dashboard captures the full AI answer, the cited sources, and the reasoning trace where available. You see verbatim how Gemini described you, which sentence in which review it likely drew from, and which competitor it positioned ahead of you. Your dedicated reputation manager walks you through this every month and turns it into the prioritised fix list for the following 30 days.",
  },
  {
    q: "What actions can Reputation Experts take based on the insights?",
    a: "Google Business Profile updates per location, review request campaigns timed to your operational rhythm (check-out, treatment completion, project handover, key handover), on-site service-page rewrites with the right schema, location-specific FAQ blocks that match high-intent UK queries, location-specific landing pages, review responses, dispute filings against policy-violating reviews, and PR placements in UK national, regional and trade publications. You approve the work; our team and the platform execute.",
  },
  {
    q: "Can I track improvements over time?",
    a: "Yes. The dashboard reports weekly share of voice per engine and per location, with trend lines back to your baseline week. You can pin specific high-intent queries to a watchlist, see citation lifts per source, and export anything to monthly stakeholder reports. The 90-day money-back guarantee is anchored to the metrics you and Reputation Experts agree on at the start of the engagement, in writing.",
  },
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section
      className="bg-white pt-4 pb-9 lg:pt-6 lg:pb-14"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10 lg:mb-12">
          FAQ
        </h2>

        <div>
          {FAQ.map((item, i) => {
            const isOpen = openItem === i;
            return (
              <div key={i} className="border-t border-[#e0e0e0] last:border-b">
                <button
                  onClick={() => setOpenItem(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[15px] lg:text-[16px] font-normal leading-snug group-hover:text-[#444] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-[#e8502a] text-[22px] leading-none font-light transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[2000px] pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-3xl text-justify lg:text-left">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
