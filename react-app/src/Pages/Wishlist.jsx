import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="text-center p-10 text-gray-600">
        Your wishlist is empty.{" "}
        <Link to="/" className="text-blue-500">
          Start adding products
        </Link>
        .
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border p-4 rounded-lg mb-2"
        >
          <span>
            {item.name} - Ksh {item.price.toLocaleString()}
          </span>
          <button
            onClick={() => removeFromWishlist(item.id)}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
