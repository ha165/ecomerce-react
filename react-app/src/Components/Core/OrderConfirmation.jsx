import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderConfirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been successfully placed. You will receive an email
          confirmation shortly.
        </p>
        <p className="text-gray-600">Redirecting to homepage in 5 seconds...</p>
      </div>
    </div>
  );
}
