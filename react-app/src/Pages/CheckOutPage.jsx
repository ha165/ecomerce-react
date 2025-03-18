import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Mpesa",
  });

  // Load saved addresses and payment methods
  useEffect(() => {
    setAddresses(JSON.parse(localStorage.getItem("addresses")) || []);
    setPaymentMethods(JSON.parse(localStorage.getItem("paymentMethods")) || []);
  }, []);

  // Handle form updates
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle order submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      address: selectedAddress || form.address, // Use saved or new address
      paymentMethod: selectedPayment || form.paymentMethod, // Use saved or new payment
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    // Save order to order history
    const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
    localStorage.setItem(
      "orderHistory",
      JSON.stringify([...orderHistory, order])
    );

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

        {/* Address Selection */}
        <label className="font-semibold">Select Saved Address</label>
        {addresses.length > 0 ? (
          <select
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Use New Address</option>
            {addresses.map((addr, index) => (
              <option key={index} value={addr}>
                {addr}
              </option>
            ))}
          </select>
        ) : (
          <p>No saved addresses. Add one in Address Book.</p>
        )}

        {/* New Address Input */}
        {!selectedAddress && (
          <input
            type="text"
            name="address"
            placeholder="New Delivery Address"
            value={form.address}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        )}

        {/* Payment Method Selection */}
        <label className="font-semibold">Select Payment Method</label>
        {paymentMethods.length > 0 ? (
          <select
            value={selectedPayment}
            onChange={(e) => setSelectedPayment(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Use New Payment Method</option>
            {paymentMethods.map((method, index) => (
              <option key={index} value={method}>
                {method}
              </option>
            ))}
          </select>
        ) : (
          <p>No saved payment methods. Add one in Payment Methods.</p>
        )}

        {/* New Payment Method Input */}
        {!selectedPayment && (
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
        )}

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
