// ===============================
// TERMS OF SERVICE PAGE
// ===============================

export const metadata = {
  title: 'Terms of Service | NPK Business Solutions',
  description: 'Terms and conditions governing the use of the NPK Business Solutions website and services.',
};

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
        <p>Our total liability shall be limited to the maximum extent permitted by applicable law.</p>
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
