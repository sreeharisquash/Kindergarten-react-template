import React from "react";
import "./Section8.css";
import MailImg from "../../../assets/images/section8/icons/Subscibe Icon.svg";
import CommonButton from "../../button/CommonButton";
import Footer from "../footer/Footer";

const Section8 = () => {
  return (
    <>
      <div className="section8-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="mail-info">
                <img src={MailImg} alt="" data-aos="zoom-in-down"/>
                <div className="d-flex flex-column justify-content-center">
                  <h4 data-aos="zoom-in-down">Join Our Newsletter</h4>
                  <p data-aos="zoom-in-down">
                    To get the latest Update from us please subscribe your
                    email.
                  </p>
                </div>
              </div>
              </div>
              <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="zoom-in-down">
                <div className="d-flex ">
                  <input
                    type="text"
                    className="mail-box"
                    placeholder="Enter Email Address"
                  />
                  <CommonButton
                    backgroundColor="#F57005"
                    fontColor="white"
                    label="Subscribe"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Section8;
