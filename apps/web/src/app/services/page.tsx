import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@repute/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our reputation management services include online reputation audits, content management, brand monitoring, crisis response, and long-term digital strategy.",
};

const SERVICES = [
  {
    name: "Online Reputation Audit",
    description:
      "A comprehensive analysis of your current digital footprint. We examine search results, review platforms, social media, news mentions, and data broker sites to give you a complete picture of how you appear online — and where the risks and opportunities lie.",
    includes: ["Search engine results analysis", "Review platform presence audit", "Social media footprint review", "Detailed written report with recommendations"],
  },
  {
    name: "Content & Search Management",
    description:
      "We help shape what people see when they search for you or your business. Our team develops and executes strategies to promote positive, accurate content while addressing problematic results through ethical, platform-compliant methods.",
    includes: ["Search result optimisation", "Positive content creation and promotion", "Problematic content assessment", "Ongoing search monitoring"],
  },
  {
    name: "Brand Monitoring & Alerts",
    description:
      "Continuous, automated monitoring of your brand, key personnel, and competitors across search engines, review platforms, social media, and news outlets. Get notified the moment something new appears.",
    includes: ["Real-time alert notifications", "Custom keyword tracking", "Competitive intelligence", "Monthly reputation health reports"],
  },
  {
    name: "Crisis & Issue Response",
    description:
      "When a reputation issue arises — whether from negative press, viral social media, or an internal incident — our team provides rapid assessment, strategic guidance, and hands-on support to minimise impact and restore confidence.",
    includes: ["Rapid situation assessment", "Response strategy development", "Stakeholder communication support", "Post-crisis reputation recovery"],
  },
  {
    name: "Review Management",
    description:
      "A holistic approach to your review presence across all major platforms. We help you build authentic positive reviews, respond strategically to feedback, and address policy-violating content through proper channels.",
    includes: ["Review generation strategy", "Response templates and guidance", "Policy-violation identification", "Platform-specific dispute management"],
  },
  {
    name: "Digital PR & Authority Building",
    description:
      "Strategic placement of thought leadership articles, press features, and authoritative content in recognised publications to strengthen your credibility, improve search visibility, and build long-term digital equity.",
    includes: ["Publication outreach and placement", "Thought leadership content creation", "Press feature coordination", "SEO-optimised content strategy"],
  },
  {
    name: "Personal Reputation Management",
    description:
      "Tailored solutions for executives, professionals, and public figures who need to manage their personal digital footprint, protect their privacy, and curate the narrative that appears when people search their name.",
    includes: ["Personal brand audit", "Privacy protection measures", "Executive profiling and content", "Ongoing personal monitoring"],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-[64px]">
      {/* Hero */}
      <section className="bg-[#f2f2f2] py-20 lg:py-28">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-8">
          <p className="text-[#28b44f] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">Our Solutions</p>
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-4">
            Reputation Management Services
          </h1>
          <p className="text-[#666] text-[16px] leading-[1.75] mb-0 max-w-[600px]">
            Comprehensive solutions for individuals and businesses who want to take control of their online presence. Every engagement is tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#f5f5f3] py-12 lg:py-16">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-8">
          <div className="space-y-6">
            {SERVICES.map((service, i) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-8 lg:p-10"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-[#ccc] text-[13px] font-mono mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[#0f0f0f] font-semibold text-[20px]">
                    {service.name}
                  </h2>
                </div>
                <p className="text-[#555] text-[15px] leading-[1.75] mb-5 ml-10">
                  {service.description}
                </p>
                <div className="border-t border-[#f0f0f0] pt-4 ml-10">
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
        </div>
      </section>

      {/* CTA */}
      <CTASection headline={"Ready to Get\nStarted?"} subheading="Every engagement begins with a free, confidential consultation." />
    </main>
  );
}
