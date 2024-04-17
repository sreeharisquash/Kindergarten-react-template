import React, { startTransition, useEffect, useState } from "react";
import "./MainCourses.css";
import "../../home/courselist/CourseList.css";
import Header from "../../header/Header";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import CommonDropDown from "../dropdown/CommonDropDown";
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
import BasicPagination from "../pagination/Pagination";
import { Link, useNavigate } from "react-router-dom";
import Search from "../search/Search";
import Isotope from "isotope-layout";

const Course = () => {

  const coursecomponentData = [
    {
      id: "1",
      image: CourseImg1,
      category: "Development",
      author: "Determined-Poitras",
      course: "Web Development Full Course",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "2",
      image: CourseImg2,
      category: "Development",
      author: "Determined-Poitras",
      course: "UI/UX Design",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "3",
      image: CourseImg3,
      category: "Development",
      author: "Determined-Poitras",
      course: "Marketing",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "4",
      image: CourseImg4,
      category: "Development",
      author: "Determined-Poitras",
      course: "Marketing",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "5",
      image: CourseImg5,
      category: "React",
      author: "Determined-Poitras",
      course: "Digital Marketing",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "6",
      image: CourseImg6,
      category: "React",
      author: "Determined-Poitras",
      course: "Frontend Developer",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "7",
      image: CourseImg7,
      category: "Node",
      author: "Determined-Poitras",
      course: "Backend Developer",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "8",
      image: CourseImg8,
      category: "Development",
      author: "Determined-Poitras",
      course: "ReactJs",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
    {
      id: "9",
      image: CourseImg9,
      category: "Node",
      author: "Determined-Poitras",
      course: "Business Analysis",
      duration: " 2Weeks",
      students: "156 Students",
      price: "$29.0",
    },
  ];


  const sortyByData = [
    {
      id: "1",
      label: "Sort by:",
      btnLabel: "Latest",
      item1: "One",
      item2: "Two",
      item3: "Two",
    },
    {
      id: "2",
      label: "Category:",
      btnLabel: "All Category",
      key: "category",
      item1: "All Category",
      item2: "Development",
      item3: "React",
      item4: "Node",
    },
    {
      id: "3",
      label: "Category:",
      btnLabel: "4 Star & Up",
      item1: "One",
      item2: "Two",
      item3: "Two",
    },
  ];

  const paginationData = 10;

  const isotope = React.useRef();
  const [filterKey, setFilterKey] = React.useState("*");
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [isLoading, setIsloading] = useState(true);

  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
      masonry: {
        columnWidth: 40,
        isFitWidth: true,
      },
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  React.useEffect(() => {
    console.log("filter", filterKey);
    setTimeout(() => {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
        setIsloading(false)
    }, 700);
  }, [filterKey]);

  
  const handleCategoryChange = (category, key) => {
    if (key === "category") {
      if (category === "All Category") {
        setFilterKey("*");
      } else {
        setFilterKey(category);
      }
      setSelectedCategory(category);
    }
  };

  return (
    <div className="course-container">
        <Header />

      <div className="course-beadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ padding: "6.25rem 0 0 0" }}>
          <div className="col-lg-3 ">
            <div className="input-group course-input-sec mb-4">
              <div className="form-outline">
                <h6>Search:</h6>
                <Search />
              </div>
            </div>
          </div>
          {sortyByData.map((items) => (
            <div
              key={items.id}
              className="col-lg-3 col-sm-6 mb-5"
            >
              <CommonDropDown
                label={items.label}
                btnLabel={items.btnLabel}
                item1={items.item1}
                item2={items.item2}
                item3={items.item3}
                item4={items.item4}
                onSelectCategory={(category) => handleCategoryChange(category, items.key)}
              />
            </div>
          ))}
        </div>

        <div className="row filter-container" style={{minHeight:"100%"}}>
          {coursecomponentData.map((items) => (
            <div
              key={items.id}
              className={`col-lg-4 col-sm-6  justify-content-center filter-item ${items.category}`}
              style={{ marginBottom: "1.875rem" }}
              // onClick={handleClick}
            >
              <Link to="/courselist">
              <CourseComponent
                image={items.image}
                category={items.category}
                author={items.author}
                course={items.course}
                duration={items.duration}
                students={items.students}
                price={items.price}
              />
              </Link>
            </div>
          ))}
        </div>
        <div className="pagination-container">
          <BasicPagination data={paginationData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Course;
