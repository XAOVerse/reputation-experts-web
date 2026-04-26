import type { Metadata } from "next";
import { DentalHeroSection } from "./sections/DentalHeroSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { ReputationManagementSection } from "./sections/ReputationManagementSection";
import { DentalServicesSection } from "./sections/DentalServicesSection";
import { DigitalReputationSection } from "./sections/DigitalReputationSection";
import { IndustryAuthoritySection } from "./sections/IndustryAuthoritySection";
import { GoogleAIOverviewSection } from "./sections/GoogleAIOverviewSection";
import { PlatformsMediaSection } from "./sections/PlatformsMediaSection";
import { DentalCaseStudiesSection } from "./sections/DentalCaseStudiesSection";
import { DentalFAQSection } from "./sections/DentalFAQSection";
import { DentalCTASection } from "./sections/DentalCTASection";
import { DentalContactSection } from "./sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Event Venues — Reputation Management for Weddings, Conferences & Concert Venues",
  description:
    "We protect and grow the online reputations of event venues. Remove damaging reviews, strengthen your ratings across Google, TripAdvisor, and Trustpilot, and turn trust into more bookings for weddings, conferences, concerts, and corporate events.",
};

export default function Home2Page() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <DentalHeroSection
        headline="We protect and grow Event Venues' online reputations."
        subtitle="One bad review about a ruined wedding or disorganised conference can cost you dozens of future bookings. We remove damaging reviews, strengthen your ratings, and position your venue where event planners are searching — on Google, TripAdvisor, Trustpilot, and across AI-driven search."
        ctaLabel="Free Assessment"
        ctaLink="/contact"
        imageSrc="/images/venues-1.png"
        imageAlt="Event venue reputation"
      />

      {/* ── 2. Problem Statement + Platform Cards ────────────────── */}
      <ProblemStatementSection />

      {/* ── 3. Reputation Management Services ────────────────────── */}
      <ReputationManagementSection />

      {/* ── 4. Services (accordion + detail panel) ───────────────── */}
      <DentalServicesSection />

      {/* ── 5. Digital Reputation Management ──────────────────────── */}
      <DigitalReputationSection />

      {/* ── 6. Industry Authority Brand in 6 Months ──────────────── */}
      <IndustryAuthoritySection />

      {/* ── 7. Google AI Overview ─────────────────────────────────── */}
      <GoogleAIOverviewSection />

      {/* ── 8. Platforms & Media Outlets ──────────────────────────── */}
      <PlatformsMediaSection />

      {/* ── 9. Case Studies ─────────────────────────────────────── */}
      <DentalCaseStudiesSection />

      {/* ── 10. FAQ ────────────────────────────────────────────── */}
      <DentalFAQSection />

      {/* ── 11. CTA ────────────────────────────────────────────── */}
      <DentalCTASection />

      {/* ── 12. Get in Touch ───────────────────────────────────── */}
      <DentalContactSection />
    </main>
  );
}
