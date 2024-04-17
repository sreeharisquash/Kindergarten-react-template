import React, { startTransition } from "react";
import "./Blog.css";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import CourseComponent from "../coursecomponent/CourseComponent";
import CourseImg1 from "../../../assets/images/course/images/mainCourse-1.svg";
import CourseImg2 from "../../../assets/images/course/images/mainCourse-2.svg";
import CourseImg3 from "../../../assets/images/course/images/mainCourse-3.svg";
import CourseImg4 from "../../../assets/images/course/images/mainCourse-4.svg";
import CourseImg5 from "../../../assets/images/course/images/mainCourse-5.svg";
import CourseImg6 from "../../../assets/images/course/images/mainCourse-6.svg";
import CourseImg7 from "../../../assets/images/course/images/mainCourse-7.svg";
import CourseImg8 from "../../../assets/images/course/images/mainCourse-8.svg";
import CourseImg9 from "../../../assets/images/course/images/mainCourse-9.svg";
import BlogComponent from "../blogcomponent/BlogComponent";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const coursecomponentData = [
    {
      id: "1",
      image: CourseImg1,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "2",
      image: CourseImg2,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "3",
      image: CourseImg3,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "4",
      image: CourseImg4,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "5",
      image: CourseImg5,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "6",
      image: CourseImg6,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "7",
      image: CourseImg7,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "8",
      image: CourseImg8,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
    {
      id: "9",
      image: CourseImg9,
      head: "nteger tincidunt. Cras dapibus. Vivamus.",
      designation: " Admin",
      date: "Jan 02, 2024",
      students: "156 Students",
      para: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus u...",
    },
  ];
  
  return (
    <div className="blog-container">
        <Header />

      <div className="blog-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {coursecomponentData.map((items) => (
            <div
              key={items.id}
              className="col-lg-4"
              style={{ marginBottom: "1.875rem" }}
            >
              <BlogComponent
                image={items.image}
                head={items.head}
                designation={items.designation}
                date={items.date}
                para={items.para}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
