import React from "react";
import "./Section5.css";
import TestimonialCarousal from "../testimonialsCarousal/TestimonialCarousal";

const Section5 = () => {
  return (
    <div className="section5-container">
      <div className="container">
        <h3 className="mb-4" data-aos="zoom-in-down">Testimonial</h3>
        <h2 data-aos="zoom-in-down">What do students say about Eduspace?</h2>
        <div className="container">
          <TestimonialCarousal />
        </div>
      </div>
    </div>
  );
};
export default Section5;
