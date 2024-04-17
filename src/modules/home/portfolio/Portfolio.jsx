import React, { useState, useRef } from "react";
import "./Portfolio.css";
import "../../home/courselist/CourseList.css";
import Portfolioimg1 from "../../../assets/images/portfolio/images/portfolioimg-1.svg";
import Portfolioimg2 from "../../../assets/images/portfolio/images/portfolioimg-2.svg";
import Portfolioimg3 from "../../../assets/images/portfolio/images/portfolioimg-3.svg";
import Portfolioimg4 from "../../../assets/images/portfolio/images/portfolioimg-4.svg";
import Portfolioimg5 from "../../../assets/images/portfolio/images/portfolioimg-5.svg";
import Portfolioimg6 from "../../../assets/images/portfolio/images/portfolioimg-6.svg";
import Portfolioimg7 from "../../../assets/images/portfolio/images/portfolioimg-7.svg";
import Portfolioimg8 from "../../../assets/images/portfolio/images/portfolioimg-8.svg";
import Portfolioimg9 from "../../../assets/images/portfolio/images/portfolioimg-9.svg";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import CommonDropDown from "../dropdown/CommonDropDown";
import HoverIcon1 from "../../../assets/images/portfolio/icons/hovericon-1.svg";
import HoverIcon2 from "../../../assets/images/portfolio/icons/hovericon-2.svg";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Category");

 
  const portfolioImg = [
    { id: "1", image: Portfolioimg1, category: "React" },
    { id: "2", image: Portfolioimg2, category: "React" },
    { id: "3", image: Portfolioimg3, category: "Node" },
    { id: "4", image: Portfolioimg4, category: "Javascript" },
    { id: "5", image: Portfolioimg5, category: "Javascript" },
    { id: "6", image: Portfolioimg6, category: "Javascript" },
    { id: "7", image: Portfolioimg7, category: "React" },
    { id: "8", image: Portfolioimg8, category: "React" },
    { id: "9", image: Portfolioimg9, category: "React" },
  ];

  const sortyByData = [
    {
      id: "1",
      label: "Sort by:",
      btnLabel: "Latest",
      item1: "All Category",
      item2: "One",
      item3: "Two",
      item4: "Three",
    },
    {
      id: "2",
      label: "Category:",
      btnLabel: "All Category",
      key: "category",
      item1: "All Category",
      item2: "React",
      item3: "Node",
      item4: "Javascript",
    },
    {
      id: "3",
      label: "Rating:",
      btnLabel: "4 Star & Up",
      item1: "All Category",
      item2: "One",
      item3: "Two",
      item4: "Three",
    },
  ];


  const handleCategoryChange = (category ,key) => {
    if(key === 'category'){
    setSelectedCategory(category);
    }
    else{
      setSelectedCategory("All Category")
    }
  };

  return (
    <div className="portfolio-container">
      <Header />
      <div className="portfolio-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="input-group course-input-sec mb-4">
              <div className="form-outline">
                <h6>Search:</h6>
                <Search />
              </div>
            </div>
          </div>

          {/* <div className="row"> */}
          {sortyByData.map((items) => (
            <div key={items.id} className="col-lg-3 col-sm-6 mb-5">
              <CommonDropDown
                label={items.label}
                btnLabel={items.btnLabel}
                item1={items.item1}
                item2={items.item2}
                item3={items.item3}
                item4={items.item4}
                onSelectCategory={(category) => handleCategoryChange(category , items.key)}
                
                // }
              />
            </div>
          ))}
          {/* </div> */}
        </div>

        <div className="row">
          <AnimatePresence>
            {portfolioImg
              .filter(
                (item) =>
                  selectedCategory === "All Category" ||
                  item.category === selectedCategory
              )
              .map((items) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  exit={{ opacity: 0 }}
                  className={`col-lg-4 col-sm-6 mb-4 justify-content-center ${items.category}`}
                  key={items.id}
                >
                  <Link to="/portfolio-detail">
                    <div className="portfolio-img">
                      <div className="d-flex gap-3">
                        <img
                          src={HoverIcon1}
                          alt=""
                          className="hover-icon1"
                          style={{ width: "15%" }}
                        />
                        <img
                          src={HoverIcon2}
                          alt=""
                          className="hover-icon2"
                          style={{ width: "15%" }}
                        />
                      </div>
                      <p className="portfolio-category">{items.category}</p>
                      <img
                        src={items.image}
                        alt=""
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
