import { useState, useEffect } from "react";

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newMethod, setNewMethod] = useState("");

  useEffect(() => {
    const savedMethods =
      JSON.parse(localStorage.getItem("paymentMethods")) || [];
    setPaymentMethods(savedMethods);
  }, []);

  const addPaymentMethod = () => {
    if (!newMethod) return;
    const updatedMethods = [...paymentMethods, newMethod];
    setPaymentMethods(updatedMethods);
    localStorage.setItem("paymentMethods", JSON.stringify(updatedMethods));
    setNewMethod("");
  };

  const removePaymentMethod = (index) => {
    const updatedMethods = paymentMethods.filter((_, i) => i !== index);
    setPaymentMethods(updatedMethods);
    localStorage.setItem("paymentMethods", JSON.stringify(updatedMethods));
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Manage Payment Methods</h1>

      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={newMethod}
          onChange={(e) => setNewMethod(e.target.value)}
          placeholder="New Payment Method (e.g., Mpesa, Visa, PayPal)"
          className="p-2 border rounded w-full mb-3"
        />
        <button
          onClick={addPaymentMethod}
          className="bg-green-500 text-white px-6 py-2 rounded w-full"
        >
          Add Payment Method
        </button>

        {paymentMethods.length > 0 && (
          <ul className="mt-4 border p-4 rounded">
            {paymentMethods.map((method, index) => (
              <li key={index} className="flex justify-between border-b p-2">
                {method}
                <button
                  onClick={() => removePaymentMethod(index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
