import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import AboutUs from "../pages/AboutUS";
import Careers from "../pages/Careers";
import ContactUs from "../pages/ContactUS";
import Services from "../pages/Services";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      
      
    </Routes>
  );
}

export default AppRouter;