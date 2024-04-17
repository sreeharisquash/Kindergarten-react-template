import React from "react";
import "./BlogDetail.css";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import MainImg from "../../../assets/images/blogdetail/images/blogdetail-mainimg.svg";
import BlogDetailCarousal from "../blogdetailcarousal/BlogDetailCarousal";
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
import RecentImg1 from "../../../assets/images/blogdetail/images/recentimg-1.svg";
import RecentImg2 from "../../../assets/images/blogdetail/images/recentimg-2.svg";
import RecentImg3 from "../../../assets/images/blogdetail/images/recentimg-3.svg";
import DropdownItemTags from "../faqdropdown/FaqDropdown";
import ActiveIcon from "../../../assets/images/coursedetail/icons/Arrow - Down 2.svg";
import InactiveIcon from "../../../assets/images/coursedetail/icons/dropdowInactive.svg";
import BlogDetailDrop from "../blogdetaildrop/BlogDetailDrop";

const BlogDetail = () => {
  const subData = [
    {
      id: "1",
      designation: "Admin",
      date: "Jan 24, 2024",
      comment: "20 Comments",
    },
  ];
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

  const categoryData = [
    { id: "1", title: "Commercial", number: "15" },
    { id: "2", title: "Office", number: "15" },
    { id: "3", title: "Web design", number: "15" },
    { id: "4", title: "Educate", number: "15" },
    { id: "5", title: "Acdemy", number: "15" },
    { id: "6", title: "Single family home", number: "15" },
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
  const tagsData = [
    { id: "1", title: "Free couses" },
    { id: "2", title: "Marketing" },
    { id: "3", title: "Idea" },
    { id: "4", title: "LMS" },
    { id: "5", title: "LearnPress" },
    { id: "6", title: "Instructor" },
  ];

  return (
    <div className="blog-detail-container">
      <Header />

      <div className="blogdetail-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>The standard Lifestyle Podcasts</h2>
            {subData.map((items) => (
              <div className="d-flex gap-4 mt-3" key={items.id}>
                <p className="designation-para">{items.designation}</p>
                <p className="date-para">{items.date}</p>
                <p className="comment-para">{items.comment}</p>
              </div>
            ))}
            <div className="image-content">
              <img
                src={MainImg}
                alt=""
                style={{ maxWidth: "100%", marginBottom: "1.875rem" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                facilisis faucibus odio arcu duis dui, adipiscing facilisis.
                Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in.
                Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus
                bibendum augue id cras purus. At eget euismod cursus non.
                Molestie dignissim sed volutpat feugiat vel enim eu turpis
                imperdiet.
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                facilisis faucibus odio arcu duis dui, adipiscing facilisis.
                Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in.
                Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus
                bibendum augue id cras purus.
              </p>
            </div>
            <div className="single-testimonial">
              <p>
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu
              </p>
              <h3 className="mt-4   ">Kristin Watson</h3>
            </div>
            <div className="tags row ">
              <h6 className="col-lg-1">Tags:</h6>
              {tags.map((items) => (
                <div className="tag-container col-lg-2" key={items.id}>
                  {items.tag}
                </div>
              ))}
            </div>
            <div className="share">
              <h6>Share:</h6>
              {shareData.map((items) => (
                <div key={items.id}>
                  <img src={items.icon} alt="" className="onImgHover" />
                </div>
              ))}
            </div>
            <div className="carousal-secion">
              <BlogDetailCarousal />
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
            <div className="input-contain">
              <h3>Leave a comment</h3>
              <p className="important-symb mb-4">
                Your email address will not be published. Required fields are
                marked
              </p>
              <div className="d-flex gap-3 blog-det">
                {/* <input type="text" placeholder="Name" /> */}
                <div className="blog-det">
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
                <div className="blog-det">
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
                  Save my name, email in this brower for the next time I comment
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
            <div className="blogdetail-drop">
              <BlogDetailDrop
                categoryData={categoryData}
                head="Category"
                activeIcon={ActiveIcon}
                inactiveIcon={InactiveIcon}
              />
            </div>
            <div className="recent-post">
              <h5>Recent posts</h5>
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
            {/* <div className="tags-cont">
            <h5>Tags</h5>
            <div className="">
              {tagsData.map((items) => (
                  <div>
                    <p>{items.title}</p>
                  </div>
              ))}
            </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default BlogDetail;
