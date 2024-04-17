import React from "react";
import "./Section3.css";
import SlickCarousal from "../slickCarousal/SlickCarousal";

const Section3 = () => {
  return (
    <>
      <div className="section3-container" style={{ overflow: "hidden" }}>
        <div className="image-and-bg">
          <div className="image-container">
            <div className="mb-5" >
              <h3 data-aos="zoom-in-down">Category</h3>
              <h2 data-aos="zoom-in-down">Explore Our Categories</h2>
            </div>
          </div>
          <div className="container" style={{ marginTop: "3rem" }}>
            <SlickCarousal />
          </div>
        </div>
      </div>
    </>
  );
};
export default Section3;
