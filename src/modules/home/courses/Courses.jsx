import React from "react";
import "./Courses.css";
import StripeImg from "../../../assets/images/section4/images/courses-stripe.svg";
import Stars from '../../../assets/images/course/icons/bestcourse-stars.svg'

const Courses = ({
  duration,
  image,
  head,
  profileImg,
  name,
  desgination,
  price,
  lessons,
}) => {
  return (
        <div className="course-contents">
          <div className="hours-and-image">
            <p className="duration">{duration}</p>
            <img src={image} alt="" className="main-img img-fluid" />
            <img src={StripeImg} alt="" className="stripe-img" />
          </div>

          <h5>{head}</h5>
          <div className="rating-star">
            <img src={Stars} alt="" />
            <p>25 Reviews</p>
          </div>
          <div className="profileimg-content">
            <img src={profileImg} alt="" />
            <div className="profile-price">
              <div>
                <h5>{name}</h5>
                <p>{desgination}</p>
              </div>
              <div className="lessons-price">
                <h5>{price}</h5>
                <p>{lessons}</p>
              </div>
            </div>
          </div>
        </div>
  );
};
export default Courses;
