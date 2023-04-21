import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaBeer, FaUserAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="container mx-auto my-16">
        <div className="flex flex-col gap-1 items-center text-center">
          <img src={logo} alt="" />
          <h3 className="text-lg text-gray-500">
            Journalism Without Fear or Favour
          </h3>
          <h3 className="text-lg">{moment().format("dddd, MMMM D YYYY")}</h3>
      </div>
      <div>
        <div className="flex py-4 my-5 bg-red-50 relative">
          <button className="text-xl bg-red-600 text-white px-10 py-2 absolute z-10 bottom-2 left-4">Latest</button>
          <Marquee className="text-xl" speed={50}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
        </div>
        <div className="flex gap-5 text-lg text-gray-500">
            <Link to={`/`}>Home</Link>
            <Link to={``}>About</Link>
            <Link to={``}>Career</Link>
        </div>
        <div className="flex items-center gap-3">
            <FaUserAlt className="text-3xl" />
            <Link className="bg-gray-700 text-white py-2 px-10 text-lg" to={``}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
