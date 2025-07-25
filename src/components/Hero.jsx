import React from "react";
import "./Hero.css";
// import SearchHotel from "./SearchHotel";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <p>BEST PLACE TO RELAX & ENJOY</p>
        <h1>A Luxurious Way To Enjoy Your Life</h1>
        <div className="btn">
          <button>
            Discover Rooms
            <svg
              className="right_arrow"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66992 0.898438L8.11035 7.89746L8.2041 7.99902L8.11035 8.10059L1.66992 15.1016L1.55957 15.2217L1.44922 15.1016L0.889648 14.4902L0.796875 14.3887L0.889648 14.2871L6.67676 7.99805L0.889648 1.70996L0.795898 1.6084L0.889648 1.50684L1.44922 0.898438L1.55957 0.77832L1.66992 0.898438Z"
                fill="white"
                stroke="white"
                stroke-width="0.3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
