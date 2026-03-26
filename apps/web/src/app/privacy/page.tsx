import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Reputation Experts",
  description:
    "Privacy Policy for Reputation Experts Ltd. Learn how we collect, use, store, and protect your personal data in accordance with UK GDPR.",
};

/* ------------------------------------------------------------------ */
/*  SECTION COMPONENT                                                  */
/* ------------------------------------------------------------------ */
function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-[#0f0f0f] font-semibold text-[20px] mb-4 flex items-baseline gap-2">
        <span className="text-[#e8522a] font-bold">{number}</span>
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TABLE OF CONTENTS                                                  */
/* ------------------------------------------------------------------ */
const sections = [
  { id: "about", label: "About This Privacy Policy" },
  { id: "controller", label: "Data Controller" },
  { id: "collect", label: "Information We Collect" },
  { id: "use", label: "How We Use Your Information" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "sharing", label: "How We Share Your Information" },
  { id: "international", label: "International Data Transfers" },
  { id: "retention", label: "Data Retention" },
  { id: "security", label: "Information Security" },
  { id: "cookies", label: "Cookies & Tracking Technologies" },
  { id: "rights", label: "Your Privacy Rights" },
  { id: "children", label: "Children's Privacy" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function PrivacyPage() {
  return (
    <main className="pt-[64px]">
      {/* ---- hero banner ---- */}
      <section className="bg-[#0f0f0f] py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto px-5 lg:px-8 text-center">
          <h1 className="text-white font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-[14px]">
            Effective date: 26 March 2026 &middot; Last reviewed: 26 March 2026
          </p>
        </div>
      </section>

      {/* ---- body ---- */}
      <section className="bg-[#f2f2f2] py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 lg:px-8">
          {/* table of contents */}
          <nav className="bg-white rounded-2xl p-6 lg:p-8 mb-12 border border-[#e5e5e5]">
            <p className="text-[#0f0f0f] font-semibold text-[16px] mb-4">Contents</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px]">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[#555] hover:text-[#e8522a] transition-colors"
                  >
                    <span className="text-[#e8522a] font-medium mr-1.5">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* policy sections */}
          <div className="space-y-12 text-[#444] text-[15px] leading-[1.8]">
            {/* 1 */}
            <Section id="about" number="01" title="About This Privacy Policy">
              <p>
                Reputation Experts Ltd (&quot;Reputation Experts&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and security of the personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at reputation-experts.co.uk (the &quot;Site&quot;) or engage our professional services.
              </p>
              <p>
                By accessing the Site or using our services, you acknowledge that you have read, understood, and agree to the practices described in this policy. If you do not agree with the terms of this policy, please do not access the Site or use our services.
              </p>
            </Section>

            {/* 2 */}
            <Section id="controller" number="02" title="Data Controller">
              <p>
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-white rounded-xl p-5 border border-[#e5e5e5] text-[14px] mt-2">
                <p className="font-semibold text-[#0f0f0f]">Reputation Experts Ltd</p>
                <p>Company No. 16939732 (England &amp; Wales)</p>
                <p>167-169 Great Portland Street, 5th Floor, London, W1W 5PF</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:privacy@reputation-experts.co.uk" className="text-[#e8522a] underline">
                    privacy@reputation-experts.co.uk
                  </a>
                </p>
              </div>
            </Section>

            {/* 3 */}
            <Section id="collect" number="03" title="Information We Collect">
              <p>We may collect and process the following categories of personal data:</p>

              <p className="font-semibold text-[#0f0f0f] mt-4">Information you provide directly</p>
              <p>
                When you fill out our contact or assessment form, register for a consultation, or correspond with us by email or telephone, we may collect your full name, email address, telephone number, company or organisation name, job title, and any additional details you choose to share about your enquiry.
              </p>

              <p className="font-semibold text-[#0f0f0f] mt-4">Case and service information</p>
              <p>
                If you become a client, we may collect information necessary to deliver our reputation management services, including URLs and links to online content, names of platforms or publications, descriptions of the content at issue, supporting documentation, and correspondence related to your case.
              </p>

              <p className="font-semibold text-[#0f0f0f] mt-4">Payment information</p>
              <p>
                When you purchase our services, we collect billing details such as your name, billing address, and payment card information. Payment processing is handled by our PCI-DSS-compliant payment processor, Stripe, and we do not store full card numbers on our systems.
              </p>

              <p className="font-semibold text-[#0f0f0f] mt-4">Information collected automatically</p>
              <p>
                When you visit our Site, we automatically collect certain technical data including your IP address, browser type and version, operating system, referring URL, pages viewed, time and date of your visit, time spent on each page, and other diagnostic data. This information is collected through cookies and similar tracking technologies (see Section 10).
              </p>
            </Section>

            {/* 4 */}
            <Section id="use" number="04" title="How We Use Your Information">
              <p>We use the personal data we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To respond to your enquiries, schedule consultations, and provide our professional services</li>
                <li>To manage and administer your client account and case files</li>
                <li>To process payments and send invoices</li>
                <li>To communicate with you about the progress of your case and service updates</li>
                <li>To improve, personalise, and optimise the performance and content of our Site</li>
                <li>To analyse usage trends and measure the effectiveness of our marketing</li>
                <li>To detect, prevent, and address fraud, security issues, or technical problems</li>
                <li>To comply with applicable laws, regulations, and legal processes</li>
                <li>To enforce our terms of service and protect our legal rights</li>
              </ul>
            </Section>

            {/* 5 */}
            <Section id="legal-basis" number="05" title="Legal Basis for Processing">
              <p>Under the UK General Data Protection Regulation (UK GDPR), we rely on the following lawful bases to process your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Consent:</strong> Where you have given clear consent for us to process your personal data for a specific purpose, such as submitting a contact form or subscribing to communications.</li>
                <li><strong>Contractual necessity:</strong> Where processing is necessary for the performance of a contract with you, or to take pre-contractual steps at your request.</li>
                <li><strong>Legitimate interests:</strong> Where processing is necessary for our legitimate business interests, such as improving our services, ensuring network security, and preventing fraud, provided these interests are not overridden by your rights and freedoms.</li>
                <li><strong>Legal obligation:</strong> Where processing is necessary to comply with a legal or regulatory obligation to which we are subject.</li>
              </ul>
            </Section>

            {/* 6 */}
            <Section id="sharing" number="06" title="How We Share Your Information">
              <p>
                We do not sell, rent, or trade your personal data. We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Service providers:</strong> We share data with trusted third-party vendors who assist in operating our business, such as cloud hosting providers, payment processors (Stripe), email delivery services, and analytics platforms. These providers are contractually bound to process your data only on our instructions and in compliance with applicable data protection laws.</li>
                <li><strong>Professional advisors:</strong> We may disclose information to our lawyers, accountants, insurers, and auditors where reasonably necessary for the purposes of managing risk, obtaining professional advice, or establishing, exercising, or defending legal claims.</li>
                <li><strong>Legal requirements:</strong> We may disclose your data where required by law, regulation, court order, or governmental request, or where we reasonably believe disclosure is necessary to protect the rights, property, or safety of Reputation Experts, our clients, or others.</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal data may be transferred to the acquiring entity, subject to the same privacy protections described in this policy.</li>
              </ul>
            </Section>

            {/* 7 */}
            <Section id="international" number="07" title="International Data Transfers">
              <p>
                Your personal data is primarily stored and processed within the United Kingdom and the European Economic Area (EEA). Where we transfer data outside of the UK or EEA, we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses approved by the UK Information Commissioner, or transfers to countries that have been deemed to provide an adequate level of data protection.
              </p>
            </Section>

            {/* 8 */}
            <Section id="retention" number="08" title="Data Retention">
              <p>
                We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as required or permitted by law. Our standard retention periods are:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Enquiry and contact form data:</strong> Up to 24 months from the date of submission, unless you become a client.</li>
                <li><strong>Client case data:</strong> Up to 6 years following the conclusion of services, in accordance with UK limitation periods and regulatory obligations.</li>
                <li><strong>Financial and billing records:</strong> Up to 7 years, as required by HMRC and applicable tax legislation.</li>
                <li><strong>Website analytics data:</strong> Up to 26 months, in accordance with our analytics provider&apos;s retention settings.</li>
              </ul>
              <p>
                When personal data is no longer required, we securely delete or anonymise it in accordance with our data retention procedures.
              </p>
            </Section>

            {/* 9 */}
            <Section id="security" number="09" title="Information Security">
              <p>
                We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Encryption of data in transit using TLS/SSL protocols</li>
                <li>Secure, access-controlled hosting environments</li>
                <li>Regular security assessments and vulnerability monitoring</li>
                <li>Strict access controls limiting data access to authorised personnel only</li>
                <li>Confidentiality agreements with all staff and contractors who handle personal data</li>
              </ul>
              <p>
                While we strive to protect your information, no method of electronic storage or transmission is completely secure. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately at{" "}
                <a href="mailto:privacy@reputation-experts.co.uk" className="text-[#e8522a] underline">
                  privacy@reputation-experts.co.uk
                </a>.
              </p>
            </Section>

            {/* 10 */}
            <Section id="cookies" number="10" title="Cookies & Tracking Technologies">
              <p>
                Our Site uses cookies and similar technologies to enhance your browsing experience and to collect information about how you use our Site.
              </p>

              <p className="font-semibold text-[#0f0f0f] mt-4">Types of cookies we use</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Strictly necessary cookies:</strong> Required for the Site to function properly. These cannot be disabled.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the Site by collecting and reporting information anonymously.</li>
                <li><strong>Functional cookies:</strong> Enable enhanced functionality and personalisation, such as remembering your preferences.</li>
              </ul>
              <p className="mt-3">
                You can manage your cookie preferences through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our Site.
              </p>
            </Section>

            {/* 11 */}
            <Section id="rights" number="11" title="Your Privacy Rights">
              <p>
                Under the UK GDPR, you have the following rights in relation to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Right of access:</strong> You may request a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification:</strong> You may request that we correct any inaccurate or incomplete data.</li>
                <li><strong>Right to erasure:</strong> You may request that we delete your personal data, subject to certain legal exceptions.</li>
                <li><strong>Right to restrict processing:</strong> You may request that we limit how we use your data in certain circumstances.</li>
                <li><strong>Right to data portability:</strong> You may request that we transfer your data to another organisation in a structured, commonly used, machine-readable format.</li>
                <li><strong>Right to object:</strong> You may object to the processing of your data where we rely on legitimate interests as the legal basis.</li>
                <li><strong>Right to withdraw consent:</strong> Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal.</li>
              </ul>
              <p>
                To exercise any of these rights, please email us at{" "}
                <a href="mailto:privacy@reputation-experts.co.uk" className="text-[#e8522a] underline">
                  privacy@reputation-experts.co.uk
                </a>. We will respond to your request within one month. We may ask you to verify your identity before processing your request.
              </p>
              <p>
                If you are not satisfied with how we handle your request, you have the right to lodge a complaint with the{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8522a] underline"
                >
                  Information Commissioner&apos;s Office (ICO)
                </a>.
              </p>
            </Section>

            {/* 12 */}
            <Section id="children" number="12" title="Children's Privacy">
              <p>
                Our services are not directed at individuals under the age of 18, and we do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child, we will take steps to delete it promptly.
              </p>
            </Section>

            {/* 13 */}
            <Section id="third-party" number="13" title="Third-Party Links">
              <p>
                Our Site may contain links to third-party websites and services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We recommend that you review the privacy policy of every site you visit.
              </p>
            </Section>

            {/* 14 */}
            <Section id="changes" number="14" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the &quot;Effective date&quot; at the top of this page. We encourage you to review this policy periodically. Your continued use of the Site or our services after any changes constitutes your acceptance of the updated policy.
              </p>
            </Section>

            {/* 15 */}
            <Section id="contact" number="15" title="Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white rounded-xl p-5 border border-[#e5e5e5] text-[14px] mt-3">
                <p className="font-semibold text-[#0f0f0f]">Reputation Experts Ltd</p>
                <p>Data Protection Enquiries</p>
                <p>167-169 Great Portland Street, 5th Floor</p>
                <p>London, W1W 5PF, United Kingdom</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:privacy@reputation-experts.co.uk" className="text-[#e8522a] underline">
                    privacy@reputation-experts.co.uk
                  </a>
                </p>
                <p>
                  General:{" "}
                  <a href="mailto:info@reputation-experts.co.uk" className="text-[#e8522a] underline">
                    info@reputation-experts.co.uk
                  </a>
                </p>
              </div>
            </Section>
          </div>

          {/* back to top */}
          <div className="mt-16 pt-8 border-t border-[#ddd] text-center">
            <a href="#" className="text-[#e8522a] text-[14px] font-medium hover:underline">
              Back to top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
