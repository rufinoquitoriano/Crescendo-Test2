import React from "react";
import top from "../../images/top.png";
import bottom from "../../images/bottom.png";

function InsightsData({ image, title, color, title1 }) {
  const textcolor = `p-5 text-${color}-600 bg-white`;
  const bgcolor = `pb-2 bg-${color}-600 shadow-2xl`;
  return (
    <div className="p-1 md:p-4">
      <div className={bgcolor}>
        <div className={textcolor}>
          <div
            className="relative w-full h-64 bg-center bg-no-repeat bg-cover md:h-80"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img src={top} alt="corner" className="absolute w-24 md:w-32" />
            <img
              src={bottom}
              alt="corner"
              className="absolute bottom-0 right-0 w-24 md:w-32"
            />
          </div>
          <div className="p-5 pl-0 text-xl font-bold md:text-4xl ">
            <p>{title}</p>
            <p>{title1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsData;
