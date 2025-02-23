import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <p className="text-gray-600 text-lg mb-6">
          Welcome to <span className="font-bold text-blue-600">QuickKart</span>.
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and protect your personal information when you
          use our website and services.
        </p>

        {/* Information We Collect */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              delivery address.
            </li>
            <li>
              <strong>Payment Information:</strong> Credit/debit card details
              (processed securely).
            </li>
            <li>
              <strong>Usage Data:</strong> Website activity, order history,
              preferences.
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type,
              device type.
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>To process orders and provide fast deliveries.</li>
            <li>To improve user experience and personalize recommendations.</li>
            <li>To ensure security and prevent fraudulent transactions.</li>
            <li>To send promotional offers and updates (optional).</li>
          </ul>
        </div>

        {/* Information Sharing */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Information Sharing & Security
          </h2>
          <p className="text-gray-600">
            We do not sell or rent your personal data. Your information is
            shared only with trusted partners for payment processing, delivery
            services, and analytics.
          </p>
        </div>

        {/* Cookies & Tracking */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-600">
            We use cookies to enhance user experience, analyze traffic, and
            remember preferences. You can disable cookies in your browser
            settings.
          </p>
        </div>

        {/* User Choices */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Your Choices & Rights
          </h2>
          <p className="text-gray-600">
            You can update your information, opt out of marketing emails, or
            request data deletion by contacting us at{" "}
            <span className="text-blue-600">support@quickkart.com</span>.
          </p>
        </div>

        {/* Updates to Privacy Policy */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Updates to This Policy
          </h2>
          <p className="text-gray-600">
            We may update our Privacy Policy from time to time. Please review
            this page periodically for any changes.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600">📧 Email: gajjewaravi@gmail.com</p>
          <p className="text-gray-600">📞 Phone: +91 9359598808</p>
          <p className="text-gray-600">📍 Address: 123, pune , India</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
