import React from "react";
import "./TestimonialSection.css"; // External CSS
import PageTitle from "./PageTitle";

const testimonials = [
  {
    id: 1,
    name: "Jackson Dean",
    role: "Guest",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Rose",
    role: "Guest",
    review: "Excellent service and comfortable rooms. Would highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Guest",
    review: "A perfect experience! Food, staff, and ambiance were top-notch.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      {/* <div className="testimonial-header">
        <span className="sub-heading">Our Customer Review</span>
        <h2>What Our Client Says</h2>
        <div className="line" />
      </div> */}
      <PageTitle title="What Our Client Says" category="OUR CUSTOMER REVIEW" />
      <div className="testimonial-scroll">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="testimonial-left" />
            <div className="testimonial-right">
              <div className="stars">{"★".repeat(item.rating)}</div>
              <p className="review">“{item.review}”</p>
              <p className="author">{item.name}</p>
              <p className="role">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
