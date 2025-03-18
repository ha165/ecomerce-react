import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cart } = useCart();

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
        </nav>
      </div>
    </header>
  );
};

export default Header;
