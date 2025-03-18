import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { products } from '../data/product'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id))
    setProduct(foundProduct)
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'}`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.discount && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">
                    {product.discount}% OFF
                  </div>
                )}
                <p className="text-2xl font-bold text-orange-500">
                  ksh{product.price.toFixed(2)}
                </p>
                {product.originalPrice && (
                  <p className="text-gray-400 line-through">
                    ksh{product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity:</label>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border rounded-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button 
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors mb-4"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              {/* Product Description */}
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-bold mb-2">Specifications</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}