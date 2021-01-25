import React from "react";
import EventData from "../components/Data/EventData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Upcomming() {
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
    <div className="px-4 md:px-56">
      <div className="p-4 py-12">
        <div className="text-3xl text-blue-900 md:text-gray-900 md:text-5xl">
          Upcoming <span className="font-bold md:font-normal">Events</span>
        </div>
        <div className="hidden text-base md:block md:leading-loose md:text-xl">
          This needs a great tagline, but I'll fill it in later
        </div>
        <div className="block text-sm text-gray-500 md:hidden">
          At ACME, we're dedicated to learning, and exploring opportunities.
        </div>
      </div>
      <Carousel
        partialVisbile={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <EventData
          day="28"
          date="JAN"
          location="Chicago, IL"
          description="Join us for this conference showcasing innovation."
          title="Insight Exchange Network"
        />
        <EventData
          day="12"
          date="FEB"
          location="The Wagner, New York"
          description="Find out how banks are responding to the changing future of interest..."
          title="Citywide Buyer's Retreat"
        />
        <EventData
          day="6"
          date="MAY"
          location="London, England"
          description="Find the best online resources to help with your investments..."
          title="Research Exchange"
        />
      </Carousel>
    </div>
  );
}

export default Upcomming;
