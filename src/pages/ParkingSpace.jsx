import React from "react";
import Sidebar from "../components/Sidebar";

const ParkingSpace = () => {
  return (
    <>
      <div className="flex w-full bg-gray-100">
        <Sidebar />
        <div className="flex flex-col gap-4 mt-24">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">Parking Space Overview</div>
            <div className="text-xl text-gray-400">
              This real-time view for parking map
            </div>
          </div>
          <div className="min-w-[1000px] w-full bg-blue-200 flex gap-8 p-4 rounded-xl justify-between">
            <div className="flex flex-col gap-4">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-500">
                Booked
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Empty
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkingSpace;
