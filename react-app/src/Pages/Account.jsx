import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      toast.error(error.message);
      if (error.response?.status === 401) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/api/user", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          throw new Error(Object.values(data.errors).join("\n"));
        }
        throw new Error(data.message || "Failed to update profile");
      }

      toast.success("Profile updated successfully!");
      setIsEditing(false);
      // Update local storage if needed
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = () => {
    navigate("/change-password");
  };

  const handleDeleteAccount = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      return;
    }

    const token = localStorage.getItem("auth_token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/api/user", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete account");
      }

      toast.success("Account deleted successfully");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Account Settings
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Manage your personal information
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-4 py-3 border ${
                    isEditing
                      ? "border-gray-300"
                      : "border-transparent bg-gray-50"
                  } rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  disabled
                  className="mt-1 block w-full px-4 py-3 border border-transparent bg-gray-50 rounded-md shadow-sm text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  placeholder="254700000000"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-4 py-3 border ${
                    isEditing
                      ? "border-gray-300"
                      : "border-transparent bg-gray-50"
                  } rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base`}
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={user.address || ""}
                  onChange={handleChange}
                  placeholder="123 Main St, Nairobi"
                  disabled={!isEditing}
                  className={`mt-1 block w-full px-4 py-3 border ${
                    isEditing
                      ? "border-gray-300"
                      : "border-transparent bg-gray-50"
                  } rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base`}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="inline-flex justify-center py-3 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Account Actions
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/order-history")}
                  className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  View Order History
                </button>
              </li>
              <li>
                <button
                  onClick={handleChangePassword}
                  className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Change Password
                </button>
              </li>
              <li>
                <button
                  onClick={handleDeleteAccount}
                  className="text-red-600 hover:text-red-800 font-medium flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
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
                  Delete Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
