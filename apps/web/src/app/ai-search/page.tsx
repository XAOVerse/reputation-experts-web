import type { Metadata } from "next";
import { AISearchHeroSection } from "./sections/AISearchHeroSection";
import { TrustStripSection } from "./sections/TrustStripSection";
import { SearchEvolvedSection } from "./sections/SearchEvolvedSection";
import { CapabilitiesGridSection } from "./sections/CapabilitiesGridSection";
import { StatBannerSection } from "./sections/StatBannerSection";
import { FeatureSplitSection } from "./sections/FeatureSplitSection";
import {
  VisibilityIllustration,
  CitationsIllustration,
  AccuracyIllustration,
  SentimentIllustration,
  AIAgentsIllustration,
} from "./sections/Illustrations";
import { LeadershipOpportunitySection } from "./sections/LeadershipOpportunitySection";
import { ZeroClickOutcomesSection } from "./sections/ZeroClickOutcomesSection";
import { PlatformsMediaSection } from "./sections/PlatformsMediaSection";
import { FAQSection } from "./sections/FAQSection";
import { AISearchCTASection } from "./sections/AISearchCTASection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { DentalContactSection } from "./sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Search AI for Dubai Brands | Be the #1 Answer on Google AI Overview, ChatGPT, Perplexity & Gemini | Reputation Experts",
  description:
    "AI agents that track and lift your visibility across Google AI Overview, ChatGPT, Perplexity and Gemini, in every language your customers search in. Built for Dubai multi-location brands across hospitality, healthcare, real estate, automotive and professional services. Backed by a 90-day money-back guarantee.",
};

export default function AISearchPage() {
  return (
    <main>
      <AISearchHeroSection />
      <SearchEvolvedSection />
      <CapabilitiesGridSection />
      <LeadershipOpportunitySection />
      <TrustStripSection />
      <StatBannerSection />

      <FeatureSplitSection
        eyebrow="Visibility"
        heading="See how you rank against competitors on ChatGPT and every AI engine."
        body="Benchmark your AI visibility across local and brand-level competitors on Google AI Overview, ChatGPT, Perplexity and Gemini. Drill down by theme, prompt and location to see exactly where you lead and where you lag, then route the gaps straight to the agent that fixes them."
        illustration={<VisibilityIllustration />}
      />
      <FeatureSplitSection
        eyebrow="Citations"
        heading="See which websites shape your visibility on ChatGPT and beyond."
        body="Find the top sites, listings and publications that ChatGPT, Gemini, Perplexity and Google AI Overview pull from when answering Dubai queries in your category. Use that map to guide where to earn placements, where to update existing coverage, and where to leave silent."
        illustration={<CitationsIllustration />}
        reverse
      />
      <FeatureSplitSection
        eyebrow="Accuracy"
        heading="Fix how AI engines describe your business across every location."
        body="Track how accurately each AI engine presents your business information, in every language and at every location. When ChatGPT names the wrong service area or Gemini misses your Russian-speaking clinicians, you see it the day it happens, and an agent corrects the underlying source the AI is reading from."
        illustration={<AccuracyIllustration />}
      />
      <FeatureSplitSection
        eyebrow="Sentiment"
        heading="Understand how AI describes you, and why."
        body="A live SWOT view of how each AI search engine sees you per location: the strengths it consistently praises, the weaknesses it flags, the market opportunities it surfaces, and the competitive threats emerging in your category. Drill into the underlying reviews and citations driving each quadrant, then prioritise the operational fixes that move both your AI visibility and your reviews."
        illustration={<SentimentIllustration />}
        reverse
      />
      <FeatureSplitSection
        eyebrow="AI agents"
        heading="Fix what matters most automatically, with AI agents."
        body="Search AI agents recommend improvements and execute the structured work that AI engines re-read on every crawl: updating listings on Google, Apple and Bing, generating multilingual reviews timed to your operational rhythm, and publishing on-site content the AI cites. You stay in control of approvals. The agents handle the work."
        illustration={<AIAgentsIllustration />}
      />

      <ZeroClickOutcomesSection />
      <PlatformsMediaSection />
      <FAQSection />
      <IndustriesSection />
      <AISearchCTASection />
      <DentalContactSection />
    </main>
  );
}
