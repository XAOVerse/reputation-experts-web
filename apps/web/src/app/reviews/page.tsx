import type { Metadata } from "next";
import { ReviewsHeroSection } from "./sections/ReviewsHeroSection";
import { ReviewsStatsSection } from "./sections/ReviewsStatsSection";
import { CostOfBadReviewsSection } from "./sections/CostOfBadReviewsSection";
import { ListingOptimisationSection } from "./sections/ListingOptimisationSection";
import { ReputationScoreSection } from "./sections/ReputationScoreSection";
import { ReviewGrowthSection } from "./sections/ReviewGrowthSection";
import { OngoingProtectionSection } from "./sections/OngoingProtectionSection";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { ReviewsFAQSection } from "./sections/ReviewsFAQSection";
import { DentalCTASection } from "../home2/sections/DentalCTASection";
import { DentalContactSection } from "../home2/sections/DentalContactSection";

export const metadata: Metadata = {
  title:
    "Reviews — Reputation Experts | Grow positive reviews, remove harmful content, 90-day guarantee",
  description:
    "We grow authentic 5-star reviews across nearly 200 platforms, dispute and remove harmful content, optimise listings with structured-data markup, and back the work with a written 90-day score guarantee or we work free until your milestone is reached.",
};

export default function ReviewsPage() {
  return (
    <main>
      <ReviewsHeroSection />
      <ReviewsStatsSection />
      <CostOfBadReviewsSection />
      <ListingOptimisationSection />
      <ReputationScoreSection />
      <ReviewGrowthSection />
      <OngoingProtectionSection />
      <GuaranteeSection />
      <ReviewsFAQSection />
      <DentalCTASection />
      <DentalContactSection />
    </main>
  );
}
