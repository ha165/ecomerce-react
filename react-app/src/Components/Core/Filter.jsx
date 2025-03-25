import { useState } from "react";

const Filters = ({ categories, activeCategory, onSelectCategory, priceRange, onPriceChange }) => {
  const [priceMin, priceMax] = priceRange;
  const [currentPrice, setCurrentPrice] = useState(priceMax);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onSelectCategory("all")}
              className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === "all" ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-50'}`}
            >
              All Products
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onSelectCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === category ? 'bg-orange-100 text-orange-700' : 'hover:bg-gray-50'}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
        <div className="px-2">
          <input
            type="range"
            min={priceMin}
            max={priceMax}
            value={currentPrice}
            onChange={(e) => {
              setCurrentPrice(e.target.value);
              onPriceChange([priceMin, e.target.value]);
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Ksh {priceMin}</span>
            <span>Ksh {currentPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;