import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Mpesa",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.phone || !form.address) {
      alert("Please fill in all fields");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      ...form,
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 max-w-lg mx-auto"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="Mpesa">Mpesa</option>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
