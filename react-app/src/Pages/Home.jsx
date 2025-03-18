import { useState } from "react";
import ProductSection from "../components/ProductSection";
import { searchProducts } from "../utils/searchProduct";
import { products } from "../data/product";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    "Top Deals",
    "Tech Week | Phone Deals",
    "Mobile Accessories",
    "Tech Week | TV Deals",
    "Sound System Deals",
    "Large Appliances",
    "Small Appliances",
    "Tech Week | Computing",
    "Sport and Fitness",
    "Beauty Tools",
    "Skincare Products",
    "Kitchen and Dining",
    "Men's Fashion",
    "Women's Fashion",
    "More Deals to Browse",
    "Grocery Shopping",
  ];

  // Group products by category
  const productsByCategory = sections.reduce((acc, category) => {
    acc[category] = products.filter((product) => product.category === category);
    return acc;
  }, {});

  // Filter products based on search query
  const filteredProducts = searchProducts(products, searchQuery);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Show search results if there's a search query */}
      {searchQuery && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Search Results for "{searchQuery}"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductSection
                  key={product.id}
                  title={product.name}
                  products={[product]}
                />
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      )}

      {/* Show regular sections when there's no search query */}
      {!searchQuery && (
        <>
          <div className="mb-8 bg-white p-4 rounded-lg shadow">
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              Hero Carousel Placeholder
            </div>
          </div>

          {sections.map(
            (section, index) =>
              productsByCategory[section].length > 0 && (
                <ProductSection
                  key={index}
                  title={section}
                  products={productsByCategory[section]}
                />
              )
          )}
        </>
      )}
    </div>
  );
}
