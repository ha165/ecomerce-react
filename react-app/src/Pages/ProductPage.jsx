import ProductList from "../Components/Core/ProductList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const location = useLocation();
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // Extract category from URL query params
    const params = new URLSearchParams(location.search);
    const urlCategory = params.get("category");
    if (urlCategory) {
      setCategory(urlCategory);
    }
  }, [location.search]);

  return (
    <div className="py-8">
      <ProductList category={category} showFilters={true} />
    </div>
  );
};

export default ProductsPage;
