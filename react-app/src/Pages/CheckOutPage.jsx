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

  // Calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
      total: cartTotal,
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      address: selectedAddress || form.address,
      paymentMethod: selectedPayment || form.paymentMethod,
      date: new Date().toISOString(),
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Checkout
          </h1>
          <p className="mt-3 text-lg text-gray-500">Complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Order Summary
                </h2>
              </div>
              <div className="px-6 py-4">
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p>Ksh {item.price.toLocaleString()}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>Ksh {cartTotal.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <p>Shipping</p>
                    <p>Calculated at next step</p>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 mt-3 pt-3 border-t border-gray-200">
                    <p>Total</p>
                    <p>Ksh {cartTotal.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Customer Information
                </h2>
              </div>
              <div className="px-6 py-4 space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+254 700 000000"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                </div>

                {/* Address Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address
                  </label>
                  {addresses.length > 0 ? (
                    <>
                      <select
                        value={selectedAddress}
                        onChange={(e) => setSelectedAddress(e.target.value)}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">
                          Select a saved address or enter new one below
                        </option>
                        {addresses.map((addr, index) => (
                          <option key={index} value={addr}>
                            {addr}
                          </option>
                        ))}
                      </select>
                      {!selectedAddress && (
                        <input
                          type="text"
                          name="address"
                          placeholder="Enter new delivery address"
                          value={form.address}
                          onChange={handleChange}
                          className="mt-3 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      )}
                    </>
                  ) : (
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter delivery address"
                      value={form.address}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  )}
                </div>

                {/* Payment Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  {paymentMethods.length > 0 ? (
                    <>
                      <select
                        value={selectedPayment}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select a saved payment method</option>
                        {paymentMethods.map((method, index) => (
                          <option key={index} value={method}>
                            {method}
                          </option>
                        ))}
                      </select>
                      {!selectedPayment && (
                        <select
                          name="paymentMethod"
                          value={form.paymentMethod}
                          onChange={handleChange}
                          className="mt-3 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                          required
                        >
                          <option value="Mpesa">Mpesa</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="PayPal">PayPal</option>
                          <option value="Cash on Delivery">
                            Cash on Delivery
                          </option>
                        </select>
                      )}
                    </>
                  ) : (
                    <select
                      name="paymentMethod"
                      value={form.paymentMethod}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      required
                    >
                      <option value="Mpesa">Mpesa</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-medium text-gray-700"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-orange-600 hover:text-orange-500"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-right">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
