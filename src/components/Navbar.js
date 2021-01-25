import React, { useState } from "react";
import logo3 from "../images/logo3.png";
import logo from "../images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    let click = clicked ? "absolute" : "hidden";
    return (
      click +
      " flex-col flex bg-white fixed items-center w-full text-2xl md:hidden justify-evenly"
    );
  };
  return (
    <div className="bg-white">
      <nav className="items-center hidden pl-52 h-36 md:flex">
        <div>
          <img className="w-42" src={logo} alt="logo" />
        </div>
        <div className="border-r-4 border-gray-2 00">
          <h1 className="mx-12 text-2xl font-bold tracking-wider text-lightBlue-400">
            Research Professional
          </h1>
          <h1 className="mx-12 text-6xl font-bold tracking-wider text-blue-900">
            Platform
          </h1>
        </div>
        <div className="flex items-end justify-between w-2/4 h-full py-5 text-2xl">
          <button className="ml-8">Home</button>
          <button>About Us</button>
          <button>Insights</button>
          <button>Events</button>
          <button>ContactUs</button>
        </div>
      </nav>
      <div className="hidden h-6 bg-blue-550 md:block"></div>
      <div className="flex justify-center bg-gray-100 md:hidden">
        <div className="px-16">
          <img className="w-36" src={logo3} alt="logo" />
        </div>
        <div
          className="block pt-2 text-4xl text-blue-800 md:hidden"
          onClick={() => setClicked(!clicked)}
        >
          <AiOutlineMenu />
        </div>
      </div>
      <MobileNav newclass={onClick()} />
    </div>
  );
}

export default Navbar;
