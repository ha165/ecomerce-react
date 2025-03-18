import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          online Ecom
        </Link>

        <form onSubmit={handleSearch} className="flex-1 relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        <div className="flex gap-4">
          <Link
            to="/account"
            className="flex items-center gap-1 text-gray-700 hover:text-orange-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Account
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-1 text-gray-700 hover:text-orange-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart
          </Link>
        </div>
      </div>

      <nav className="bg-orange-500 text-white">
        <div className="container mx-auto px-4 py-2 flex gap-6">
          <Link
            to="/categories"
            className="hover:bg-orange-600 px-3 py-1 rounded"
          >
            All Categories
          </Link>
          <Link to="/deals" className="hover:bg-orange-600 px-3 py-1 rounded">
            Today's Deals
          </Link>
          <Link
            to="/electronics"
            className="hover:bg-orange-600 px-3 py-1 rounded"
          >
            Electronics
          </Link>
          <Link to="/fashion" className="hover:bg-orange-600 px-3 py-1 rounded">
            Fashion
          </Link>
          <Link
            to="/home-office"
            className="hover:bg-orange-600 px-3 py-1 rounded"
          >
            Home & Office
          </Link>
        </div>
      </nav>
    </header>
  );
}
