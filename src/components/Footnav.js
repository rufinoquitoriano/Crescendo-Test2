import React from "react";
import Fade from "react-reveal/Fade";

function Footnav({ newclass }) {
  return (
    <Fade bottom>
      <div className={newclass}>
        <div className="px-4 bg-gray-400">
          <div className="flex pt-4">
            <button className="w-full h-12 m-1 my-1 text-lg font-semibold text-gray-400 bg-gray-100">
              Private Policy
            </button>
            <button className="w-full h-12 m-1 my-1 text-lg font-semibold text-gray-400 bg-gray-100">
              Terms of Use
            </button>
          </div>
          <div className="w-full pb-1 my-2 text-sm text-center text-blue-500 border-b-2 border-gray-500">
            Site Links
          </div>

          <button className="w-full h-12 px-4 mb-1 text-xl font-semibold text-gray-400 bg-gray-100">
            Home
          </button>
          <button className="w-full h-12 my-1 text-xl font-semibold text-gray-400 bg-gray-100">
            About Us
          </button>
          <button className="w-full h-12 my-1 text-xl font-semibold text-gray-400 bg-gray-100">
            Insights
          </button>
          <button className="w-full h-12 my-1 text-xl font-semibold text-gray-400 bg-gray-100">
            Events
          </button>
          <button className="w-full h-12 my-1 text-xl font-semibold text-gray-400 bg-gray-100">
            Due Diligence
          </button>
          <button className="w-full h-12 my-1 text-xl font-semibold text-gray-400 bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </Fade>
  );
}

export default Footnav;
