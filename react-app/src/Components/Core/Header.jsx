import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Online Ecom
        </Link>
        <nav className="space-x-4">
          <Link to="/cart" className="hover:underline">
            Cart 🛒 ({cart.length})
          </Link>
          <Link to="/account" className="hover:underline">
            Account 👤
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
