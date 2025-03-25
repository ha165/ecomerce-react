import { Link } from "react-router-dom";
import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if product is in wishlist on component mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [product.id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isInWishlist) {
      const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
    } else {
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]));
      setIsInWishlist(true);
    }
  };

  return (
    <div
      className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-colors duration-200 ${
          isInWishlist
            ? "text-red-500 bg-white/90"
            : "text-gray-400 bg-white/80 hover:text-red-500"
        } shadow-sm`}
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isInWishlist ? (
          <HeartIconSolid className="h-6 w-6" />
        ) : (
          <HeartIcon className="h-6 w-6" />
        )}
      </button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* Quick View Overlay */}
        {isHovered && (
          <Link
            to={`/product/${product.id}`}
            className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300"
          >
            <div className="bg-white/90 text-orange-600 rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200">
              <EyeIcon className="h-6 w-6" />
            </div>
          </Link>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 hover:text-orange-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-orange-600">
            Ksh {product.price.toLocaleString()}
          </p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              Ksh {product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="mt-2 flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-current"
                      : "stroke-current fill-transparent"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-4 space-y-2">
          <Link
            to={`/product/${product.id}`}
            className="block w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white text-center rounded-md font-medium transition-colors duration-200"
          >
            View Details
          </Link>
          <button
            onClick={toggleWishlist}
            className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
              isInWishlist
                ? "bg-gray-100 text-red-600 hover:bg-gray-200"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {isInWishlist ? (
              <>
                <HeartIconSolid className="h-5 w-5" />
                <span>Saved</span>
              </>
            ) : (
              <>
                <HeartIcon className="h-5 w-5" />
                <span>Save</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Badges */}
      {product.isNew && (
        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </div>
      )}
      {product.discount && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{product.discount}%
        </div>
      )}
    </div>
  );
};

// StarIcon component for ratings
const StarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default ProductCard;
