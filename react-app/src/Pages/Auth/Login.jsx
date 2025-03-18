import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) return alert("Enter an email to log in");
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/account");
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-3"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
