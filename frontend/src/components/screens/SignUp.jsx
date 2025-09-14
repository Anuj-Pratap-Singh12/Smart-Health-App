import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-100">
      <div className="bg-white text-black p-10 rounded-xl w-full max-w-md text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
        <p className="text-gray-600 mb-6">Create your account now!</p>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center bg-green-50 border border-green-200 px-5 py-3 rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600 flex-shrink-0"
            >
              <path
                d="M5 21C5 17.134 8.134 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.209 14.209 11 12 11C9.791 11 8 9.209 8 7C8 4.791 9.791 3 12 3C14.209 3 16 4.791 16 7Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="ml-3 bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>

          {/* Username */}
          <div className="flex items-center bg-green-50 border border-green-200 px-5 py-3 rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600 flex-shrink-0"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Username"
              required
              className="ml-3 bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-green-50 border border-green-200 px-5 py-3 rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600 flex-shrink-0"
            >
              <path
                d="M3 8L8.45 11.633C9.733 12.489 10.374 12.916 11.068 13.083C11.681 13.229 12.319 13.229 12.932 13.083C13.626 12.916 14.267 12.489 15.55 11.633L21 8M6.2 19H17.8C18.92 19 19.48 19 19.908 18.782C20.284 18.59 20.59 18.285 20.782 17.908C21 17.48 21 16.92 21 15.8V8.2C21 7.08 21 6.52 20.782 6.092C20.59 5.716 20.284 5.41 19.908 5.218C19.48 5 18.92 5 17.8 5H6.2C5.08 5 4.52 5 4.092 5.218C3.716 5.41 3.41 5.716 3.218 6.092C3 6.52 3 7.08 3 8.2V15.8C3 16.92 3 17.48 3.218 17.908C3.41 18.285 3.716 18.59 4.092 18.782C4.52 19 5.08 19 6.2 19Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              required
              className="ml-3 bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-green-50 border border-green-200 px-5 py-3 rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600 flex-shrink-0"
            >
              <path
                d="M12 14.5V16.5M7 10.029C7.471 10 8.053 10 8.8 10H15.2C15.947 10 16.529 10 17 10.029M7 10.029C6.412 10.065 5.994 10.146 5.638 10.327C5.074 10.615 4.615 11.074 4.327 11.638C4 12.28 4 13.12 4 14.8V16.2C4 17.88 4 18.72 4.327 19.362C4.615 19.927 5.074 20.385 5.638 20.673C6.28 21 7.12 21 8.8 21H15.2C16.88 21 17.72 21 18.362 20.673C18.927 20.385 19.385 19.927 19.673 19.362C20 18.72 20 17.88 20 16.2V14.8C20 13.12 20 12.28 19.673 11.638C19.385 11.074 18.927 10.615 18.362 10.327C18.006 10.146 17.588 10.065 17 10.029M7 10.029V8C7 5.239 9.239 3 12 3C14.761 3 17 5.239 17 8V10.029"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              required
              className="ml-3 bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-gray-600 text-sm mt-6">
          Already have an account? {" "}
          <Link to='/login' className="text-green-600 font-bold">
            Login
          </Link>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-white via-green-500 to-white my-6"></div>

        {/* Social Login */}
        <div className="flex gap-3">
          <div className="flex-1 bg-green-50 border border-green-200 px-4 py-2 rounded-lg text-gray-700 flex items-center justify-center cursor-pointer hover:bg-green-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 mr-2"
            >
              <path
                fill="#4285F4"
                d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
              />
              <path
                fill="#34A853"
                d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
              />
              <path
                fill="#FBBC05"
                d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
              />
              <path
                fill="#EB4335"
                d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
              />
            </svg>
            Google
          </div>

          <div className="flex-1 bg-green-50 border border-green-200 px-4 py-2 rounded-lg text-gray-700 flex items-center justify-center cursor-pointer hover:bg-green-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 mr-2"
            >
              <circle cx="16" cy="16" r="14" fill="url(#paint0_linear)" />
              <path
                d="M21.214 20.282L21.836 16.33H17.945V13.767C17.945 12.686 18.488 11.631 20.23 11.631H22V8.267C22 8.267 20.395 8 18.86 8C15.655 8 13.562 9.893 13.562 13.318V16.33H10V20.282H13.562V29.835C14.277 29.944 15.008 30 15.753 30C16.499 30 17.23 29.944 17.945 29.835V20.282H21.214Z"
                fill="white"
              />
            </svg>
            Facebook
          </div>
        </div>
      </div>
    </div>
  );
}
