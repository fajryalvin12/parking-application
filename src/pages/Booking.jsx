import React from "react";
import Sidebar from "../components/Sidebar";

const Booking = () => {
  return (
    <>
      <div className="flex bg-gray-100">
        <Sidebar />
        <div className="flex flex-col gap-4 mt-24">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">Booking Form</div>
            <div className="text-xl text-gray-400">
              Please input the data for booking the place
            </div>
          </div>
          <form className="flex flex-col gap-8 bg-white p-8 rounded-xl shadow-md">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="name">
                Car Name
              </label>
              <input
                className="border border-slate-400 rounded-md outline-none h-12 px-4"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="number">
                Car License Number
              </label>
              <input
                className="border border-slate-400 rounded-md outline-none h-12 px-4"
                type="text"
                name="number"
                id="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="time">
                Parking Duration
              </label>
              <input
                className="border border-slate-400 rounded-md outline-none h-12 px-4"
                type="text"
                name="time"
                id="time"
              />
            </div>
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
