import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  );
};

export default Root;
