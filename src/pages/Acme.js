import React from "react";
import InsightsData from "../components/Data/InsightsData";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Acme() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="p-5 px-4 text-gray-100 md:text-gray-900 md:px-56 md:bg-gray-100 bg-blue-550">
        <div className="p-4">
          <h1 className="text-3xl font-semibold">
            <span className="font-normal md:font-semibold">ACME</span> Insights
          </h1>
          <p className="mt-2 ">How are factors being used around the world?</p>
        </div>
        <Carousel
          partialVisbile={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <InsightsData
            image={card1}
            title="Global Factor"
            title1="Investing Study"
            color="blue"
          />
          <InsightsData
            image={card2}
            title="2019"
            title1="Outlook"
            color="teal"
          />
          <InsightsData
            image={card3}
            title="Capital Market"
            title1="Assumptions"
            color="lightBlue"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Acme;
