import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductSlider = ({ title, products }) => {
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

  return (
    <div className="p-5 bg-white shadow-md mb-6">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-blue-500 hover:underline">See All</button>
      </div>

      {/* Product List with Navigation Arrows */}
      <div className="relative">
        <button
          onClick={handlePrev}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={startIndex === 0}
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="overflow-hidden">
          <div className="flex space-x-4">
            {products
              .slice(startIndex, startIndex + itemsPerPage)
              .map((product) => (
                <div key={product.id} className="border p-4 rounded-md w-40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-24 object-cover"
                  />
                  <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                  <p className="text-red-500 font-bold">KSH {product.price}</p>
                </div>
              ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md ${
            startIndex + itemsPerPage >= products.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={startIndex + itemsPerPage >= products.length}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
