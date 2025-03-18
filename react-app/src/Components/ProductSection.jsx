import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductSection({ title, products }) {
  const containerRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction) => {
    const container = containerRef.current
    const scrollAmount = 300
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
    }
    setScrollPosition(container.scrollLeft)
  }

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <Link to="#" className="text-orange-500 hover:underline">See All</Link>
      </div>
      
      <div className="relative">
        <div className="flex gap-4 overflow-x-hidden scroll-smooth hide-scrollbar" ref={containerRef}>
          {products.map(product => (
            <Link 
              to={`/product/${product.id}`}
              key={product.id} 
              className="min-w-[250px] bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {product.discount && (
                <div className="absolute bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                  {product.discount}% OFF
                </div>
              )}
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold mb-2 truncate">{product.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-orange-500 font-bold">ksh{product.price.toFixed(2)}</p>
                {product.originalPrice && (
                  <p className="text-gray-400 line-through text-sm">ksh{product.originalPrice.toFixed(2)}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {scrollPosition > 0 && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}