import { useState, useEffect } from "react";

const Account = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user")) || {};
    setUser(savedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account details updated!");
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>

      <div className="max-w-md mx-auto">
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="p-2 border rounded w-full mb-3"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded w-full mb-3"
        />
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 border rounded w-full mb-3"
        />

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded w-full"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Account;
