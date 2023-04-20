import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";

const RightSide = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="text-2xl font-semibold mb-5">Login With</h2>
        <div className="flex flex-col gap-3">
          <Link
            className="flex items-center gap-3 border-2 border-blue-500 text-blue-500 justify-center py-3 rounded-lg"
            to={""}
          >
            <FaGoogle />
            <h2>Login with Google</h2>
          </Link>
          <Link
            className="flex items-center gap-3 border-2 border-gray-500 text-gray-500 justify-center py-3 rounded-lg"
            to={""}
          >
            <FaGithub />
            <h2>Login with Github</h2>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
        <div className="flex flex-col overflow-hidden">
          <Link
            to={""}
            className="border flex py-4 items-center px-5 gap-2 text-xl"
          >
            <FaFacebook className="text-blue-700" />
            <h2 className="text-gray-500">Facebook</h2>
          </Link>
          <Link
            to={""}
            className="border flex py-4 items-center px-5 gap-2 text-xl"
          >
            <FaTwitter className="text-blue-500" />
            <h2 className="text-gray-500">Twitter</h2>
          </Link>
          <Link
            to={""}
            className="border flex py-4 items-center px-5 gap-2 text-xl"
          >
            <FaInstagram className="text-red-500" />
            <h2 className="text-gray-500">Instagram</h2>
          </Link>
        </div>
      </div>

      <div className="bg-red-50 p-5">
        <h2 className="text-2xl font-semibold mb-5">Q-Zone</h2>
        <div>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>

      <div className="relative">
        <div>
          <img className="w-full object-cover" src={bg} alt="" />
        </div>
        <div className="flex justify-center text-center p-5 absolute top-36">
          <div>
            <h2 className="text-5xl font-bold text-gray-100">Create an Amazing Newspaper</h2>
            <p className="text-white mt-5 mb-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et
              in esse doloribus hic obcaecati!
            </p>
            <button className="bg-red-600 text-white px-6 py-6 text-3xl font-semibold" to={""}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
