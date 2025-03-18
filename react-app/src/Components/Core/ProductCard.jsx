import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const addToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.find((item) => item.id === product.id)) {
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]));
      alert("Added to Wishlist!");
    } else {
      alert("Already in Wishlist!");
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white w-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-orange-500 font-bold">
        Ksh {product.price.toLocaleString()}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="block mt-2 bg-orange-500 text-white text-center py-2 rounded"
      >
        View Product
      </Link>
      <button
        onClick={addToWishlist}
        className="bg-yellow-500 text-white px-4 py-1 rounded mt-2 w-full"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductCard;
