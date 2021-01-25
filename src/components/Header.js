import React from "react";
import header from "../images/header.png";

function Header() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${header})` }}
        alt="header"
      >
        <div className="px-4 py-32 text-base md:py-40 md:text-3xl md:px-60">
          <div className="pb-8 text-2xl tracking-tighter text-gray-100 border-b-4 border-dotted md:border-b-0 w-52 md:w-full md:font-semibold md:text-6xl">
            ACME Wealth
            <div className="text-4xl font-bold tracking-wider">
              Management Platforms
            </div>
          </div>
          <div className="mt-10 text-gray-100 font-extralight">
            <p className="my-2">Investment exellece.</p>
            <p className="my-2">Diversity of thought.</p>
            <p className="my-2">Organizational strenght.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
