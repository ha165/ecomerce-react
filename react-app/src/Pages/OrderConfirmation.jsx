import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
    if (lastOrder) {
      setOrder(lastOrder);
    }
  }, []);

  if (!order) {
    return (
      <div className="text-center p-10 text-gray-600">
        No recent order found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5 text-center">
      <h1 className="text-3xl font-bold text-green-500">
        Order Placed Successfully 🎉
      </h1>
      <p className="mt-2 text-gray-600">Thank you for shopping with us!</p>

      <div className="mt-4 text-left inline-block">
        <h2 className="text-xl font-semibold">Order Details</h2>
        <p>
          <strong>Order ID:</strong> {order.id}
        </p>
        <p>
          <strong>Name:</strong> {order.fullName}
        </p>
        <p>
          <strong>Email:</strong> {order.email}
        </p>
        <p>
          <strong>Phone:</strong> {order.phone}
        </p>
        <p>
          <strong>Address:</strong> {order.address}
        </p>
        <p>
          <strong>Payment Method:</strong> {order.paymentMethod}
        </p>

        <h2 className="text-xl font-semibold mt-4">Items Ordered</h2>
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <span>{item.name}</span>
            <span>
              Ksh {item.price.toLocaleString()} x {item.quantity}
            </span>
          </div>
        ))}

        <p className="text-xl font-bold mt-4">
          Total: Ksh {order.total.toLocaleString()}
        </p>
      </div>

      <Link
        to="/"
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded inline-block"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
