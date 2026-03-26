import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Reputation Experts Ltd — how we collect, use, store, and protect your personal data in accordance with UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[64px]">
      <section className="bg-[#f2f2f2] py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 lg:px-8">
          <h1 className="text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#999] text-[14px] mb-10">Last updated: 26 March 2026</p>

          <div className="space-y-8 text-[#444] text-[15px] leading-[1.75]">
            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">1. About This Privacy Policy</h2>
              <p>
                Reputation Experts Ltd (&quot;Reputation Experts&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and security of the personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at reputation-experts.co.uk (the &quot;Site&quot;) or engage our professional services.
              </p>
              <p className="mt-2">
                By accessing the Site or using our services, you acknowledge that you have read, understood, and agree to the practices described in this policy. If you do not agree with the terms of this policy, please do not access the Site or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">2. Data Controller</h2>
              <p>
                The data controller responsible for your personal data is Reputation Experts Ltd, Company No. 16939732 (England &amp; Wales), 167-169 Great Portland Street, 5th Floor, London, W1W 5PF. For data protection enquiries, please contact us at privacy@reputation-experts.co.uk.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">3. Information We Collect</h2>
              <p>We may collect and process the following categories of personal data:</p>
              <p className="mt-2">
                <strong>Information you provide directly:</strong> When you fill out our contact or assessment form, register for a consultation, or correspond with us by email or telephone, we may collect your full name, email address, telephone number, company or organisation name, job title, and any additional details you choose to share about your enquiry.
              </p>
              <p className="mt-2">
                <strong>Case and service information:</strong> If you become a client, we may collect information necessary to deliver our reputation management services, including URLs and links to online content, names of platforms or publications, descriptions of the content at issue, supporting documentation, and correspondence related to your case.
              </p>
              <p className="mt-2">
                <strong>Payment information:</strong> When you purchase our services, we collect billing details such as your name, billing address, and payment card information. Payment processing is handled by our PCI-DSS-compliant payment processor, Stripe, and we do not store full card numbers on our systems.
              </p>
              <p className="mt-2">
                <strong>Information collected automatically:</strong> When you visit our Site, we automatically collect certain technical data including your IP address, browser type and version, operating system, referring URL, pages viewed, time and date of your visit, time spent on each page, and other diagnostic data. This information is collected through cookies and similar tracking technologies (see Section 10).
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">4. How We Use Your Information</h2>
              <p>
                We use your personal data to respond to your enquiries, schedule consultations, and provide our professional services; to manage and administer your client account and case files; to process payments and send invoices; to communicate with you about the progress of your case and service updates; to improve, personalise, and optimise the performance and content of our Site; to analyse usage trends and measure the effectiveness of our marketing; to detect, prevent, and address fraud, security issues, or technical problems; to comply with applicable laws, regulations, and legal processes; and to enforce our terms of service and protect our legal rights.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">5. Legal Basis for Processing</h2>
              <p>Under the UK General Data Protection Regulation (UK GDPR), we rely on the following lawful bases to process your personal data:</p>
              <p className="mt-2">
                <strong>Consent:</strong> Where you have given clear consent for us to process your personal data for a specific purpose, such as submitting a contact form or subscribing to communications.
              </p>
              <p className="mt-2">
                <strong>Contractual necessity:</strong> Where processing is necessary for the performance of a contract with you, or to take pre-contractual steps at your request.
              </p>
              <p className="mt-2">
                <strong>Legitimate interests:</strong> Where processing is necessary for our legitimate business interests, such as improving our services, ensuring network security, and preventing fraud, provided these interests are not overridden by your rights and freedoms.
              </p>
              <p className="mt-2">
                <strong>Legal obligation:</strong> Where processing is necessary to comply with a legal or regulatory obligation to which we are subject.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">6. How We Share Your Information</h2>
              <p>
                We do not sell, rent, or trade your personal data. We may share your information only in the following limited circumstances:
              </p>
              <p className="mt-2">
                <strong>Service providers:</strong> We share data with trusted third-party vendors who assist in operating our business, such as cloud hosting providers, payment processors (Stripe), email delivery services, and analytics platforms. These providers are contractually bound to process your data only on our instructions and in compliance with applicable data protection laws.
              </p>
              <p className="mt-2">
                <strong>Professional advisors:</strong> We may disclose information to our lawyers, accountants, insurers, and auditors where reasonably necessary for the purposes of managing risk, obtaining professional advice, or establishing, exercising, or defending legal claims.
              </p>
              <p className="mt-2">
                <strong>Legal requirements:</strong> We may disclose your data where required by law, regulation, court order, or governmental request, or where we reasonably believe disclosure is necessary to protect the rights, property, or safety of Reputation Experts, our clients, or others.
              </p>
              <p className="mt-2">
                <strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal data may be transferred to the acquiring entity, subject to the same privacy protections described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">7. International Data Transfers</h2>
              <p>
                Your personal data is primarily stored and processed within the United Kingdom and the European Economic Area (EEA). Where we transfer data outside of the UK or EEA, we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses approved by the UK Information Commissioner, or transfers to countries that have been deemed to provide an adequate level of data protection.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">8. Data Retention</h2>
              <p>
                We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as required or permitted by law. Our standard retention periods are as follows:
              </p>
              <p className="mt-2">
                <strong>Enquiry and contact form data:</strong> Up to 24 months from the date of submission, unless you become a client. <strong>Client case data:</strong> Up to 6 years following the conclusion of services, in accordance with UK limitation periods and regulatory obligations. <strong>Financial and billing records:</strong> Up to 7 years, as required by HMRC and applicable tax legislation. <strong>Website analytics data:</strong> Up to 26 months, in accordance with our analytics provider&apos;s retention settings.
              </p>
              <p className="mt-2">
                When personal data is no longer required, we securely delete or anonymise it in accordance with our data retention procedures.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">9. Information Security</h2>
              <p>
                We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, alteration, disclosure, or destruction. These measures include encryption of data in transit using TLS/SSL protocols, secure access-controlled hosting environments, regular security assessments and vulnerability monitoring, strict access controls limiting data access to authorised personnel only, and confidentiality agreements with all staff and contractors who handle personal data.
              </p>
              <p className="mt-2">
                While we strive to protect your information, no method of electronic storage or transmission is completely secure. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately at privacy@reputation-experts.co.uk.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">10. Cookies &amp; Tracking Technologies</h2>
              <p>
                Our Site uses cookies and similar technologies to enhance your browsing experience and to collect information about how you use our Site.
              </p>
              <p className="mt-2">
                <strong>Strictly necessary cookies:</strong> Required for the Site to function properly. These cannot be disabled. <strong>Analytics cookies:</strong> Help us understand how visitors interact with the Site by collecting and reporting information anonymously. <strong>Functional cookies:</strong> Enable enhanced functionality and personalisation, such as remembering your preferences.
              </p>
              <p className="mt-2">
                You can manage your cookie preferences through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our Site.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">11. Your Privacy Rights</h2>
              <p>
                Under the UK GDPR, you have the following rights in relation to your personal data: the right of access to request a copy of the personal data we hold about you; the right to rectification to correct any inaccurate or incomplete data; the right to erasure to request deletion of your personal data, subject to certain legal exceptions; the right to restrict processing in certain circumstances; the right to data portability to request transfer of your data in a structured, commonly used, machine-readable format; the right to object to processing where we rely on legitimate interests; and the right to withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal.
              </p>
              <p className="mt-2">
                To exercise any of these rights, please email us at privacy@reputation-experts.co.uk. We will respond to your request within one month. We may ask you to verify your identity before processing your request.
              </p>
              <p className="mt-2">
                If you are not satisfied with how we handle your request, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">12. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed at individuals under the age of 18, and we do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">13. Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites and services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We recommend that you review the privacy policy of every site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">14. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically. Your continued use of the Site or our services after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f0f0f] font-semibold text-[18px] mb-3">15. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="mt-2">
                Reputation Experts Ltd, 167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom.
              </p>
              <p className="mt-1">
                Email: privacy@reputation-experts.co.uk
              </p>
              <p className="mt-1">
                General enquiries: info@reputation-experts.co.uk
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
