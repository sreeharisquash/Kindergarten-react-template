import React from "react";
import "./ComingSoon.css";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import ComingSoonImg from "../../../assets/images/comingsoon/images/comingsoon-img.svg";
import FlipClock from "../flippertimer/FlipperTimer";

const ComingSoon = () => {
  return (
    <div className="comingsoon-container">
        <Header />

      <div className="comingsoon-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container pt-5">
        <img
          src={ComingSoonImg}
          alt=""
          className="img-fluid"
          style={{
            maxWidth: "60%",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div className="timer">
          <FlipClock />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ComingSoon;
