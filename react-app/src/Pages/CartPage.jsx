import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty.{" "}
          <Link to="/" className="text-orange-500">
            Go shopping!
          </Link>
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-orange-500">
                    Ksh {item.price.toLocaleString()} x {item.quantity}
                  </p>
                </div>
              </div>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove ❌
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-xl font-bold">
              Total: Ksh{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </p>
            <Link
              to="/checkout"
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded inline-block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
