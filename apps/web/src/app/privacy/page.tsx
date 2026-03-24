import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Reputation Experts Ltd — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[64px]">
      <section className="bg-[#f2f2f2] py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 lg:px-8">
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#999] text-[14px] mb-10">Last updated: 24 March 2026</p>

          <div className="space-y-8 text-[#444] text-[15px] leading-[1.75]">
            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">1. Who We Are</h2>
              <p>
                Reputation Experts Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a company registered in England &amp; Wales (Company No. 16939732) with its registered office at 167-169 Great Portland Street, 5th Floor, London, W1W 5PF. We are the data controller for the personal data described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">2. What Data We Collect</h2>
              <p>When you use our website or engage our services, we may collect the following personal data:</p>
              <p className="mt-2">
                <strong>Contact information:</strong> your name, company name, email address, and phone number when you submit our contact form or communicate with us.
              </p>
              <p className="mt-2">
                <strong>Case information:</strong> details about the online content you wish to dispute, including URLs, platform names, and descriptions of the content.
              </p>
              <p className="mt-2">
                <strong>Technical data:</strong> your IP address, browser type, and pages visited on our website, collected automatically through cookies and similar technologies.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <p className="mt-2">To respond to your enquiries and provide our reputation management services; to communicate with you about your case; to improve our website and services; and to comply with legal obligations.</p>
              <p className="mt-2">
                Our legal basis for processing is your consent (when you submit the contact form), the performance of a contract (when we provide services to you), and our legitimate interests (to improve our services and protect our business).
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal data to third parties. We may share your data with trusted service providers who assist us in operating our website and delivering our services (such as hosting providers and email services). All third-party providers are required to protect your data in accordance with applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">5. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for up to 24 months. Client case data is retained for up to 6 years after the conclusion of services, in line with UK legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">6. Your Rights</h2>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR), you have the right to access, rectify, or erase your personal data; to restrict or object to processing; and to data portability. You also have the right to withdraw consent at any time. To exercise any of these rights, please contact us at info@reputation-experts.co.uk.
              </p>
              <p className="mt-2">
                You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk if you believe your data has been handled unlawfully.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">7. Cookies</h2>
              <p>
                Our website uses essential cookies required for the site to function properly. We also use analytics cookies to understand how visitors use our website. You can manage your cookie preferences through your browser settings. For more information, see our cookie banner when you first visit the site.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at: info@reputation-experts.co.uk
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
