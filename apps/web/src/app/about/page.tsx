import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Reputation Experts is a UK-based online reputation management firm helping hotels and hospitality businesses protect their online reviews.",
};

export default function AboutPage() {
  return (
    <main className="pt-[64px]">
      <section className="bg-[#f2f2f2] py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 lg:px-8">
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-8">
            About Reputation Experts
          </h1>

          <div className="space-y-6 text-[#444] text-[16px] leading-[1.75]">
            <p>
              Reputation Experts is a London-based online reputation management firm dedicated to helping businesses protect and improve their digital presence. We specialise in the hospitality sector — hotels, restaurants, and tourism businesses — where online reviews directly impact bookings and revenue.
            </p>

            <p>
              Founded in 2026, we recognised that many businesses were being unfairly damaged by fake, malicious, or policy-violating online reviews with no clear path to resolution. Our team combines expertise in platform policies, dispute processes, and digital strategy to give businesses a professional, effective way to fight back.
            </p>

            <h2 className="text-[#0f0f0f] font-semibold text-[22px] mt-10 mb-4">What We Do</h2>

            <p>
              We assess harmful online content across Google, TripAdvisor, Trustpilot, Booking.com, Yelp, Glassdoor, and 50+ other platforms. When reviews violate platform policies — whether through false claims, competitor sabotage, or defamatory statements — we build and submit professional disputes on your behalf.
            </p>

            <p>
              Beyond removals, we help businesses implement proactive reputation strategies: monitoring brand mentions, encouraging authentic positive reviews, and building a stronger online presence that accurately reflects the quality of service they provide.
            </p>

            <h2 className="text-[#0f0f0f] font-semibold text-[22px] mt-10 mb-4">Our Approach</h2>

            <p>
              Every engagement starts with a free, confidential case assessment. We review the content in question, evaluate the likelihood of successful removal, and provide honest advice on your options. We believe in transparency — we will never promise outcomes we cannot deliver.
            </p>

            <p>
              Our process is entirely legal and compliant. We work within each platform&apos;s established dispute and reporting mechanisms. We do not use fake reviews, review manipulation, or any tactics that violate platform terms of service.
            </p>

            <h2 className="text-[#0f0f0f] font-semibold text-[22px] mt-10 mb-4">Company Details</h2>

            <p>
              Reputation Experts Ltd is registered in England &amp; Wales (Company No. 16939732). Our registered office is at 167-169 Great Portland Street, 5th Floor, London, W1W 5PF.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
