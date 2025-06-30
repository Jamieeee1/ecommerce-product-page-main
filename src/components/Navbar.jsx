import React from "react";
import { NavLink } from "react-router";
import icon from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatarIcon from "../assets/images/image-avatar.png";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  // const [menu, setMenu] = useState(false);
  const linkActive = ({ isActive }) =>
    isActive ? "border-b-4 border-Orange py-3" : " py-3";
  return (
    <>
      <nav className="flex border-b-2 mx-2 lg:ml-5 lg:mr-4 items-center h-max pt-3 px-3 border-Grayishblue relative">
        {/* <div>
          <img src={menu} alt="" srcset="" />
        </div> */}
        <div>
          <img src={icon} alt="" />
        </div>
        <ul className="flex h-fit items-center gap-3.5 text-sm ml-4">
          <span>Colections</span>
          <li className="py-3.5">
            <NavLink to="men" className={linkActive}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="women" className={linkActive}>
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className={linkActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className={linkActive}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="w-full flex justify-end items-center gap-2">
          <span className="h-8 w-8 flex items-center justify-center">
            <img src={cartIcon} alt="" srcset="" />
          </span>
          <span className="h-10 w-10 block">
            <img src={avatarIcon} alt="" srcset="" />
          </span>
        </div>
        <div className=""></div>
      </nav>
    </>
  );
};

export default Navbar;
