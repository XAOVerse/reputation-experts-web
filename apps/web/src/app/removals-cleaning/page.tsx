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
  title: "Removals & Cleaning - Reputation Management for Removal Companies & Cleaning Services",
  description:
    "We protect and grow the online reputations of removals and cleaning businesses: removal companies, cleaning services, laundries, carpet cleaners, and pest control. Remove damaging reviews, strengthen your ratings, and win more bookings.",
};

export default function Home2Page() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <DentalHeroSection
        headline="We protect and grow Removals & Cleaning professionals' online reputations."
        subtitle="Customers check reviews before hiring a removal company, cleaning service, carpet cleaner, or pest control firm. We remove damaging reviews, strengthen your ratings, and position your business where customers are searching, including in AI-driven search."
        ctaLabel="Free Assessment"
        ctaLink="/contact"
        imageSrc="/images/home-services-1.png"
        imageAlt="Removals and cleaning service"
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
