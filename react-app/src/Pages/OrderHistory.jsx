import { useState, useEffect } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>

      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="border p-4 mb-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
            <p>
              <strong>Date:</strong> {order.date}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`px-2 py-1 text-white ${
                  order.status === "Delivered"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              >
                {order.status}
              </span>
            </p>
            <p>
              <strong>Total:</strong> KSH {order.total}
            </p>

            <h3 className="mt-2 font-semibold">Items:</h3>
            <ul className="list-disc pl-5">
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} - {item.quantity} x KSH {item.price}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
