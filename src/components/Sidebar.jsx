import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="flex bg-blue-300 flex-col max-w-[275px] p-8 h-screen gap-16">
        <div className="text-blue-700 text-2xl font-bold">YukParkir</div>
        <div className="flex flex-col gap-4">
          <div className="text-[14px] flex justify-center">Menu</div>
          <button className="bg-blue-600 p-2 rounded-xl font-semibold text-white tracking-wide hover:bg-white hover:text-blue-700">
            Dashboard
          </button>
          <button className="bg-blue-600 p-2 rounded-xl font-semibold text-white tracking-wide hover:bg-white hover:text-blue-700">
            Booking
          </button>
          <button className="bg-blue-600 p-2 rounded-xl font-semibold text-white tracking-wide hover:bg-white hover:text-blue-700">
            Parking Space Overview
          </button>
          <button className="bg-blue-600 p-2 rounded-xl font-semibold text-white tracking-wide hover:bg-white hover:text-blue-700">
            Parking Schema
          </button>
          <button className="bg-blue-600 p-2 rounded-xl font-semibold text-white tracking-wide hover:bg-white hover:text-blue-700">
            About YukParkir
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
