import React from "react";
import Carousel from "../Components/Ui/Carousel";
import ProductList from "../Components/Core/ProductList";

const SECTIONS = [
  { title: "Tech Week | Top Picks for You", category: "top-picks" },
  { title: "Top Selling Items", category: "top-selling" },
  { title: "Your Recent Finds", category: "recent-finds" },
  { title: "Tech Week | Phone Deals", category: "phone-deals" },
  { title: "Tech Week | Mobile Accessories", category: "mobile-accessories" },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Carousel Section */}
      <div className="w-3/4 mx-auto">
        <Carousel />
      </div>

      {/* Welcome Section */}
      <div className="bg-orange-100 text-center p-6">
        <h1 className="text-3xl font-bold">Welcome to Online Ecom</h1>
        <p className="text-gray-600 mt-2">
          Best prices on all your favorite products!
        </p>
      </div>

      {/* Sections Rendering */}
      {SECTIONS.map((section, index) => (
        <div key={index} className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <ProductList category={section.category} />
        </div>
      ))}
    </div>
  );
};

export default Home;
