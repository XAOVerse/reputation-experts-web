import {
  HeroSection,
  WhoWeServeSection,
  ServicesSection,
  KeyBenefitsSection,
  TestimonialsSection,
  AwardsStrip,
  ProcessSection,
  PrivacySection,
  FAQSection,
  CTASection,
} from "@repute/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputation Experts \u2014 Online Reputation Management",
  description:
    "Reputation Experts helps individuals and businesses take control of their online presence. Professional reputation management, monitoring, and digital strategy across all major platforms.",
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection
        headline="Take Control of Your Online Reputation"
        highlightWord=""
        quote="We help individuals and businesses manage, protect, and improve how they appear online \u2014 across search results, review platforms, and social media."
        quoteBold="Expert guidance. Confidential process."
        subQuote="Your online reputation shapes first impressions. Whether you're addressing unwanted content or building a stronger digital presence, we can help."
        ctaLabel="Free Consultation"
        ctaLink="/contact"
        mediaCaption="Reputation Experts \u2014 Professional Online Reputation Management"
mediaSrc="/images/hero-laptop.jpg"      />

      {/* 2. Who We Serve */}
      <WhoWeServeSection
        heading="Who We Serve"
        ctaLabel="Get Started"
        ctaHref="/contact"
      />

      {/* 3. Services */}
      <ServicesSection heading="Our Solutions" />

      {/* 4. Key Benefits */}
      <KeyBenefitsSection heading="Why Choose Us" />

      {/* 5. Testimonials */}
      <TestimonialsSection
        heading="Client Stories"
        ctaLabel="Contact us"
        ctaHref="/contact"
      />

      {/* Awards section hidden until PR articles are published
              <AwardsStrip heading="As Featured In" /> */}
      {/* 7. Our Process */}
            <ProcessSection />

      {/* 8. Privacy */}
      <PrivacySection heading="How We Safeguard Your Privacy" />

      {/* 9. FAQ */}
      <FAQSection heading="FAQ" />

      {/* 10. CTA (Assessment Form) */}
      <CTASection headline={"Free Reputation\nCase Assessment"} />
    </main>
  );
}
