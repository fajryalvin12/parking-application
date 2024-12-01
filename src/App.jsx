import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParkingSpace from "./pages/ParkingSpace";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import ParkingSchema from "./pages/ParkingSchema";
import AboutYukParkir from "./pages/AboutYukParkir";

const arrayRouter = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/",
    element: <ParkingSpace />,
  },
  {
    path: "/schema",
    element: <ParkingSchema />,
  },
  {
    path: "/about",
    element: <AboutYukParkir />,
  },
];

const router = createBrowserRouter(arrayRouter);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
