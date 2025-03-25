import ProductCard from "./ProductCard";
import products from "../../data/product";
import { Link } from "react-router-dom";

const ProductList = ({ category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text font-bold mb-4">
        Onlline Ecom Products 
        <Link to="/products" className="text-blue-500 ml-2 hover:underline">View All</Link>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
