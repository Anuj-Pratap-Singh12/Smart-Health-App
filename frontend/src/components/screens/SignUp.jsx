import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    location: "", // optional
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/createuser", formData);

      setMessage(res.data.message);
      setFormData({ name: "", username: "", email: "", password: "", location: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error signing up. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-100 to-green-200">
      <div className="bg-white text-gray-800 p-8 rounded-2xl w-full max-w-md shadow-xl border border-green-100">
        <h1 className="text-3xl font-bold mb-2 text-green-600">Create Account</h1>
        <p className="text-gray-500 mb-6">Join us and start your journey today!</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="text"
            name="location"
            placeholder="Location (optional)"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${message.toLowerCase().includes("success") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}

        <div className="text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-bold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
