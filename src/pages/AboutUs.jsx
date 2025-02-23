import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>

        {/* Introduction Section */}
        <p className="text-gray-600 text-lg text-center mb-6">
          Welcome to <span className="font-bold text-blue-600">QuickKart</span>,
          your go-to destination for top-quality products delivered instantly.
          We aim to bring you the best shopping experience with convenience and
          reliability.
        </p>

        {/* Mission and Vision */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to provide high-quality products with **superfast
            delivery**, ensuring customer satisfaction at every step.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600">
            We envision a future where shopping is effortless, accessible, and
            seamless, with doorstep delivery in record time.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Team Member 1 */}
            <div className="bg-gray-50 p-4 rounded-lg text-center shadow">
              <img
                src="../src/assets/Avinash.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">Avinash Gajjewar</h3>
              <p className="text-gray-500">Frontend web Developer</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
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

export default AboutUs;
