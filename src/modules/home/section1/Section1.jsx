import React from "react";
import "./Section1.css";
import Header from "../../header/Header";
import Section1Img from "../../../assets/images/section1/SHAPE.png";
import CommonButton from "../../button/CommonButton";
import CapImg from "../../../assets/images/section1/10 Graduation Hat.svg";
import BookImg from "../../../assets/images/section1/4 Book.svg";
import Eclipse1 from '../../../assets/images/section1/sec-1-eclipse-1.svg'
import Eclipse2 from '../../../assets/images/section1/sec-1-eclipse-2.svg'


const Section1 = () => {
  return (
    <>
      <Header />

      <div className="section-one-container">
        <div className="container">
          <div className="sub-sections">
            <img src={Eclipse1} alt="" className="eclipse-1"/>
            <img src={Eclipse2} alt="" className="eclipse-2"/>
            <img src={Eclipse1} alt="" className="eclipse-3"/>

            <div className="row align-center" >
              <div className="col-lg-8 " data-aos="fade-up">
                <h1>
                Improve Your Online Learning Experience Better Instantly
                </h1>
                <div className="row">
                  <div className="col-lg-10 mb-5">
                    <p className="text-white pt-4">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex dolor sit amet,
                      magnaconsectetur adipiscing elit incididunt ut labore et
                      dolore magna aliqua.et dolore magna aliqua.{" "}
                    </p>
                    <div className="sec-1-btns">
                      <CommonButton
                        label="Take Now"
                        fontColor="white"
                        backgroundColor="#F57105"
                      />
                      <CommonButton
                        label="Find the course"
                        fontColor="black"
                        backgroundColor="white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 image-hover" data-aos="fade-up">
                <div className="hover-container">
                  <img src={CapImg} alt="" className="capimg" />
                  <img
                    src={Section1Img}
                    alt=""
                    className="img-fluid section1-img"
                  />
                  <img src={BookImg} alt="" className="bookimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
