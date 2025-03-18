export function searchProducts(products, query) {
    if (!query) return products
  
    const lowerCaseQuery = query.toLowerCase()
    
    return products.filter(product => {
      return (
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        (product.description && product.description.toLowerCase().includes(lowerCaseQuery)) ||
        (product.category && product.category.toLowerCase().includes(lowerCaseQuery))
      )
    })
  }