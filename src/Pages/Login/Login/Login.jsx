import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-192px)] flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-10 py-20 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Login your account</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-center text-xs">Don't Have An Account? <Link to="/register" className="text-red-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
