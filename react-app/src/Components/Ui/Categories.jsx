import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Top Deals", image: "/images/categories/top-deals.jpg" },
  {
    name: "Tech Week | Phone Deals",
    image: "/images/categories/phone-deals.jpg",
  },
  {
    name: "Mobile Accessories",
    image: "/images/categories/mobile-accessories.jpg",
  },
  { name: "Tech Week | TV Deals", image: "/images/categories/tv-deals.jpg" },
  { name: "Sound System Deals", image: "/images/categories/sound-systems.jpg" },
  {
    name: "Large Appliances",
    image: "/images/categories/large-appliances.jpg",
  },
  {
    name: "Small Appliances",
    image: "/images/categories/small-appliances.jpg",
  },
  { name: "Tech Week | Computing", image: "/images/categories/computing.jpg" },
  { name: "Sport and Fitness", image: "/images/categories/sports.jpg" },
  { name: "Beauty Tools", image: "/images/categories/beauty-tools.jpg" },
  { name: "Skincare Products", image: "/images/categories/skincare.jpg" },
  { name: "Kitchen and Dining", image: "/images/categories/kitchen.jpg" },
  { name: "Men's Fashion", image: "/images/categories/mens-fashion.jpg" },
  { name: "Women's Fashion", image: "/images/categories/womens-fashion.jpg" },
  { name: "More Deals to Browse", image: "/images/categories/more-deals.jpg" },
  { name: "Grocery Shopping", image: "/images/categories/grocery.jpg" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer transition hover:scale-105"
            onClick={() =>
              navigate(`/category/${encodeURIComponent(category.name)}`)
            }
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-cover mb-2 rounded-md"
            />
            <p className="text-sm font-semibold text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
