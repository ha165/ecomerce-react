import { useState, useEffect } from "react";

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newMethod, setNewMethod] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const savedMethods =
      JSON.parse(localStorage.getItem("paymentMethods")) || [];
    setPaymentMethods(savedMethods);
  }, []);

  const addPaymentMethod = () => {
    if (!newMethod.trim()) return;
    const updatedMethods = [...paymentMethods, newMethod.trim()];
    setPaymentMethods(updatedMethods);
    localStorage.setItem("paymentMethods", JSON.stringify(updatedMethods));
    setNewMethod("");
  };

  const removePaymentMethod = (index) => {
    const updatedMethods = paymentMethods.filter((_, i) => i !== index);
    setPaymentMethods(updatedMethods);
    localStorage.setItem("paymentMethods", JSON.stringify(updatedMethods));
  };

  const startEditing = (index) => {
    setIsEditing(index);
    setEditValue(paymentMethods[index]);
  };

  const saveEdit = (index) => {
    const updatedMethods = [...paymentMethods];
    updatedMethods[index] = editValue.trim();
    setPaymentMethods(updatedMethods);
    localStorage.setItem("paymentMethods", JSON.stringify(updatedMethods));
    setIsEditing(null);
  };

  const cancelEdit = () => {
    setIsEditing(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Payment Methods
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Manage your saved payment options
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="text"
                value={newMethod}
                onChange={(e) => setNewMethod(e.target.value)}
                placeholder="Enter payment method (e.g., M-Pesa, Visa 4242, PayPal)"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base"
                onKeyPress={(e) => e.key === "Enter" && addPaymentMethod()}
              />
              <button
                onClick={addPaymentMethod}
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Method
              </button>
            </div>

            {paymentMethods.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {paymentMethods.map((method, index) => (
                  <li key={index} className="py-4">
                    {isEditing === index ? (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => saveEdit(index)}
                            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                            {method.startsWith("Mpesa") ||
                            method.startsWith("MPesa") ? (
                              <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                              </svg>
                            ) : method.startsWith("Visa") ||
                              method.startsWith("Mastercard") ? (
                              <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M9.2 9.2h5.6v5.6H9.2V9.2z" />
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-1.5v-1.5H17V17zm0-3h-1.5v-1.5H17V14zm0-3h-1.5V9.5H17V11z" />
                              </svg>
                            ) : method.startsWith("PayPal") ? (
                              <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H8.5v-5H7V8h4c1.66 0 3 1.34 3 3s-1.34 3-3 3h-1v3zm5 0h-1.5v-5H14V8h4v1.5h-2.5v1H17V14h-2v1.5h-1.5V17z" />
                              </svg>
                            ) : (
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="ml-3 text-gray-800 font-medium">
                            {method}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditing(index)}
                            className="text-orange-600 hover:text-orange-800 p-2 rounded-full hover:bg-orange-50"
                            title="Edit"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => removePaymentMethod(index)}
                            className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50"
                            title="Remove"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-12">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No payment methods saved
                </h3>
                <p className="mt-1 text-gray-500">
                  Add your preferred payment methods for faster checkout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
