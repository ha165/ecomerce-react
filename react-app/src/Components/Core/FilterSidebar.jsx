import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';

const FiltersSidebar = ({ 
  categories, 
  activeCategory, 
  onSelectCategory,
  priceRange,
  onPriceChange,
  onResetFilters
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="hidden lg:block w-72 pr-8 flex-shrink-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Filters</h3>
        {activeCategory && (
          <button 
            onClick={onResetFilters}
            className="flex items-center text-sm text-orange-600 hover:text-orange-800"
          >
            <FiX className="mr-1" />
            Reset
          </button>
        )}
      </div>

      {/* Categories Filter */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('categories')}
        >
          <h4 className="font-medium text-gray-900">Categories</h4>
          {expandedSections.categories ? (
            <FiChevronUp className="text-gray-500" />
          ) : (
            <FiChevronDown className="text-gray-500" />
          )}
        </div>
        
        {expandedSections.categories && (
          <ul className="mt-4 space-y-2">
            <li>
              <button
                onClick={() => onSelectCategory(null)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  !activeCategory 
                    ? 'bg-orange-100 text-orange-700 font-medium' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                All Categories
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => onSelectCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-orange-100 text-orange-700 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.name} 
                  {category.count && (
                    <span className="text-gray-500 text-sm ml-2">
                      ({category.count})
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('price')}
        >
          <h4 className="font-medium text-gray-900">Price Range</h4>
          {expandedSections.price ? (
            <FiChevronUp className="text-gray-500" />
          ) : (
            <FiChevronDown className="text-gray-500" />
          )}
        </div>
        
        {expandedSections.price && (
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">
                Ksh {priceRange.min.toLocaleString()}
              </span>
              <span className="text-sm text-gray-600">
                Ksh {priceRange.max.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={priceRange.current}
              onChange={onPriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Additional filters can be added here */}
    </div>
  );
};

export default FiltersSidebar;