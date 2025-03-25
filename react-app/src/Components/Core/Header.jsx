import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FiShoppingCart, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("user"));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-gray-800"
          : "bg-orange-600 text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span
              className={`${isScrolled ? "text-orange-600" : "text-white"}`}
            >
              Online
            </span>
            <span className="text-white bg-orange-600 px-2 py-1 rounded ml-1">
              Ecom
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-6"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className={`w-full py-2 px-4 pr-10 rounded-full focus:outline-none ${
                  isScrolled
                    ? "border border-gray-300"
                    : "border border-orange-500"
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                  isScrolled ? "text-orange-600" : "text-orange-500"
                }`}
              >
                <FaSearch />
              </button>
            </div>
          </form>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 md:space-x-6">
            {/* Search Icon - Mobile */}
            <button
              className="md:hidden p-2"
              onClick={() =>
                document
                  .getElementById("mobile-search")
                  .classList.toggle("hidden")
              }
            >
              <FaSearch
                className={`h-5 w-5 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            </button>

            <Link
              to="/cart"
              className="relative p-2 hover:bg-orange-100 hover:bg-opacity-20 rounded-full transition-colors"
            >
              <FiShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  className="p-2 hover:bg-orange-100 hover:bg-opacity-20 rounded-full transition-colors"
                >
                  <FiUser className="h-6 w-6" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center space-x-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors"
                >
                  <FiLogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition-colors"
              >
                <FiLogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile Search - Hidden by default */}
        <form
          id="mobile-search"
          onSubmit={handleSearch}
          className="hidden md:hidden my-3"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-600"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
