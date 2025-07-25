import React from "react";
// import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import LuxuryRooms from "../components/LuxuryRooms";
import HotelServices from "../components/HotelServices";
import TestimonialSection from "../components/TestimonialSection";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div>
      <div className="main">
        {/* <Navbar /> */}
        <Hero />
        <PageTitle category="OUR ROOM CHOICES" title="Luxury Rooms & Suites" />
        <LuxuryRooms />
        <HotelServices />
        <TestimonialSection />
        <TeamSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
