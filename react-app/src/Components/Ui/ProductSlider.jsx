import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductSlider = ({ title, products, category }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <Link
          to={`/products?category=${category}`}
          className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
        >
          View All
          <FaChevronRight className="ml-1" size={14} />
        </Link>
      </div>

      {/* Product Carousel */}
      <div className="relative">
        {/* Navigation Arrows */}
        {products.length > itemsPerPage && (
          <>
            <button
              onClick={handlePrev}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors ${
                startIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-md"
              }`}
              disabled={startIndex === 0}
              aria-label="Previous products"
            >
              <FaChevronLeft className="text-gray-700" size={18} />
            </button>
            <button
              onClick={handleNext}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors ${
                startIndex + itemsPerPage >= products.length
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-md"
              }`}
              disabled={startIndex + itemsPerPage >= products.length}
              aria-label="Next products"
            >
              <FaChevronRight className="text-gray-700" size={18} />
            </button>
          </>
        )}

        {/* Product Grid */}
        <div className="overflow-hidden px-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {visibleProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group block"
              >
                <div className="bg-gray-50 rounded-lg p-3 aspect-square flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-orange-600 font-bold">
                    Ksh {product.price.toLocaleString()}
                  </p>
                  {product.originalPrice && (
                    <p className="text-xs text-gray-500 line-through">
                      Ksh {product.originalPrice.toLocaleString()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
