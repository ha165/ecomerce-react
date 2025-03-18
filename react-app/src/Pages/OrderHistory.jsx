import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="text-center p-10 text-gray-600">
        No past orders found.{" "}
        <Link to="/" className="text-blue-500">
          Shop now
        </Link>
        .
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>
      {orders.map((order) => (
        <div key={order.id} className="border p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">Order ID: {order.id}</h2>
          <p>
            <strong>Total:</strong> Ksh {order.total.toLocaleString()}
          </p>
          <p>
            <strong>Payment:</strong> {order.paymentMethod}
          </p>
          <p>
            <strong>Date:</strong> {new Date(order.id).toLocaleDateString()}
          </p>
          <h3 className="mt-2 font-semibold">Items Ordered:</h3>
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between border-b p-2">
              <span>{item.name}</span>
              <span>
                Ksh {item.price.toLocaleString()} x {item.quantity}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
