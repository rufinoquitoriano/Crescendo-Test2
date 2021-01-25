import React from "react";
import ascent from "../../images/ascent.png";
import corner from "../../images/corner.png";
import corner2 from "../../images/corner2.png";
function EventData({ title, description, location, day, date }) {
  return (
    <div className="relative p-4">
      <div className="relative z-10 bg-blue-700">
        <div className="absolute z-10 flex flex-col items-center justify-center w-24 h-24 py-6 text-teal-600 bg-gray-100 md:py-12 md:h-32 md:w-32 md:bg-blue-550 left-6 -top-6 md:text-trueGray-400">
          <div className="text-xl md:text-2xl ">{date}</div>
          <div className="text-4xl font-bold leading-5 md:leading-10 md:text-7xl">
            {day}
          </div>
        </div>
        <div className="flex flex-col w-full px-6 pt-16 md:pt-24 justify-evenly h-80 items-left">
          <div>
            <div className="text-2xl font-bold text-gray-100 md:text-4xl">
              {title}
            </div>
            <div className="text-sm text-gray-100 md:text-lg">
              {description}
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex items-center justify-center h-10 text-sm font-bold text-gray-100 border w-36 md:w-1/2 md:h-16 md:text-2xl">
              Get more Insight
            </button>
          </div>
        </div>
        <div
          className="flex items-center justify-end w-full h-12 pr-6 ml-4 text-base font-bold bg-no-repeat bg-cover md:pr-12 md:text-2xl"
          style={{ backgroundImage: `url(${ascent})` }}
          alt="ascent"
        >
          {location}
        </div>
      </div>
      <div className="absolute hidden left-6 -top-1 md:block">
        <img src={corner} alt="corner" />
      </div>
      <div className="absolute block left-6 -top-1 md:hidden">
        <img src={corner2} alt="corner2" />
      </div>
    </div>
  );
}

export default EventData;
