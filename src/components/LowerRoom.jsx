import React from "react";
import "./LuxuryRooms.css";
const LowerRoom = ({ title, rate }) => {
  return (
    <div>
      <div className="lower_room1">
        <div className="room1_lower">
          <div
            className="text_section"
            style={{
              color: "white",
              paddingTop: "30px",
            }}
          >
            <h1>{title}</h1>
            <p>{rate}</p>
          </div>
          <div className="horizontal_line"></div>
          <div className="lower_btns">
            <div className="book_now">
              <button>
                Book Now{" "}
                <svg
                  className="right_arrow"
                  width="10"
                  height="12"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66992 0.898438L8.11035 7.89746L8.2041 7.99902L8.11035 8.10059L1.66992 15.1016L1.55957 15.2217L1.44922 15.1016L0.889648 14.4902L0.796875 14.3887L0.889648 14.2871L6.67676 7.99805L0.889648 1.70996L0.795898 1.6084L0.889648 1.50684L1.44922 0.898438L1.55957 0.77832L1.66992 0.898438Z"
                    fill="#BF9766"
                    stroke="#BF9766"
                    stroke-width="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerRoom;
