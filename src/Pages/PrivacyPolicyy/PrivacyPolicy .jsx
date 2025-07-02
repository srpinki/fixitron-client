import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At Fixitron, your privacy is very important to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to keep it safe.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Personal Info:</strong> Name, email address, phone number (if provided).</li>
          <li><strong>Authentication Data:</strong> Sign-in details via Firebase (email/password or social logins).</li>
          <li><strong>Usage Data:</strong> Services browsed, booked, and interaction history.</li>
          <li><strong>Device Info:</strong> Browser type, IP address, and access times for security and analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>To create and manage your account.</li>
          <li>To provide, personalize, and improve our services.</li>
          <li>To connect users with service providers securely.</li>
          <li>To send booking confirmations, alerts, or important updates.</li>
          <li>To analyze usage and improve performance (using tools like Firebase Analytics).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Storage and Security</h2>
        <p className="mb-4">
          Your data is securely stored using Firebase Authentication and MongoDB. We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell or rent your personal information. Your data is only shared:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>With service providers you choose to book or communicate with.</li>
          <li>When required by law or to comply with legal processes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Cookies and Tracking</h2>
        <p className="mb-4">
          Fixitron may use cookies or similar technologies to enhance your browsing experience. You can manage cookie settings through your browser.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information at any time. Please contact us at <a href="mailto:support@fixitron.com" className="text-blue-600 underline">support@fixitron.com</a> for requests related to your data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this policy, please contact us at: <br />
          <strong>Email:</strong> <a href="mailto:support@fixitron.com" className="text-blue-600 underline">support@fixitron.com</a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
