import React from "react";
import "./AboutUs.css";
import Header from "../../header/Header";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import IMG1 from "../../../assets/images/aboutus/images/aboutus-1-img.svg";
import JoinUsImg from "../../../assets/images/aboutus/images/Union.svg";
import Courses from "../courses/Courses";
import CoursesImg1 from "../../../assets/images/section4/images/coursesimg-1.svg";
import CoursesImg2 from "../../../assets/images/section4/images/coursesimg-2.svg";
import CoursesImg3 from "../../../assets/images/section4/images/coursesimg-3.svg";
import FloatIcon1 from "../../../assets/images/section1/Group 8.svg";
import FloatIcon2 from "../../../assets/images/section1/Group 2.svg";
import FloatIcon3 from "../../../assets/images/section1/Group 7.svg";
import FloatIcon4 from "../../../assets/images/section1/Group 6.svg";
import FloatIcon5 from "../../../assets/images/section1/Group 5.svg";
import FloatIcon6 from "../../../assets/images/section1/Group 4.svg";
import FloatIcon7 from "../../../assets/images/section1/Group 3.svg";

import CouorseProfile1 from "../../../assets/images/section4/images/courseProfile1.svg";
import CountUp from "react-countup";

const AboutUs = () => {
  const reasons = [
    {
      id: "1",
      head: "Teach your students as you want.",
      para: "Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus.",
    },
    {
      id: "2",
      head: "Manage your course, payment in one place",
      para: "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.",
    },
    {
      id: "3",
      head: "Chat with your students",
      para: "Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id. ",
    },
  ];

  const counterData = [
    { id: "1", count: "670", category: "Students Strength", class: "students-cls" },
    {
      id: "2",
      count: "260",
      category: "Certified Instructor",
      class: "instructor-cls",
    },
    {
      id: "3",
      count: "72",
      category: "Country Language",
      class: "language-cls",
    },
    { id: "4", count: "99.9", category: "Success Percentage", class: "success-cls" },
    {
      id: "5",
      count: "57",
      category: "Trusted Companies",
      class: "companies-cls",
    },
  ];
  const preprocessCount = (count) => {
    const numericValue = parseFloat(count.replace(/[^0-9.]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const joinUs = [
    {
      id: "1",
      head: "Upskill your organization.",
      para: "Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. ",
    },
    {
      id: "2",
      head: "Access more then 100K online courses.",
      para: "Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat. ",
    },
  ];

  const cardData = [
    {
      id: "1",
      image: CoursesImg1,
      head: "Excepteur sint occaecat cupidatat ",
      profileImg: CouorseProfile1,
      name: "Courtney Henry",
      desgination: "PROJECT MANAGER",
      price: "$473.00",
      duration: "20 Hours",
      lessons: "15 Lessons",
    },
    {
      id: "2",
      image: CoursesImg2,
      head: "Excepteur sint occaecat cupidatat ",
      profileImg: CouorseProfile1,
      name: "Courtney Henry",
      desgination: "PROJECT MANAGER",
      price: "$473.00",
      duration: "20 Hours",
      lessons: "15 Lessons",
    },

    {
      id: "3",
      image: CoursesImg3,
      head: "Excepteur sint occaecat cupidatat ",
      profileImg: CouorseProfile1,
      name: "Courtney Henry",
      desgination: "PROJECT MANAGER",
      price: "$473.00",
      duration: "20 Hours",
      lessons: "15 Lessons",
    },
  ];
  return (
    <div className="aboutus-container">
        <Header />
      <div className="aboutus-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <div className="row pt-5 align-items-center">
          <div className="col-lg-6 mb-5" style={{overflow:'hidden'}} data-aos="fade-up">
            <div className="float-icons">
              <img src={FloatIcon1} alt="" className="floaticon-1" />
              <img src={FloatIcon2} alt="" className="floaticon-2" />
              <img src={FloatIcon3} alt="" className="floaticon-3" />
              <img src={FloatIcon4} alt="" className="floaticon-4" />
              <img src={FloatIcon5} alt="" className="floaticon-5" />
              <img src={FloatIcon6} alt="" className="floaticon-6" />
              <img src={FloatIcon7} alt="" className="floaticon-7" />
            </div>
            <img src={IMG1} alt="" className="img1 img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2  data-aos="fade-up">Why you’ll start teaching on Eduspace</h2>
            <p className="mt-3 mb-3"  data-aos="fade-up">
              Praesent congue ornare nibh sed ullamcorper. Proin venenatis
              tellus non turpis scelerisque, vitae auctor arcu ornare. Cras
              vitae nulla a purus mollis venenatis.{" "}
            </p>
            {reasons.map((items) => (
              <div className="reasons-contain" key={items.id}  data-aos="fade-up">
                <div>
                  <h4 >{items.head}</h4>
                  <p>{items.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="counter-container">
        <div className="container">
          <div className="row" style={{ gap: "3rem" }}>
            {counterData.map((items) => (
              <div className="col-lg-2 col-sm-4 d-flex justify-content-center " data-aos="fade-up">
                <div className={items.class} key={items.id}>
                  <div className="count-category">
                    <h3>
                      <CountUp
                        start={0}
                        end={items.count}
                        duration={2.75}
                      ></CountUp>{" "}
                    </h3>
                    <p>{items.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="join-us">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-7">
              <h2  data-aos="fade-up">Why you will join our team</h2>
              <p style={{ marginTop: "1.26rem", marginBottom: "1.875rem" }}  data-aos="fade-up">
                Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                felis. Vestibulum non consectetur tortor. Morbi at orci
                vehicula, vehicula mi ut, vestibulum odio.{" "}
              </p>
              {joinUs.map((items) => (
                <div className="reasons-contain" key={items.id}  data-aos="fade-up">
                  <div>
                    <h4>{items.head}</h4>
                    <p>{items.para}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-5"  data-aos="fade-up">
              <img src={JoinUsImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="best-courses">
        <div className="container">
          <h3  data-aos="zoom-in-down">Best Courses</h3>
          <h2
            className="text-center"
            style={{ marginTop: "2.25rem", marginBottom: "8rem" }}
            data-aos="zoom-in-down"
          >
            Course Subject That Suits You
          </h2>
          <div className="row">
            {cardData.map((items) => (
              <div className="col-lg-4" key={items.id}  data-aos="fade-up">
                <Courses
                  duration={items.duration}
                  image={items.image}
                  head={items.head}
                  profileImg={items.profileImg}
                  name={items.name}
                  desgination={items.desgination}
                  price={items.price}
                  lessons={items.lessons}
                />
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
