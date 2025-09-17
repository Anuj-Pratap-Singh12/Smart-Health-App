import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log("Login response:", json);

      if (!json.success) {
        setError("Invalid email or password.");
      } else {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/"); // redirect after login
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-100">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Login
        </h1>
        <p className="text-center text-gray-500 mb-6">Welcome back!</p>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex items-center bg-green-50 border border-green-200 rounded-full px-5 py-3 mb-4">
            <svg
              className="w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.5 5a2 2 0 002 0L20 8m-14 11h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z"
              />
            </svg>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Email"
              className="ml-3 bg-transparent outline-none w-full text-gray-700 text-sm"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-green-50 border border-green-200 rounded-full px-5 py-3 mb-6">
            <svg
              className="w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c.667 0 2 .333 2 2v2a2 2 0 01-2 2h-1a2 2 0 01-2-2v-2c0-1.667 1.333-2 2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 11V8a4 4 0 118 0v3"
              />
            </svg>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Password"
              className="ml-3 bg-transparent outline-none w-full text-gray-700 text-sm"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-green-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-green-500 text-white font-semibold text-sm mb-5 hover:bg-green-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup */}
        <p className="text-sm text-center text-gray-600 mb-5">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent mb-5"></div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          <div className="flex-1 flex items-center justify-center gap-2 border border-green-200 bg-green-50 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-green-100 transition">
            <span className="text-red-500">G</span> Google
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 border border-green-200 bg-green-50 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-green-100 transition">
            <span className="text-blue-600">f</span> Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;