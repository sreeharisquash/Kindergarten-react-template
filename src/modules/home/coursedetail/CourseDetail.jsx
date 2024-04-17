import React, { useState } from "react";
import "./CourseDetail.css";
import "../../../modules/home/blogdetail/BlogDetail.css";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import ImgMain from "../../../assets/images/coursedetail/images/cousedetail-img.svg";
import Overview from "./tabs/overview/Overview";
import Curriculum from "./tabs/curriculum/Curriculum";
import Instructor from "./tabs/instructor/Instructor";
import Review from "./tabs/review/Review";
import ShareFb from "../../../assets/images/blogdetail/icons/share-fb.svg";
import SharePint from "../../../assets/images/blogdetail/icons/share-pint.svg";
import ShareInsta from "../../../assets/images/blogdetail/icons/share-insta.svg";
import ShareTwit from "../../../assets/images/blogdetail/icons/share-twit.svg";
import ShareYt from "../../../assets/images/blogdetail/icons/share-yt.svg";
import CommentsImg1 from "../../../assets/images/comments/images/comments-prof-1.svg";
import CommentsImg2 from "../../../assets/images/comments/images/comments-prof-2.svg";
import CommentsImg3 from "../../../assets/images/comments/images/comments-prof-3.svg";
import Comments from "../comments/Comments";
import CommonButton from "../../button/CommonButton";
import ActiveIcon from "../../../assets/images/coursedetail/icons/Arrow - Down 2.svg";
import InactiveIcon from "../../../assets/images/coursedetail/icons/dropdowInactive.svg";
import RecentImg1 from "../../../assets/images/blogdetail/images/recentimg-1.svg";
import RecentImg2 from "../../../assets/images/blogdetail/images/recentimg-2.svg";
import RecentImg3 from "../../../assets/images/blogdetail/images/recentimg-3.svg";

import CourseDetailDrop from "../coursedetaildrop/CourseDetailDrop";
import { data } from "isotope-layout";

