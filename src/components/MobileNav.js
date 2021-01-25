import React from "react";
import Fade from "react-reveal/Fade";

function MobileNav({ newclass }) {
  return (
    <Fade top>
      <div className={newclass}>
        <div className="w-full pb-1 my-2 text-xl text-center text-blue-500 border-b-2 border-gray-100">
          Site Links
        </div>
        <button className="w-full h-12 mb-3 text-xl bg-gray-100">Home</button>
        <button className="w-full h-12 my-2 text-xl bg-gray-100">
          About Us
        </button>
        <button className="w-full h-12 my-2 text-xl bg-gray-100">
          Insights
        </button>
        <button className="w-full h-12 my-2 text-xl bg-gray-100">Events</button>
        <button className="w-full h-12 my-2 text-xl bg-gray-100">
          Contact Us
        </button>
      </div>
    </Fade>
  );
}

export default MobileNav;
