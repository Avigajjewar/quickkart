const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-8 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  className="hover:text-white transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Connect With Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} QuickKart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
