import React from "react";

const TermsOfService = () => {
  return (
    <section className="bg-base-100 py-12 px-4 md:px-20">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>

        <p className="mb-6">
          Welcome to Fixitron! By using our platform, you agree to the following terms and conditions. Please read them carefully before using our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using Fixitron, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of the Platform</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>You must be at least 18 years old or have legal guardian consent to use Fixitron.</li>
          <li>All information you provide must be accurate and up to date.</li>
          <li>You agree not to misuse the platform for fraudulent, illegal, or harmful purposes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. User Accounts</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your login credentials. Fixitron is not liable for any loss or damage resulting from unauthorized account access.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Service Providers</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Service providers must ensure the accuracy of their service listings.</li>
          <li>Providers are solely responsible for the quality and safety of their services.</li>
          <li>Fixitron does not guarantee any service outcome or user satisfaction.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Bookings and Payments</h2>
        <p className="mb-4">
          Bookings made on Fixitron are subject to availability and provider acceptance. We may use third-party tools or systems to process payments (if applicable).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Content and Reviews</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Users may post reviews, but abusive, false, or defamatory content is prohibited.</li>
          <li>Fixitron reserves the right to remove inappropriate content without notice.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Platform Availability</h2>
        <p className="mb-4">
          We strive to maintain uptime, but we do not guarantee continuous or error-free access. Fixitron may suspend or terminate access for maintenance, updates, or violations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Limitation of Liability</h2>
        <p className="mb-4">
          Fixitron is not liable for any indirect, incidental, or consequential damages resulting from use of the platform or services provided by third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Modifications</h2>
        <p className="mb-4">
          We may update these Terms of Service from time to time. Continued use of Fixitron after changes constitutes acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p>
          If you have any questions about these terms, please contact us at: <br />
          <strong>Email:</strong> <a href="mailto:support@fixitron.com" className="text-blue-600 underline">support@fixitron.com</a>
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
