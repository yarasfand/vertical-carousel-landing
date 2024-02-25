import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../components/landingPage/LandingPageMain/LandingPage";
import AboutUs from "../../components/aboutUs/AboutUs";
import ContactUs from "../../components/contactUs/ContactUs";
import Services from "../../components/services/Services";
import Products from "../../components/products/Products";
import HomePage from "../../components/homePage/HomePage";

export default function RoutesToPages() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
