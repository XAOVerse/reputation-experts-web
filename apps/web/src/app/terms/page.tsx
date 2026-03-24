import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Reputation Experts Ltd — conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <main className="pt-[64px]">
      <section className="bg-[#f2f2f2] py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 lg:px-8">
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-2">
            Terms of Service
          </h1>
          <p className="text-[#999] text-[14px] mb-10">Last updated: 24 March 2026</p>

          <div className="space-y-8 text-[#444] text-[15px] leading-[1.75]">
            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">1. Introduction</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of the website reputation-experts.co.uk and any services provided by Reputation Experts Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company registered in England &amp; Wales (Company No. 16939732) with its registered office at 167-169 Great Portland Street, 5th Floor, London, W1W 5PF.
              </p>
              <p className="mt-2">
                By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">2. Our Services</h2>
              <p>
                Reputation Experts provides online reputation management services, including the assessment, monitoring, and dispute of online reviews and content on behalf of our clients. Our services involve working within the established policies and reporting mechanisms of third-party review platforms.
              </p>
              <p className="mt-2">
                We do not guarantee the removal of any specific piece of content. Removal decisions are made by the relevant third-party platforms, and outcomes depend on whether content violates their policies. We will always provide an honest assessment of the likelihood of success before commencing work.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">3. Free Case Assessment</h2>
              <p>
                We offer a free initial case assessment at no obligation. This assessment provides our professional opinion on the content in question and an outline of potential next steps. No contractual obligation arises from the free assessment alone.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">4. Fees and Payment</h2>
              <p>
                Service fees will be agreed in writing before any paid work commences. Payment terms, including amounts, schedules, and accepted methods, will be detailed in a separate service agreement or proposal provided to you.
              </p>
              <p className="mt-2">
                All fees are quoted in GBP (£) unless otherwise stated. VAT will be applied where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">5. Refund Policy</h2>
              <p>
                If we are unable to deliver the services as described in your service agreement, you may be entitled to a partial or full refund. Refund requests are considered on a case-by-case basis. Please contact us at info@reputation-experts.co.uk to discuss any concerns about your engagement.
              </p>
              <p className="mt-2">
                Refunds for completed work (such as assessments already delivered) are generally not available, as the value has already been provided.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">6. Client Obligations</h2>
              <p>
                You agree to provide accurate and truthful information when engaging our services. You confirm that any content you ask us to dispute is, to the best of your knowledge, genuinely false, misleading, defamatory, or in violation of the relevant platform&apos;s policies.
              </p>
              <p className="mt-2">
                We reserve the right to decline any engagement where we believe the content in question is legitimate, accurate, or does not violate applicable platform policies.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Reputation Experts Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability to you for any claim arising from our services shall not exceed the total fees paid by you for those services.
              </p>
              <p className="mt-2">
                We do not guarantee any specific outcome from our dispute or reporting activities, as final decisions rest with third-party platforms.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">8. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and design, is the property of Reputation Experts Ltd and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">9. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">10. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at: info@reputation-experts.co.uk
              </p>
              <p className="mt-2">
                Reputation Experts Ltd, 167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
