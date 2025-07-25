import React from "react";
import "./LuxuryRooms.css";
import Room from "./Room";
import LowerRoom from "./LowerRoom";
const LuxuryRooms = () => {
  return (
    <div>
      <div className="rooms">
        <Room title="Superior Suite" rate="$300/Night" />
        <Room title="Junior Suite" rate="$270/Night" />
      </div>
      <div className="lower_rooms">
        <LowerRoom title="Delux Room" rate="$100/Night" />
        <LowerRoom title="Delux Room" rate="$100/Night" />
        <LowerRoom title="Delux Room" rate="$100/Night" />
      </div>
    </div>
  );
};

export default LuxuryRooms;
