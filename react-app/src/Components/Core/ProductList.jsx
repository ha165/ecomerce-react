import ProductCard from "./ProductCard";
import products from "../../data/product";
import { Link } from "react-router-dom";

const ProductList = ({ category, limit }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  // Apply the limit if provided
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">
          {category ? category.replace(/-/g, " ") : "All Products"}
        </h1>
        {limit && (
          <Link
            to={`/products?category=${category}`}
            className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
          >
            View All
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
