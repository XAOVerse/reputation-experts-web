import type { Metadata } from "next";
import { CTASection } from "@repute/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Reputation Experts for a free, confidential consultation. London-based online reputation management for individuals and businesses.",
};

export default function ContactPage() {
  return (
    <main className="pt-[64px]">
      <section className="bg-[#f2f2f2] py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 lg:px-8">
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#666] text-[16px] leading-[1.75] mb-10">
            Ready to take control of your online reputation? Reach out for a free, confidential consultation. We&apos;ll review your situation and provide honest, expert guidance on your options.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6">
              <p className="text-[#999] text-[12px] font-medium uppercase tracking-wider mb-2">Email</p>
              <a href="mailto:info@reputation-experts.co.uk" className="text-[#0f0f0f] text-[15px] font-medium hover:text-[#28b44f] transition-colors">
                info@reputation-experts.co.uk
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <p className="text-[#999] text-[12px] font-medium uppercase tracking-wider mb-2">Office</p>
              <p className="text-[#0f0f0f] text-[15px]">
                167-169 Great Portland Street<br />
                5th Floor, London W1W 5PF
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline={"Free Reputation\nConsultation"} />
    </main>
  );
}
