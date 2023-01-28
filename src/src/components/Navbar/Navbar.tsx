import * as React from "react";
import { useState } from "react";
import { IonIcon } from "react-ion-icon";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-16 py-8 font-mont flex flex-row justify-between text-white">
        <div className="logo font-logo text-2xl 2xl:text-4xl">
          <h1 className="font-logo">
            alpha <span className="text-secondary font-logo">rent</span>
          </h1>
        </div>
        <div>
          <ul
            className={`hidden lg:flex lg:flex-row text-sm 2xl:text-base justify-evenly gap-16 lg:gap-32 z-[-1] font-semibold`}
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Service</Link></li>
            <li><Link to="/bookings">Bookings</Link></li>
          </ul>
        </div>
        {/* Account and Logout Info */}
        <div className="hidden lg:flex my-1 font-semibold text-sm 2xl:text-base">
          <img />
          <h6>pistachiocookies</h6>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl cursor-pointer lg:hidden text-secondary"
        >
          <IonIcon name={open ? "close" : "menu"}></IonIcon>
        </div>
      </div>

      {/* Navbar in Mobile */}
      <NavbarMobile open={open} />
    </>
  );
};

export default Navbar;
