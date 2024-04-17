import React from "react";
import "./Section4.css";
import Courses from "../courses/Courses";
import CoursesImg1 from "../../../assets/images/section4/images/coursesimg-1.svg";
import CoursesImg2 from "../../../assets/images/section4/images/coursesimg-2.svg";
import CoursesImg3 from "../../../assets/images/section4/images/coursesimg-3.svg";
import CoursesImg4 from "../../../assets/images/section4/images/coursesimg-4.svg";
import CoursesImg5 from "../../../assets/images/section4/images/coursesimg-5.svg";
import CoursesImg6 from "../../../assets/images/section4/images/coursesimg-6.svg";

import CouorseProfile1 from "../../../assets/images/section4/images/courseProfile1.svg";

const Section4 = () => {
  const cardData = [
    {
      id: "1",
      image: CoursesImg1,
      head: "Fundamentals of music theory",
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
      head: "Organization Foundation",
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
      head: "Business Intelligence analyst",
      profileImg: CouorseProfile1,
      name: "Courtney Henry",
      desgination: "PROJECT MANAGER",
      price: "$473.00",
      duration: "20 Hours",
      lessons: "15 Lessons",
    },
  ];
  return (
    <div className="section4-container">
      <div className="container">
        <h3 className="mb-4" data-aos="zoom-in-down">Best Courses</h3>
        <h2 style={{marginBottom:"5rem"}} data-aos="zoom-in-down">Course Subjects That Suits You</h2>
        <div className="row">
          {cardData.map((items) => (
            <div className="col-lg-4 mb-5 justify-content-center" key={items.id} data-aos="fade-up">
              <Courses 
              duration={items.duration}
              image={items.image}
              head={items.head}
              profileImg={items.profileImg}
              name={items.name}
              desgination={items.desgination}
              price={items.price}
              lessons={items.lessons}/>
            </div>
          ))}
        </div>
        {/* <Courses /> */}
      </div>
    </div>
  );
};
export default Section4;
