import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About online Ecom</h3>
            <p className="text-gray-400">
              Your number one online shopping destination in Nigeria.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/faq" className="hover:text-orange-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-orange-500">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/terms" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          © 2023 online Ecom Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
