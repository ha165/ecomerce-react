import React from "react";
import Carousel from "../Components/Ui/Carousel";
import ProductList from "../Components/Core/ProductList";

const SECTIONS = [
  {
    title: "Tech Week | Top Picks for You",
    category: "top-picks",
    bgColor: "bg-gradient-to-r from-blue-50 to-purple-50",
  },
  {
    title: "Top Selling Items",
    category: "top-selling",
    bgColor: "bg-gradient-to-r from-orange-50 to-yellow-50",
  },
  {
    title: "Your Recent Finds",
    category: "recent-finds",
    bgColor: "bg-gradient-to-r from-green-50 to-teal-50",
  },
  {
    title: "Tech Week | Phone Deals",
    category: "phone-deals",
    bgColor: "bg-gradient-to-r from-red-50 to-pink-50",
  },
  {
    title: "Tech Week | Mobile Accessories",
    category: "mobile-accessories",
    bgColor: "bg-gradient-to-r from-indigo-50 to-blue-50",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Carousel Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Carousel />
      </div>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Welcome to Online Ecom
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Discover amazing deals on all your favorite tech products!
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105">
              Shop Now
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {["Phones", "Laptops", "Accessories", "Smart Home"].map(
            (category) => (
              <div
                key={category}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="bg-white p-6 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 mb-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition duration-300">
                    {category}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Product Sections */}
      {SECTIONS.map((section, index) => (
        <section key={index} className={`${section.bgColor} py-12`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {section.title}
              </h2>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
              >
                View all
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <ProductList category={section.category} />
          </div>
        </section>
      ))}

      {/* Newsletter CTA */}
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for the latest deals and tech news
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-md font-medium transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
