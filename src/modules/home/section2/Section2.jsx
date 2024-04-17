import React from "react";
import "./Section2.css";
import ExclusiveImg1 from "../../../assets/images/section2/exclusive1.svg";
import ExclusiveImg2 from "../../../assets/images/section2/exclusive-bulb.svg";
import ExclusiveImg3 from "../../../assets/images/section2/exlcusive3.svg";
import ExclusiveImg4 from "../../../assets/images/section2/exclusive-globe.svg";
import CommonButton from "../../button/CommonButton";
import Section2Img from "../../../assets/images/section2/SHAPES.png";
import Flexible from '../../../assets/images/section2/flexible-cls-1.svg'
import LiveCls from '../../../assets/images/section2/Live-cls.svg'

const Section2 = () => {
  const data = [
    {
      id: "1",
      image: ExclusiveImg1,
      head: "Exclusive Coach",
      para: "magnaconsectetur adipiscing elit incididunt ut labore et dolore magnaquis nostrud exercitation",
    },
    {
      id: "2",
      image: ExclusiveImg2,
      head: "Exclusive Coach",
      para: "magnaconsectetur adipiscing elit incididunt ut labore et dolore magnaquis nostrud exercitation",
    },
    {
      id: "3",
      image: ExclusiveImg3,
      head: "Exclusive Coach",
      para: "magnaconsectetur adipiscing elit incididunt ut labore et dolore magnaquis nostrud exercitation",
    },
    {
      id: "4",
      image: ExclusiveImg4,
      head: "Exclusive Coach",
      para: "magnaconsectetur adipiscing elit incididunt ut labore et dolore magnaquis nostrud exercitation",
    },
  ];

  const flexibleClassData = [
    {
      id: "1",
      head: "Flexible Classes",
      image: Flexible,
      para: "magnaconsectetur adipiscing elit incididunt ut labore et dolore magnaquis nostrud exercitation",
    },
    {
      id: "2",
      head: "Live Class From anywhere",
      image: LiveCls,
      para: "magnaconsectetur adipiscing elit incididunt ut labore et dolore magnaquis nostrud exercitation",
    },
  ];
  return (
    <>
      <div className="section2-container">
        <div className="container">
          <div className="row">
            {data.map((items) => (
              <div className="col-lg-3 mb-5" key={items.id} data-aos="fade-up">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={items.image}
                    alt="Card image cap"
                    style={{ maxWidth: "35%" }}
                  />
                  {/* <svg class="icon">{items.image}</svg> */}
                  <div class="card-body">
                    <h5 class="card-title">{items.head}</h5>
                    <p class="card-text text-center">{items.para}</p>
                    <div>
                      <CommonButton
                        label="Read More"
                        backgroundColor="#1D29FF"
                        fontColor="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-5 pt-5 align-center" data-aos="fade-up">
            <div className="col-lg-7">
              <h3 className="mb-5">About Us</h3>
              <h2>We Always Ensure Best Course For Your Learning</h2>
              <p className="pt-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex dolor sit amet, magnaconsectetur
                adipiscing elit incididunt ut labore et dolore magna aliqua.et
                dolore magna aliqua.{" "}
              </p>
              {flexibleClassData.map((items) => (
                <div class="flexible-container" key={items.id}>
                  <div className="d-flex align-center">
                    <img
                      src={items.image}
                      alt=""
                      // style={{ maxWidth: "80%" }}
                    />
                  </div>
                  <div>
                    <h5>{items.head}</h5>
                    <p class="card-text">{items.para}</p>
                  </div>
                </div>
              ))}
              <div className="pt-5">
                <CommonButton
                  label="Discover More"
                  backgroundColor="#F57105"
                  fontColor="white"
                />
              </div>
            </div>
            <div className="col-lg-5 sec2-img" data-aos="fade-down">
              <img src={Section2Img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* </div>
       </div>
      </div> */}
    </>
  );
};
export default Section2;
