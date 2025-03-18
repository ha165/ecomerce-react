import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
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
    </div>
  );
};

export default ProductCard;
