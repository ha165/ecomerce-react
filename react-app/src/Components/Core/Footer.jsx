import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Online Ecom</h3>
            <p className="text-gray-400">
              Your one-stop shop for the latest tech products and accessories at
              competitive prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="/new-arrivals"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="/deals"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Featured Deals
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdLocationOn className="h-5 w-5 mt-0.5 text-gray-400" />
                <span className="text-gray-400">
                  123 Tech Street, Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+254 700 123456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">info@onlineecom.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Online Ecom. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-4 text-center">
            Prices and availability are subject to change. All trademarks are
            the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
