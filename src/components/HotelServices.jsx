import React from "react";
import "./HotelServices.css";

const services = [
  {
    id: 1,
    title: "Workout & Yoga Rooms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🏋️‍♂️",
    dark: false,
  },
  {
    id: 2,
    title: "Spa, Massage & Sauna",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🧖‍♀️",
    dark: true,
  },
  {
    id: 3,
    title: "Multiple Cuisines & Beverages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🍽️",
    dark: true,
  },
  {
    id: 4,
    title: "Multiple Cuisines & Beverages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🍽️",
    dark: false,
  },
  {
    id: 5,
    title: "Multiple Cuisines & Beverages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🍽️",
    dark: false,
  },
  {
    id: 6,
    title: "Multiple Cuisines & Beverages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🍽️",
    dark: false,
  },
];

const HotelServices = () => {
  return (
    <section className="hotel-section">
      {/* Header */}
      <div className="hotel-header">
        <div className="line"></div>
        <h4 className="subheading">Introducing Our Services</h4>
        <h1 className="main-heading">
          Amenities That You
          <br />
          Can Enjoy
        </h1>
      </div>
      <div className="description_box">
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, id) => {
          let isBlank = id === 0 || id === 3 || id === 4;
          return (
            <div
              className={`service-card ${isBlank ? "blank_card" : " "}`}
              key={id}
            >
              {!isBlank && (
                <>
                  <div className="icon">{service.icon}</div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <button className="discover-btn">
                    Discover More <span>→</span>
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HotelServices;
