import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactus/ContactUs";
import Course from "../maincourses/MainCourses";
import CourseList from "../courselist/CourseList";
import ErrorPage from "../404error/ErrorPage";
import Blog from "../blog/Blog";
import PortfolioDetail from "../portfoliodetail/PortfolioDetail";
import ComingSoon from "../comingsoon/ComingSoon";

const InnerPages = () => {
  return (
    <>
      <AboutUs />
      <ContactUs/>
      <Course/>
      <CourseList/>
      <ErrorPage/>
      <Blog/>
      <PortfolioDetail/>
      <ComingSoon/>
    </>
  );
};
export default InnerPages;
