import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center p-10 text-red-500 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      <div className="container mx-auto px-5">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 bg-gray-50 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                <span className="text-orange-500 text-2xl font-semibold">
                  Ksh {product.price.toLocaleString()}
                </span>
                <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  In Stock
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                This is a detailed description of {product.name}. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua.
              </p>
              
              <div className="flex space-x-4">
                <button
                  className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex items-center"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart 
                  <span className="ml-2">🛒</span>
                </button>
                
                <button
                  className="mt-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-medium px-8 py-3 rounded-full shadow-md transition duration-300"
                >
                  Buy Now
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500">Product Details</h3>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• High-quality materials</li>
                  <li>• Eco-friendly packaging</li>
                  <li>• 1-year warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;