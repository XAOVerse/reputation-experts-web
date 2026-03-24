import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Reputation Experts. We're building the future of online reputation management — and we're looking for talented people to join our team.",
};

const PERKS = [
  { title: "Remote-First", description: "Work from anywhere in the UK. We believe great work happens where you're most productive." },
  { title: "Flexible Hours", description: "We care about output, not hours. Structure your day in the way that works best for you." },
  { title: "Growth Budget", description: "Annual learning and development budget for courses, conferences, and certifications." },
  { title: "Team Retreats", description: "Regular in-person meetups in London to connect, collaborate, and celebrate." },
];

const OPENINGS = [
  {
    title: "Reputation Analyst",
    department: "Client Services",
    type: "Full-time",
    location: "Remote (UK)",
    description: "Conduct reputation audits, monitor client brands, and develop strategic recommendations for improving online presence.",
  },
  {
    title: "Content Strategist",
    department: "Digital PR",
    type: "Full-time",
    location: "Remote (UK)",
    description: "Create and place high-quality content across authoritative publications to build client credibility and improve search visibility.",
  },
  {
    title: "Client Success Manager",
    department: "Client Services",
    type: "Full-time",
    location: "London / Remote",
    description: "Own the end-to-end client relationship — from onboarding through strategy execution to ongoing reporting and renewal.",
  },
];

export default function CareersPage() {
  return (
    <main className="pt-[64px]">
      {/* Hero */}
      <section className="bg-[#f2f2f2] py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="max-w-[720px]">
            <p className="text-[#28b44f] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">Careers</p>
            <h1 className="text-[#0f0f0f] font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] tracking-[-0.02em] mb-6">
              Help people take control of their online story
            </h1>
            <p className="text-[#555] text-[17px] leading-[1.75] max-w-[600px]">
              We&apos;re a growing team of analysts, strategists, and communicators who are passionate about helping individuals and businesses manage their digital reputation. If that sounds like you, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#0f0f0f] font-semibold text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] mb-10">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERKS.map((perk) => (
              <div key={perk.title} className="bg-[#f7f7f7] rounded-2xl p-6">
                <h3 className="text-[#0f0f0f] font-semibold text-[16px] mb-2">{perk.title}</h3>
                <p className="text-[#777] text-[14px] leading-[1.65]">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-[#f5f5f3] py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#0f0f0f] font-semibold text-[clamp(1.5rem,2.5vw,2rem)] tracking-[-0.01em] mb-10">
            Open Positions
          </h2>

          <div className="space-y-4">
            {OPENINGS.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl p-7 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-[#0f0f0f] font-semibold text-[18px] mb-1">{job.title}</h3>
                    <p className="text-[#777] text-[14px] leading-[1.65] max-w-[500px]">{job.description}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[#999] text-[12px] bg-[#f5f5f5] rounded-full px-3 py-1">{job.department}</span>
                    <span className="text-[#999] text-[12px] bg-[#f5f5f5] rounded-full px-3 py-1">{job.type}</span>
                    <span className="text-[#999] text-[12px] bg-[#f5f5f5] rounded-full px-3 py-1">{job.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Application CTA */}
          <div className="mt-12 bg-[#161616] rounded-2xl p-8 lg:p-10 text-center">
            <h3 className="text-white font-semibold text-[20px] mb-3">Don&apos;t see the right role?</h3>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[500px] mx-auto mb-6">
              We&apos;re always looking for talented people. Send us your CV and a short note about what you&apos;re interested in.
            </p>
            <a
              href="mailto:careers@reputation-experts.co.uk"
              className="inline-flex items-center rounded-full bg-[#28b44f] text-white text-[14px] font-medium px-6 py-3 hover:bg-[#1d9440] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
