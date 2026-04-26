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
  title: "Takeaways & Food Retail - Reputation Management for Takeaways, Bakeries & Food Shops",
  description:
    "We protect and grow the online reputations of takeaways and food retail businesses: takeaways, fast food outlets, bakeries, butchers, and delis. Remove damaging reviews, strengthen your ratings, and win more orders.",
};

export default function Home2Page() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <DentalHeroSection
        headline="We protect and grow Takeaway & Food Retail professionals' online reputations."
        subtitle="Customers check reviews before ordering from a takeaway, bakery, butcher, deli, or fast food outlet. We remove damaging reviews, strengthen your ratings, and position your business where customers are searching, including in AI-driven search."
        ctaLabel="Free Assessment"
        ctaLink="/contact"
        imageSrc="/images/restaurant-1.png"
        imageAlt="Takeaway and food retail business"
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
