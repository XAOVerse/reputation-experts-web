import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@repute/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Reputation Experts is a UK-based online reputation management firm helping individuals and businesses take control of their digital presence.",
};

const MILESTONES = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Reputation Experts was founded in London with a clear mission: to give individuals and businesses the tools and expertise to manage their digital presence with confidence.",
    image: "/images/history-001.webp",
  },
  {
    year: "2025",
    title: "Expanding Our Capabilities",
    description:
      "We broadened our service offering beyond review management to encompass full-spectrum online reputation management — including search optimisation, digital PR, and personal brand protection.",
    image: "/images/history-002.webp",
  },
  {
    year: "2026",
    title: "Growing Our Reach",
    description:
      "Today we serve clients across the UK and internationally, from individual professionals to enterprise brands. Our team continues to grow as we invest in technology, talent, and trusted client relationships.",
    image: "/images/history-003.webp",
  },
];

const VALUES = [
  {
    title: "Transparency",
    description: "We give honest assessments and set realistic expectations. We will never promise outcomes we cannot deliver.",
  },
  {
    title: "Confidentiality",
    description: "Every engagement is handled with complete discretion. Your reputation is personal — we treat it that way.",
  },
  {
    title: "Ethical Practice",
    description: "We only use legitimate, platform-compliant methods. No manipulation, no shortcuts, no grey areas.",
  },
  {
    title: "Results-Driven",
    description: "Our strategies are built around measurable outcomes. We track, report, and optimise until we achieve your goals.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-[64px]">
      {/* ── Hero Section ──────────────────────────────────── */}
      <section className="bg-[#f2f2f2] py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-[720px]">
            <p className="text-[#28b44f] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">About Us</p>
            <h1 className="text-[#0f0f0f] font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] tracking-[-0.02em] mb-6">
              We help people and businesses take control of their online narrative
            </h1>
            <p className="text-[#555] text-[17px] leading-[1.75] max-w-[600px]">
              In a world where your digital presence defines opportunities, Reputation Experts provides the strategy, expertise, and execution to ensure your online reputation reflects reality.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <section className="bg-[#161616] py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "500+", label: "Clients Served" },
              { value: "50+", label: "Platforms Covered" },
              { value: "24h", label: "Average Response Time" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-white font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em]">{stat.value}</p>
                <p className="text-white/50 text-[13px] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story / Timeline ───────────────────────────── */}
      <section className="bg-[#f5f5f3] py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.01em] mb-14">
            Our Journey
          </h2>

          <div className="space-y-16 lg:space-y-20">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="text-[#28b44f] text-[13px] font-bold tracking-wider">{m.year}</span>
                  <h3 className="text-[#0f0f0f] font-semibold text-[24px] leading-[1.3] mt-2 mb-4">{m.title}</h3>
                  <p className="text-[#555] text-[16px] leading-[1.75]">{m.description}</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#e0e0e0]">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.01em] mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-[#f7f7f7] rounded-2xl p-7">
                <h3 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">{v.title}</h3>
                <p className="text-[#666] text-[15px] leading-[1.7]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Details ─────────────────────────────────── */}
      <section className="bg-[#f5f5f3] py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-[#999] text-[12px] font-medium uppercase tracking-wider mb-2">Registered Name</p>
              <p className="text-[#0f0f0f] text-[15px] font-medium">Reputation Experts Ltd</p>
            </div>
            <div>
              <p className="text-[#999] text-[12px] font-medium uppercase tracking-wider mb-2">Company Number</p>
              <p className="text-[#0f0f0f] text-[15px] font-medium">16939732</p>
            </div>
            <div>
              <p className="text-[#999] text-[12px] font-medium uppercase tracking-wider mb-2">Registered Office</p>
              <p className="text-[#0f0f0f] text-[15px]">167-169 Great Portland Street, 5th Floor, London W1W 5PF</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTASection headline={"Ready to Take\nControl?"} subheading="Start with a free, confidential consultation." />
    </main>
  );
}
