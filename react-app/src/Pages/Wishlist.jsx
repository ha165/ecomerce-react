import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  TrashIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <HeartIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            Your wishlist is empty
          </h3>
          <p className="mt-1 text-gray-500">
            Save your favorite items to view them later
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Wishlist
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
            for later
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image || "https://via.placeholder.com/300"}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-200"
                  title="Remove from wishlist"
                >
                  <HeartIconSolid className="h-6 w-6 text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-orange-600 font-semibold">
                      Ksh {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Remove
                  </button>
                  <button className="flex items-center px-3 py-2 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition duration-200">
                    <ShoppingCartIcon className="h-4 w-4 mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
