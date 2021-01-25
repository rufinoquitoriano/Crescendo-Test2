import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import logo2 from "../images/logo2.png";
import Footnav from "./Footnav";
import React, { useState } from "react";

function Footer() {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    let click = clicked ? "absolute" : "hidden";
    return (
      click +
      " flex-col flex bottom-20 fixed items-center w-full text-2xl md:hidden justify-evenly"
    );
  };
  return (
    <div className="h-24 px-4 mt-16 text-gray-100 bg-gray-300 md:bg-gray-500 md:py-4 md:px-60">
      <div className="justify-between hidden md:flex">
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="pr-4 text-sm md:text-lg ">Call us at</div>
            <div className="text-sm md:text-lg ">111-222-3333</div>
          </div>
          <div className="text-sm md:text-lg">for more information</div>
        </div>
        <div className="flex">
          <div className="pt-1 pr-1 text-sm md:pr-2 md:text-lg">
            Social Share
          </div>
          <div className="flex pt-3 md:pt-0">
            <div className="w-8 p-1 md:p-2 md:w-10">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="w-8 p-1 md:w-10 md:p-2">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="w-8 p-1 md:w-10 md:p-2">
              <img src={linkedin} alt="linkedin" />
            </div>
            <div className="w-8 p-1 md:p-2 md:w-10">
              <img src={email} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-center md:hidden">
          <div
            className="flex items-center h-full text-4xl text-blue-800 md:hidden"
            onClick={() => setClicked(!clicked)}
          >
            <img className="w-24" src={logo2} alt="logo" />
          </div>
        </div>
        <Footnav newclass={onClick()} />
      </div>
    </div>
  );
}

export default Footer;
