import React from "react";
import gradient from "../images/gradient.png";

function Commitment() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 text-center text-gray-200 bg-blue-500 bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <div className="px-2 md:px-6">
        <div className="p-2 text-2xl font-bold md:text-4xl">
          Our Commitment to Professionals
        </div>
        <p className="text-sm tracking-wider md:text-2xl">
          We help our partners deliver industry leading results with a
          commitment to excellence, thought-provoking insights and <br />
          experienced distribution. We are laser focused on our shared goal -
          helping clients achieve their objectives.
        </p>
        <div className="pt-8 md:pt-12">
          <button className="w-32 h-10 text-sm font-semibold border-2 md:h-16 md:text-2xl md:w-60">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Commitment;
