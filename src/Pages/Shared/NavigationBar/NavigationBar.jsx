import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavigationBar = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center container mx-auto my-10">
      <div></div>
      <div className="flex gap-5 text-lg text-gray-500">
        <Link to={`/category/0`}>Home</Link>
        <Link to={``}>About</Link>
        <Link to={``}>Career</Link>
      </div>
      <div className="flex items-center gap-3">
        {user && <FaUserAlt className="text-3xl" />}
        {user ? (
          <Link className="bg-gray-700 text-white py-2 px-10 text-lg" to={``}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="bg-gray-700 text-white py-2 px-10 text-lg">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
