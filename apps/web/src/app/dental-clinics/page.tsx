import type { Metadata } from "next";
import {
  DentalHeroSection,
  ProblemStatementSection,
  ReputationManagementSection,
  DentalServicesSection,
  DigitalReputationSection,
  IndustryAuthoritySection,
  GoogleAIOverviewSection,
  PlatformsMediaSection,
  DentalCaseStudiesSection,
  DentalFAQSection,
  DentalCTASection,
  DentalContactSection,
} from "./sections";

export const metadata: Metadata = {
  title: "Dental Clinics \u2014 Reputation Management for Dental Practices",
  description:
    "We protect and grow dental clinics' online reputations. Improve bookings, build trust, and increase revenue with professional reputation management.",
};

export default function DentalClinicsPage() {
  return (
    <main>
      <DentalHeroSection
        headline="We protect and grow Dental Clinics' online reputations."
        subtitle="Improving online reputation directly affects clinics by helping them gain more bookings, build trust, and increase sales."
        ctaLabel="Free Assessment"
        ctaLink="/contact"
        imageSrc="/images/dental-1.png"
        imageAlt="Dental clinic consultation"
      />
      <ProblemStatementSection />
      <ReputationManagementSection />
      <DentalServicesSection />
      <DigitalReputationSection />
      <IndustryAuthoritySection />
      <GoogleAIOverviewSection />
      <PlatformsMediaSection />
      <DentalCaseStudiesSection />
      <DentalFAQSection />
      <DentalCTASection />
      <DentalContactSection />
    </main>
  );
}
