import { useState } from 'react'
import Header from '../components/Header'
import ProductSection from '../components/ProductSection'
import { searchProducts } from '../utils/searchProduct'
import { products } from '../data/product'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const sections = [
    'Top Deals',
    'Tech Week | Phone Deals',
    'Mobile Accessories',
    'Tech Week | TV Deals',
    'Sound System Deals',
    'Large Appliances',
    'Small Appliances',
    'Tech Week | Computing',
    'Sport and Fitness',
    'Beauty Tools',
    'Skincare Products',
    'Kitchen and Dining',
    "Men's Fashion",
    "Women's Fashion",
    'More Deals to Browse',
    'Grocery Shopping',
  ]

  // Group products by category
  const productsByCategory = sections.reduce((acc, category) => {
    acc[category] = products.filter(product => product.category === category)
    return acc
  }, {})

  // Filter products based on search query
  const filteredProducts = searchProducts(products, searchQuery)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <nav className="bg-orange-500 text-white">
        <div className="container mx-auto px-4 py-2 flex gap-6">
          <a href="#" className="hover:bg-orange-600 px-3 py-1 rounded">All Categories</a>
          <a href="#" className="hover:bg-orange-600 px-3 py-1 rounded">Today's Deals</a>
          <a href="#" className="hover:bg-orange-600 px-3 py-1 rounded">Electronics</a>
          <a href="#" className="hover:bg-orange-600 px-3 py-1 rounded">Fashion</a>
          <a href="#" className="hover:bg-orange-600 px-3 py-1 rounded">Home & Office</a>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-6">
        {/* Show search results if there's a search query */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
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

            {sections.map((section, index) => (
              productsByCategory[section].length > 0 && (
                <ProductSection
                  key={index}
                  title={section}
                  products={productsByCategory[section]}
                />
              )
            ))}
          </>
        )}
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About online Ecom</h3>
              <p className="text-gray-400">Your number one online shopping destination in Nigeria.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Return Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © 2023 online Ecom Clone. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}