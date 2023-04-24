import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";

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
          <button className="text-xl bg-red-600 text-white px-10 py-2 absolute z-10 bottom-2 left-4">
            Latest
          </button>
          <Marquee className="text-xl" speed={50}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
