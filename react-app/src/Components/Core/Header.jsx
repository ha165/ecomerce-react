import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Online Ecom
        </Link>

        {/* Search Bar */}
        <div className="flex">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 rounded-l-md border-none outline-none text-black"
          />
          <button className="bg-black px-4 rounded-r-md">🔍</button>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/cart" className="hover:underline">
            Cart 🛒
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
