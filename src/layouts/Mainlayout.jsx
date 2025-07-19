import React, { useContext } from "react";
import { AppContext } from "../App";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";

const Mainlayout = () => {
  const { isCartOpen } = useContext(AppContext);
  const cartVisible = () =>
    isCartOpen
      ? "absolute flex flex-col top-0 min-w-[320px] m-1.5 bg-White rounded-md min-h-[320px] right-0 z-10 shadow-xl shadow-Verydarkblue/30"
      : "hidden";
  return (
    <>
      <Navbar />
      <div className="relative flex-1 flex w-full h-full">
        <div className={cartVisible()}>
          <Cart />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Mainlayout;
