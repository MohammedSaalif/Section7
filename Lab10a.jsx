import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Lab10a = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔹 Predefined Users (For demo purposes)
  const users = [
    { id: "admin", password: "admin123", role: 1 }, // Admin credentials
    { id: "user", password: "user123", role: 2 },   // User credentials
  ];

  // 🔹 Handle Login Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message before attempting login

    // Check for the user in the hardcoded credentials
    const foundUser = users.find((user) => user.id === id && user.password === password);

    if (foundUser) {
      // If user is admin, navigate to the admin dashboard
      if (foundUser.role === 1) {
        navigate("/admindashboard");
      }
      // If user is a regular user, navigate to the user dashboard
      else if (foundUser.role === 2) {
        navigate("/userdashboard");
      }
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lab10a;
