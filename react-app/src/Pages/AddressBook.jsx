import { useState, useEffect } from "react";

const AddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");

  useEffect(() => {
    const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(savedAddresses);
  }, []);

  const addAddress = () => {
    if (!newAddress) return;
    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setNewAddress("");
  };

  const removeAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Manage Addresses</h1>

      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          placeholder="New Address"
          className="p-2 border rounded w-full mb-3"
        />
        <button
          onClick={addAddress}
          className="bg-green-500 text-white px-6 py-2 rounded w-full"
        >
          Add Address
        </button>

        {addresses.length > 0 && (
          <ul className="mt-4 border p-4 rounded">
            {addresses.map((address, index) => (
              <li key={index} className="flex justify-between border-b p-2">
                {address}
                <button
                  onClick={() => removeAddress(index)}
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

export default AddressBook;
