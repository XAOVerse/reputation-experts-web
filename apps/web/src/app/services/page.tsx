import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our reputation management services include review assessment, dispute assistance, monitoring, and long-term reputation recovery for hospitality businesses.",
};

const SERVICES = [
  {
    name: "Harmful Review Assessment",
    description:
      "We evaluate every negative, fake, or defamatory review targeting your business across all major platforms. We identify content that violates platform policies and build the strongest possible case for removal or dispute.",
    includes: ["Google, TripAdvisor, Trustpilot, Booking.com analysis", "Platform policy violation identification", "Removal priority scoring", "Confidential written report"],
  },
  {
    name: "Review Dispute Assistance",
    description:
      "We formally dispute illegitimate reviews on your behalf, submitting platform-specific appeals that maximise removal rates. Our dispute writers know exactly what language and evidence each platform requires.",
    includes: ["Platform-specific dispute submissions", "Evidence compilation and documentation", "Appeal follow-ups and escalations", "Progress reporting"],
  },
  {
    name: "Business Reputation Protection",
    description:
      "Proactive strategies to strengthen your online reputation before harmful content can take hold — including review generation programmes, brand monitoring, and positive content publishing.",
    includes: ["Review generation strategy", "Brand monitoring setup", "Positive content publishing", "Ongoing reputation health reporting"],
  },
  {
    name: "Misleading Content Reports",
    description:
      "We identify and formally report inaccurate, misleading, or defamatory content published on review sites, social media, news outlets, and consumer complaint boards.",
    includes: ["Content analysis across platforms", "Formal reporting to platforms", "Legal referral coordination where needed", "Outcome tracking"],
  },
  {
    name: "Reputation Monitoring",
    description:
      "Automated monitoring of your brand name and key personnel across search results, review platforms, social media, and news sources. Receive alerts when new content is published about your business.",
    includes: ["Real-time alerts on new reviews", "Search result monitoring", "Social media mention tracking", "Monthly reputation health reports"],
  },
  {
    name: "Reputation Recovery Strategy",
    description:
      "A complete, long-term roadmap tailored to restore your brand's standing — combining removals, suppression of negative results, and amplification of positive content.",
    includes: ["Full reputation audit", "Custom recovery roadmap", "Ongoing implementation support", "Quarterly strategy reviews"],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-[64px]">
      <section className="bg-[#f2f2f2] py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-8">
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-4">
            Our Services
          </h1>
          <p className="text-[#666] text-[16px] leading-[1.75] mb-12 max-w-[600px]">
            Professional reputation management services for hotels, restaurants, and hospitality businesses across the UK and internationally.
          </p>

          <div className="space-y-8">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-8 lg:p-10"
              >
                <h2 className="text-[#0f0f0f] font-semibold text-[20px] mb-3">
                  {service.name}
                </h2>
                <p className="text-[#555] text-[15px] leading-[1.75] mb-5">
                  {service.description}
                </p>
                <div className="border-t border-[#f0f0f0] pt-4">
                  <p className="text-[#999] text-[12px] font-medium uppercase tracking-wider mb-3">
                    Includes
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[#666] text-[13px]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28b44f] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#28b44f] text-white text-[15px] font-medium px-8 py-3.5 hover:bg-[#1d9440] transition-colors"
            >
              Get a Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
