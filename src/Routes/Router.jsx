import React, { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../modules/home/homemodule/Home"));
const AboutUs = lazy(() => import("../modules/home/aboutUs/AboutUs"));
const ContactUs = lazy(() => import("../modules/home/contactus/ContactUs"));
const MainCourses = lazy(() =>
  import("../modules/home/maincourses/MainCourses")
);
const ErrorPage = lazy(() => import("../modules/home/404error/ErrorPage"));
const Blog = lazy(() => import("../modules/home/blog/Blog"));
const BlogDetail = lazy(() => import("../modules/home/blogdetail/BlogDetail"));
const CourseDetail = lazy(() =>
  import("../modules/home/coursedetail/CourseDetail")
);
const Faq = lazy(() => import("../modules/home/faq/Faq"));
const ComingSoon = lazy(() => import("../modules/home/comingsoon/ComingSoon"));
const PortfolioDetail = lazy(() =>
  import("../modules/home/portfoliodetail/PortfolioDetail")
);
const CourseList = lazy(() => import("../modules/home/courselist/CourseList"));
const Portfolio = lazy(() => import("../modules/home/portfolio/Portfolio"));

const 
Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Suspense
      fallback={
        isLoading && (
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundColor: "white",
            }}
          ></div>
        )
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/courses" element={<MainCourses />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/course-detail" element={<CourseDetail />} />

        {/* 404 error page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
export default Router;
