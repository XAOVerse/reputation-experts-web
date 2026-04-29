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
  title: "Financial Services - Reputation Management for Insurance Brokers, Advisors & Investment Firms",
  description:
    "We protect and grow the online reputations of financial services providers: insurance brokers, financial advisors, traders, investment firms, mortgage advisors, and insurance companies. Remove damaging reviews, strengthen your ratings, and win more clients.",
};

export default function Home2Page() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <DentalHeroSection
        headline="We protect and grow Financial Services providers\u2019 online reputations."
        subtitle="Clients check reviews before choosing an insurance broker, financial advisor, mortgage advisor, trader, or investment firm. We remove damaging reviews, strengthen your ratings, and position your firm where clients are searching, including in AI-driven search."
        ctaLabel="Free Assessment"
        ctaLink="/contact"
        imageSrc="/images/financial-1.png"
        imageAlt="Financial services professional"
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
