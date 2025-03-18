import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center p-10 text-red-500">Product not found</div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-orange-500 text-2xl font-semibold mt-2">
            Ksh {product.price.toLocaleString()}
          </p>
          <p className="mt-4 text-gray-600">
            This is a detailed description of {product.name}.
          </p>
          <button
            className="mt-4 bg-orange-500 text-white px-6 py-2 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
