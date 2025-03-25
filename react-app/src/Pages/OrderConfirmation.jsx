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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No recent order found
          </h3>
          <p className="mt-1 text-gray-500">
            It seems you haven't placed any orders recently.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white bg-opacity-20 mb-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-white">
              Order Placed Successfully!
            </h1>
            <p className="mt-2 text-green-100">
              Thank you for shopping with us. Your order #{order.id} has been
              confirmed.
            </p>
          </div>

          {/* Order Details */}
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Customer Information
                </h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-gray-700">Name:</span>{" "}
                    {order.fullName}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Email:</span>{" "}
                    {order.email}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Phone:</span>{" "}
                    {order.phone}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">
                      Payment Method:
                    </span>{" "}
                    <span className="capitalize">{order.paymentMethod}</span>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Delivery Address
                </h2>
                <p className="text-gray-700">{order.address}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="mt-10">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="border-t border-gray-200">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="py-4 flex items-center justify-between border-b border-gray-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Ksh {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="mt-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>Ksh {order.total.toLocaleString()}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 mt-3 pt-3 border-t border-gray-200">
                  <p>Total</p>
                  <p>Ksh {order.total.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-sm text-gray-500 mb-4">
              We've sent a confirmation email to {order.email}
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Continue Shopping
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
