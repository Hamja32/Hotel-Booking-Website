import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home"; // if you have Home.jsx
import Navbar from "./components/Navbar"; // optional
import Footer from "./components/Footer"; // optional

function App() {
  return (
    <Router>
      <Navbar /> {/* Optional if you want navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
