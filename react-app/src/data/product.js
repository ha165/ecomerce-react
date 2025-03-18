const products = Array.from({ length: 200 }, (_, i) => {
  const categories = [
    "phone-deals", "top-picks", "mobile-accessories", "top-selling", "recent-finds",
    "laptops", "gaming", "home-appliances", "kitchen-dining", "sports-fitness",
    "beauty-tools", "skincare", "men-fashion", "women-fashion", "grocery","Feature Products"
  ];

  const productNames = [
    "Smartphone", "Laptop", "Headphones", "Gaming Mouse", "Bluetooth Speaker",
    "Smartwatch", "TV 55-inch", "Air Fryer", "Refrigerator", "Microwave Oven",
    "Treadmill", "Dumbbells", "Hair Dryer", "Face Moisturizer", "Running Shoes",
    "Leather Jacket", "Designer Handbag", "Rice Cooker", "Electric Kettle", "Tablet",
  ];

  return {
    id: i + 1,
    name: productNames[i % productNames.length] + " " + (i + 1),
    price: Math.floor(Math.random() * 100000) + 1000, // Random price between 1,000 - 100,000 Ksh
    image: `https://picsum.photos/400/300?random=${i + 1}`, // Randomized image
    category: categories[i % categories.length]
  };
});

export default products;