const CourseDetail = () => {
  const subData = [
    {
      id: "1",
      designation: "Determined-poitras",
      date: "Jan 24, 2024",
      comment: "20 Comments",
    },
  ];

  const [activeSection, setActiveSection] = useState("overview");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  const tags = [
    { id: "1", tag: "Courses" },
    { id: "2", tag: "Idea" },
    { id: "3", tag: "LMS" },
    { id: "4", tag: "LearnPress" },
    { id: "5", tag: "Instructor" },
  ];
  const shareData = [
    { id: "1", icon: ShareFb },
    { id: "2", icon: SharePint },
    { id: "3", icon: ShareTwit },
    { id: "4", icon: ShareInsta },
    { id: "5", icon: ShareYt },
  ];

  const dataIcon = [
    { id: "1", class: "lecture", title: "202 lectures" },
    { id: "2", class: "clock", title: "19h 37m" },
    { id: "3", class: "folder", title: "6 Sections" },
  ];
  const commentData = [
    {
      id: "1",
      profile: CommentsImg1,
      name: "Annette Black",
      para: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      date: "October 03, 2022",
      class: "main-comment",
    },
    {
      id: "2",
      profile: CommentsImg2,
      name: "Annette Black",
      para: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      date: "October 03, 2022",
      class: "sub-comment",
    },
    {
      id: "3",
      profile: CommentsImg3,
      name: "Annette Black",
      para: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      date: "October 03, 2022",
      class: "first-comment",
    },
  ];
  const detailDrop = [
    {
      id: "1",
      dropdownTitle: "Getting Started",
      item: [
        { main: "What’s is Webflow?", size: "07:31" },
        { main: "What’s is Webflow?", size: "07:31" },
      ],
      activeIcon: ActiveIcon,
      inactiveIcon: InactiveIcon,
      design: "play-before",
      lecture: "4 lectures",
      duration: "51m",
    },
    {
      id: "2",
      dropdownTitle: "Secret of Good Design",
      item: [
        { main: "What’s is Webflow?", size: "07:31" },
        { main: "What’s is Webflow?", size: "07:31" },
      ],
      activeIcon: ActiveIcon,
      inactiveIcon: InactiveIcon,
      design: "play-before",
      lecture: "4 lectures",
      duration: "51m",
    },
    {
      id: "3",
      dropdownTitle: "Web Development (webflow)",
      item: [
        { main: "What’s is Webflow?", size: "07:31" },
        { main: "What’s is Webflow?", size: "07:31" },
      ],
      activeIcon: ActiveIcon,
      inactiveIcon: InactiveIcon,
      design: "play-before",
      lecture: "4 lectures",
      duration: "51m",
    },
  ];

  const courseDetail = [
    {
      id: "1",
      title: "Course Duration",
      class: "duration",
      duration: "6 Month",
    },
    {
      id: "2",
      title: "Course Level",
      class: "level",
      duration: "Beginner",
    },
    {
      id: "3",
      title: "Course Duration",
      class: "enrolled",
      duration: "69,419,618",
    },
    {
      id: "4",
      title: "Course Duration",
      class: "language",
      duration: "Mandarin",
    },
    {
      id: "5",
      title: "Course Duration",
      class: "subtitle",
      duration: "English",
    },
  ];

  const courseIncludes = [
    { id: "1", title: "Lifetime access", class: "access" },
    { id: "2", title: "30-days money-back guarantee", class: "guarantee" },
    {
      id: "3",
      title: "Free exercises file & downloadable resources",
      class: "resources",
    },
    {
      id: "4",
      title: "Shareable certificate of completion",
      class: "completion",
    },
    { id: "5", title: "Access on mobile , tablet and TV", class: "tv" },
    { id: "6", title: "English subtitles", class: "english" },
    { id: "7", title: "100% online course", class: "online" },
  ];

  const recentData = [
    {
      id: "1",
      image: RecentImg1,
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "Jan 24, 22023",
    },
    {
      id: "2",
      image: RecentImg2,
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "Jan 24, 22023",
    },
    {
      id: "3",
      image: RecentImg3,
      title: "Best LearnPress WordPress Theme Collection for 2023",
      date: "Jan 24, 22023",
    },
  ];
  return (
    <div className="coursedetail-container">
      <div className="coursedetail-breadcrumb">
        <Header />
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <div className="coursedetail-content">
          <div className="row">
            <div className="col-lg-8">
              <h2>Web Development Full Course</h2>
              {subData.map((items) => (
                <div
                  className="d-flex gap-4 mt-3 determined-data"
                  key={items.id}
                >
                  <p className="designation-para">{items.designation}</p>
                  <p className="date-para">{items.date}</p>
                  <p className="comment-para">{items.comment}</p>
                </div>
              ))}
              <div className="image-cont">
                <img
                  src={ImgMain}
                  alt=""
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="tabs-cont">
                <div className="row">
                  <div className="col-lg-3 ">
                    <h5
                      onClick={() => handleClick("overview")}
                      className={
                        activeSection === "overview"
                          ? "active-tab"
                          : "tab-class"
                      }
                    >
                      Overview
                    </h5>
                  </div>
                  <div className="col-lg-3">
                    <h5
                      onClick={() => handleClick("curriculum")}
                      className={
                        activeSection === "curriculum"
                          ? "active-tab"
                          : "tab-class"
                      }
                    >
                      Curriculum
                    </h5>
                  </div>
                  <div className="col-lg-3">
                    <h5
                      onClick={() => handleClick("instructor")}
                      className={
                        activeSection === "instructor"
                          ? "active-tab"
                          : "tab-class"
                      }
                    >
                      Instructor
                    </h5>
                  </div>
                  <div className="col-lg-3">
                    <h5
                      onClick={() => handleClick("review")}
                      className={
                        activeSection === "review" ? "active-tab" : "tab-class"
                      }
                    >
                      Review
                    </h5>
                  </div>
                  <div className="container">
                    {activeSection === "overview" && <Overview />}
                    {activeSection === "curriculum" && <Curriculum />}
                    {activeSection === "instructor" && <Instructor />}
                    {activeSection === "review" && <Review />}
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="tags row ">
                  <h6 className="col-lg-1">Tags:</h6>
                  {tags.map((items) => (
                    <div className="tag-container col-lg-2 mb-3" key={items.id}>
                      {items.tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="share">
                <h6>Share:</h6>
                {shareData.map((items) => (
                  <div className="" key={items.id}>
                    <img src={items.icon} alt="" className="onImgHover" />
                  </div>
                ))}
              </div>
              <div className="contents-cont">
                <div className="inner-cont">
                  <h3>Curriculum</h3>
                  <div className="curriculum-cont">
                    {dataIcon.map((items) => (
                      <div key={items.id}>
                        <p className={items.class}>{items.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="detail-drop">
                {detailDrop.map((items) => (
                  <CourseDetailDrop
                    dropdownTitle={items.dropdownTitle}
                    activeIcon={items.activeIcon}
                    inactiveIcon={items.inactiveIcon}
                    items={items.item}
                    design={items.design}
                    lecture={items.lecture}
                    duration={items.duration}
                  />
                ))}
              </div>

              <div className="comments-section">
                <h3>Comments</h3>
                <p>20 Comments</p>
                <div>
                  {commentData.map((items) => (
                    <div key={items.id} className={items.class}>
                      <Comments
                        profile={items.profile}
                        name={items.name}
                        para={items.para}
                        date={items.date}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="coursedetail-input-contain mb-5">
                <h3>Leave a comment</h3>
                <p className="important-symb">
                  Your email address will not be published. Required fields are
                  marked
                </p>
                <div className="d-flex gap-3">
                  <div className="course-det">
                    <input
                      type="text"
                      id="myInput"
                      name="myInput"
                      required="required"
                    />
                    <label for="myInput" className="hide-cls">
                      Name
                    </label>
                  </div>
                  <div className="course-det">
                    <input
                      type="text"
                      id="myInput"
                      name="myInput"
                      required="required"
                    />
                    <label for="myInput" className="hide-cls">
                      Email
                    </label>
                  </div>
                </div>
                <input type="text" placeholder="Comment" />
                <div className="checkbox-save">
                  <div>
                    <input type="checkbox" className="checkbox-cls" />
                  </div>
                  <p>
                    Save my name, email in this brower for the next time I
                    comment
                  </p>
                </div>

                <CommonButton
                  backgroundColor="#F57005"
                  fontColor="white"
                  label="Post a comment"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-container">
                <div className="bottom-border">
                  <div className="d-flex justify-content-between align-center">
                    <div
                      className="d-flex gap-2"
                      style={{ alignItems: "baseline" }}
                    >
                      <h4>$14.00</h4>
                      <span className="span-cls">$26.00</span>
                    </div>
                    <div className="blue-content">
                      <h6>56% off</h6>
                    </div>
                  </div>
                  <div className="alert-sec mt-3">
                    <p>2 days left at this price!</p>
                  </div>
                </div>
                <div className="course-details">
                  {courseDetail.map((items) => (
                    <div key={items.id} className="detail-align-sec">
                      <h6 className={items.class}>{items.title}</h6>
                      <p>{items.duration}</p>
                    </div>
                  ))}
                </div>
                <div className="buttons-sec1">
                  <CommonButton
                    backgroundColor="#F57005"
                    fontColor="white"
                    label="Add to Cart"
                  />
                </div>
                <div className="buttons-sec1">
                  <CommonButton
                    backgroundColor="#FFEEE8"
                    fontColor="#F57005"
                    label="Buy Now"
                  />
                </div>

                <div className="wishlist-btns">
                  <div className="wishlist-btn">Add to wishlist</div>
                  <div className="wishlist-btn">Gift Course</div>
                </div>
                <div className="note-sec">
                  <h6>Note:</h6>
                  <p>all course have 30-days money-back grade</p>
                </div>
                <div className="course-includes">
                  <h5 className="mb-4">This course includes:</h5>
                  {courseIncludes.map((items) => (
                    <div className="d-flex" key={items.id}>
                      <p className={items.class}>{items.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="recent-post mt-5">
                <h5>Recent Course</h5>
                {recentData.map((items) => (
                  <div key={items.id} className="d-flex gap-3 mt-4">
                    <img src={items.image} alt="" />
                    <div>
                      <h6>{items.title}</h6>
                      <p className="date-before">{items.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CourseDetail;
