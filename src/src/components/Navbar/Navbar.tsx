import * as React from "react";
import { useState } from "react";
import { IonIcon } from "react-ion-icon";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-16 my-8 font-mont flex flex-row justify-between">
        <div className="logo font-logo text-2xl 2xl:text-4xl">
          <h1>
            alpha <span className="text-secondary">rent</span>
          </h1>
        </div>
        <div>
          <ul
            className={`hidden lg:flex lg:flex-row text-sm 2xl:text-base justify-evenly gap-16 lg:gap-32 z-[-1] font-semibold`}
          >
            <li>Home</li>
            <li>Service</li>
            <li>Bookings</li>
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
          className="text-4xl cursor-pointer lg:hidden text-secondary"
        >
          <IonIcon name={open ? "close" : "menu"}></IonIcon>
        </div>
      </div>

      {/* Navbar in Mobile */}
      <NavbarMobile open={open}/>
    </>
  );
};

export default Navbar;
