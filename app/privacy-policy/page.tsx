// ===============================
// PRIVACY POLICY PAGE (page.tsx)
// ===============================

import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: November 28, 2025</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>
          NPK Business Solutions ("Company", "we", "us", "our") is committed to safeguarding your personal information. This Privacy Policy
          explains how we collect, use, disclose, store, and protect information when you interact with our website www.npkbss.in ("Website"
          / "Service").
        </p>
        <p>
          By using the Website, you consent to the data practices described in this Policy. If you do not agree, please discontinue use of
          the Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <h3 className="font-semibold">a. Information You Provide</h3>
        <p>When you submit forms or contact us, we may collect:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Inquiry or message details</li>
        </ul>

        <h3 className="font-semibold pt-2">b. Automatically Collected Data</h3>
        <p>When you visit our Website, we may automatically collect:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address and approximate location</li>
          <li>Browser type, version, and device information</li>
          <li>Pages visited, time spent, click patterns</li>
          <li>Referring URLs and site navigation paths</li>
        </ul>

        <h3 className="font-semibold pt-2">c. Cookies & Tracking Technologies</h3>
        <p>We use cookies, beacons, and similar technologies to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Enhance Website performance</li>
          <li>Remember preferences</li>
          <li>Analyze usage patterns</li>
          <li>Prevent fraudulent activity</li>
        </ul>
        <p>You may disable cookies in your browser settings, but certain features may not work properly.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
        <p>We may use collected information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>To respond to inquiries and provide customer support</li>
          <li>To improve Website performance and user experience</li>
          <li>To monitor security risks and prevent misuse</li>
          <li>To analyze traffic and understand how users interact with the Website</li>
          <li>To send updates or communication when you consent</li>
          <li>To comply with legal or regulatory obligations</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Legal Basis for Processing</h2>
        <p>Depending on applicable law, we may rely on:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your explicit consent</li>
          <li>Legitimate business interests</li>
          <li>Compliance with legal obligations</li>
          <li>Contractual necessity, when applicable</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
        <p>
          We may use trusted third-party vendors for hosting, analytics, communication, and security. These providers may receive certain
          technical information to perform their services but are not permitted to use it for unrelated purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Links to External Sites</h2>
        <p>
          Our Website may contain links to external websites. We do not control or endorse their content, policies, or practices. We are not
          responsible for any damages caused by visiting third-party websites.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Data Sharing & Disclosure</h2>
        <p>We may share information only when necessary:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>With service providers who support Website operations</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights, users, or security</li>
        </ul>
        <p>
          We do <strong>not</strong> sell or rent your personal data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill purposes outlined in this Policy or meet legal requirements. Once
          no longer needed, data is securely deleted or anonymized.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Security Measures</h2>
        <p>
          We implement administrative, technical, and physical safeguards to protect your information. Although we strive for high security,
          no system can guarantee complete protection.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Your Rights</h2>
        <p>Depending on applicable laws, you may:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Request access to your data</li>
          <li>Request updates or corrections</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent</li>
          <li>Request restriction of processing</li>
        </ul>
        <p>To exercise your rights, contact us at support@npkbss.in.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Children's Data</h2>
        <p>Our Website is not intended for individuals under 18. We do not knowingly collect information from minors.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Updates to This Policy</h2>
        <p>We may update this Policy periodically. Changes take effect once posted on this page.</p>
      </section>

      <section className="space-y-3 pb-10">
        <h2 className="text-xl font-semibold">13. Contact Us</h2>
        <p>If you have questions regarding this Privacy Policy, contact us:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email: support@npkbss.in</li>
          <li>Address: NPK Business Solutions, Hulimavu, Bangalore-560076</li>
        </ul>
      </section>
    </div>
  );
}

// ===============================
// TERMS OF SERVICE PAGE (page.tsx)
// ===============================

export default function TermsOfServicePage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      <p className="text-sm text-gray-500">Last updated: November 28, 2025</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>
          These Terms govern your access to and use of www.npkbss.in ("Service" / "Website") operated by NPK Business Solutions ("Company",
          "we", "us", "our"). By using the Website, you agree to these Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Definitions</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Company:</strong> NPK Business Solutions, Bangalore, Karnataka.
          </li>
          <li>
            <strong>Service / Website:</strong> www.npkbss.in.
          </li>
          <li>
            <strong>You:</strong> anyone accessing the Website.
          </li>
          <li>
            <strong>Device:</strong> any device capable of accessing the Service.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Acceptance</h2>
        <p>
          By using the Website, you confirm that you are at least 18 years old and agree to comply with these Terms and our Privacy Policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Allowed & Restricted Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Do not use the Website for unlawful activities.</li>
          <li>Do not attempt to disrupt or harm the Service.</li>
          <li>Do not copy or reuse content without permission.</li>
          <li>Do not attempt unauthorized access to systems or data.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Third-Party Links</h2>
        <p>
          The Website may contain links to third-party sites. We do not control or endorse their content and are not responsible for damages
          or losses caused by visiting them.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Termination</h2>
        <p>We may terminate or suspend access to the Website immediately if you violate these Terms or engage in harmful behavior.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, the Company is not liable for indirect, incidental, or consequential damages, including
          loss of profits, data, or business interruption.
        </p>
        <p>If no purchases were made through the Service, our total liability shall not exceed 100 USD.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. "AS IS" Disclaimer</h2>
        <p>
          The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee uninterrupted, secure, or
          error‑free operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Governing Law</h2>
        <p>These Terms are governed by the laws of Karnataka, India.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Dispute Resolution</h2>
        <p>You agree to attempt resolving any disputes informally by contacting us before pursuing legal action.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Severability</h2>
        <p>If any part of these Terms is found invalid, the remaining sections remain fully effective.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Changes to Terms</h2>
        <p>We may update these Terms at any time. Continued use of the Website indicates acceptance of the updated Terms.</p>
      </section>

      <section className="space-y-3 pb-10">
        <h2 className="text-xl font-semibold">13. Contact Us</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email: support@npkbss.in</li>
          <li>Address: NPK Business Solutions, Hulimavu, Bangalore-560076</li>
        </ul>
      </section>
    </div>
  );
}
