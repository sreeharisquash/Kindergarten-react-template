import React from "react";
import "./Section7.css";
import LatestBlogs1 from "../../../assets/images/section7/images/latest-blogs-1.svg";
import LatestBlogs2 from "../../../assets/images/section7/images/latest-blogs-2.svg";
import CommonButton from "../../button/CommonButton";

const Section7 = () => {
  const latestBlogs = [
    {
      id: "1",
      image: LatestBlogs1,
      designation: "Admin",
      date: "feb 19 2028",
      para: "Learning, friendship and fun for everyone",
      field: 'Development',
    },
    {
      id: "2",
      image: LatestBlogs2,
      designation: "Admin",
      date: "feb 19 2028",
      para: "Studying to accomplish the greatest goals",
      field: 'Development',
    },
  ];
  return (
    <div className="section7-container">
      <div className="container">
        <h3 className="mb-4" data-aos="zoom-in-down">latest blogs</h3>
        <h2 data-aos="zoom-in-down">Everything You Need to know about Development</h2>
        <div className="row mt-5">
          {latestBlogs.map((items) => (
            <div key={items.id} className="col-lg-6 pt-4 hover-cont" data-aos="fade-up">
                <p className="field-section">{items.field}</p>
              <img
                src={items.image}
                alt=""
                style={{ width: "100%" }}
                className="blogs-img"
              />
              <div className="blogs-contents">
                <div className="d-flex gap-4 mb-4 hide-cls">
                  <span className="designation">{items.designation}</span> |
                  <span className="date">{items.date}</span>
                </div>
                <div className=" view-cls">
                  <span className="designation-view">{items.designation}</span> 
                  <span className="date-view">{items.date}</span>
                </div>
                <h4 className="mb-5 text-center">{items.para}</h4>
                <CommonButton
                  fontColor="white"
                  backgroundColor="#F57105"
                  label="Read More"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section7;
