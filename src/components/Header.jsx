import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex gap-2 items-center pl-5 h-9">
              <img
                className="     w-full h-full object-cover"
                src="../src/assets/logo.svg"
                alt=""
              />
              <p className="text-white ">QuickKart</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 text-gray-400" />
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Link to="/cart">
                <FiShoppingCart className="w-6 h-6" />
              </Link>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <a
              href="/"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/products"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="/about"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </a>
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
