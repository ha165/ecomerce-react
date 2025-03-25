import ProductCard from "./ProductCard";
import products from "../../data/product";

const ProductGrid = ({ category, limit }) => {
  const filteredProducts = products
    .filter(product => category ? product.category === category : true)
    .slice(0, limit);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;