import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/category/0"
  console.log(from)
  const handleLogin = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loggedUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setSuccess("Successfully Login")
        navigate(from, {replace: true})
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-192px)] flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-10 py-20 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
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
        <p className="mt-5 text-center text-xs">
          Don't Have An Account?{" "}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </p>
      <div className="text-center text-red-500 my-2">{error}</div>
      <div className="text-center text-blue-500 my-2">{success}</div>
      </div>
    </div>
  );
};

export default Login;
