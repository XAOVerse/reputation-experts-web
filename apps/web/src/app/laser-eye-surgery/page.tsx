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
  title: "Laser Eye Surgery Clinics — Reputation Management for Laser Eye & Vision Correction Clinics",
  description:
    "We protect and grow the online reputations of laser eye surgery clinics. Remove damaging reviews, strengthen your ratings, and turn trust into more consultations and procedures.",
};

export default function Home2Page() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <DentalHeroSection
        headline="We protect and grow Laser Eye Surgery Clinics' online reputations."
        subtitle="Patients research extensively before trusting someone with their eyesight. We remove damaging reviews, strengthen your ratings, and position your clinic where patients are searching — on Google, Trustpilot, RealSelf, in AI Overviews, and across AI-driven search."
        ctaLabel="Free Assessment"
        ctaLink="/contact"
        imageSrc="/images/laser-eye-1.png"
        imageAlt="Laser eye surgery consultation"
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
