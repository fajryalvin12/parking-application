import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex bg-white flex-col w-[400px] p-8 h-screen gap-16 mr-24">
        <div className="text-blue-700 text-2xl font-bold">YukParkir</div>
        <div className="flex flex-col gap-4">
          <div className="text-[14px] flex justify-center">Menu</div>
          <button className="hover:bg-blue-600 p-2 rounded-xl font-semibold hover:text-white tracking-wide bg-white text-blue-700">
            <Link to={"/dashboard"}>Dashboard</Link>
          </button>
          <button className="hover:bg-blue-600 p-2 rounded-xl font-semibold hover:text-white tracking-wide bg-white text-blue-700">
            <Link to={"/booking"}>Booking</Link>
          </button>
          <button className="hover:bg-blue-600 p-2 rounded-xl font-semibold hover:text-white tracking-wide bg-white text-blue-700">
            <Link to={"/"}>Parking Space Overview</Link>
          </button>
          <button className="hover:bg-blue-600 p-2 rounded-xl font-semibold hover:text-white tracking-wide bg-white text-blue-700">
            <Link to={"/detail"}>Detail Order</Link>
          </button>
          <button className="hover:bg-blue-600 p-2 rounded-xl font-semibold hover:text-white tracking-wide bg-white text-blue-700">
            <Link to={"/about"}>About YukParkir</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
