import React, { startTransition, useEffect, useState } from "react";
import "./CourseList.css";
import "../maincourses/MainCourses.css";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import CommonDropDown from "../dropdown/CommonDropDown";
import CourseImg1 from "../../../assets/images/course/images/mainCourse-1.svg";
import CourseImg2 from "../../../assets/images/course/images/mainCourse-2.svg";
import CourseImg3 from "../../../assets/images/course/images/mainCourse-3.svg";
import CourseImg4 from "../../../assets/images/course/images/mainCourse-4.svg";
import CourseImg5 from "../../../assets/images/course/images/mainCourse-5.svg";
import CourseImg6 from "../../../assets/images/course/images/mainCourse-6.svg";
import CourseImg7 from "../../../assets/images/course/images/mainCourse-7.svg";
import CourseImg8 from "../../../assets/images/course/images/mainCourse-8.svg";
import CourseComponent from "../coursecomponent/CourseComponent";
import BasicPagination from "../pagination/Pagination";
import ActiveIcon from "../../../assets/images/coursedetail/icons/Arrow - Down 2.svg";
import InactiveIcon from "../../../assets/images/coursedetail/icons/dropdowInactive.svg";
import BlogDetailDrop from "../blogdetaildrop/BlogDetailDrop";
import CheckDrop from "../checkdop/CheckDrop";
import Search from "../search/Search";
import Isotope from "isotope-layout";
import { Link, useNavigate } from "react-router-dom";

const CourseList = () => {
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
      item2: "React",
      item3: "Node",
      item4: "Development",
    },
    {
      id: "3",
      label: "Rating:",
      btnLabel: "4 Star & Up",
      item1: "One",
      item2: "Two",
      item3: "Two",
    },
  ];

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
  ];


  const toolsData = [
    { id: "1", title: "HTML 5", tools: "1345" },
    { id: "2", title: "CSS 3", tools: "l2,736" },
    { id: "3", title: "React", tools: "1345" },
    { id: "4", title: "Webflow", tools: "1345" },
    { id: "5", title: "Node.Js", tools: "1345" },
    { id: "6", title: "Laravel", tools: "1345" },
    { id: "7", title: "Saas", tools: "1345" },
    { id: "8", title: "Wordpress", tools: "1345" },
  ];
  const ratingData = [
    { id: "1", title: "5 Star", tools: "1345", Class: "star" },
    { id: "2", title: "4 Star & up", tools: "l2,736", Class: "star" },
    { id: "3", title: "3 Star & up", tools: "1345", Class: "star" },
    { id: "4", title: "2 Star & up", tools: "1345", Class: "star" },
    { id: "5", title: "1 Star & up", tools: "1345", Class: "star" },
  ];
  const courseLevelData = [
    { id: "1", title: "All Level", tools: "1345" },
    { id: "2", title: "Beginner", tools: "l2,736" },
    { id: "3", title: "Intermediate", tools: "1345" },
    { id: "4", title: "Expert", tools: "1345" },
  ];

  const categoryData = [
    { id: "1", title: "Commercial", Class: "development" },
    { id: "2", title: "Business", Class: "Business" },
    { id: "3", title: "Finance & Accounting", Class: "Finance" },
    { id: "4", title: "IT & Software", Class: "Software" },
    { id: "5", title: "Office Productivity", Class: "Productivity" },
    { id: "6", title: "Personal Development", Class: "Personal" },
    { id: "7", title: "Marketing", Class: "Marketing" },
  ];

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
    <div className="courselist-container">
        <Header />

      <div className="courselist-breadcrumbs">
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
            <div key={items.id} className="col-lg-3 col-sm-6 mb-5">
              {/* {console.log("Debug - items:", items)} */}
              <CommonDropDown
                label={items.label}
                btnLabel={items.btnLabel}
                item1={items.item1}
                item2={items.item2}
                item3={items.item3}
                item4={items.item4}
                onSelectCategory={(category) =>
                  handleCategoryChange(category, items.key)
                }
              />
            </div>
          ))}
        </div>

        <div className="row ">
          <div className="col-lg-8">
            <div className="row filter-container" style={{maxHeight:"100%"}}>
              {coursecomponentData.map((items) => (
                <div
                  key={items.id}
                  className={`col-lg-6 filter-item col-sm-6 ${items.category}`}
                  style={{ marginBottom: "1.875rem" }}
                  // onClick={handleClick}
                >
                  <Link to="/course-detail">
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
          </div>
          <div className="col-lg-4 side-dropdown">
            {/* First dropdown  */}

            <div className="courselist-drop">
              <BlogDetailDrop
                categoryData={categoryData}
                head="Category"
                activeIcon={ActiveIcon}
                inactiveIcon={InactiveIcon}
              />
            </div>

            {/* second dropdown  */}

            <CheckDrop
              categoryData={toolsData}
              head="Tools"
              activeIcon={ActiveIcon}
              inactiveIcon={InactiveIcon}
            />
            {/* Third dropdown  */}

            <div className="rating-drop">
              <CheckDrop
                categoryData={ratingData}
                head="Rating"
                activeIcon={ActiveIcon}
                inactiveIcon={InactiveIcon}
              />
            </div>
            {/* Fourth dropdown  */}

            <div className="course-drop">
              <CheckDrop
                categoryData={courseLevelData}
                head="Course Level"
                activeIcon={ActiveIcon}
                inactiveIcon={InactiveIcon}
              />
            </div>
          </div>
        </div>
        <BasicPagination />
      </div>
      <Footer />
    </div>
  );
};
export default CourseList;
