import React from "react";
import "./CourseComponent.css";

const CourseComponent = ({
  image,
  category,
  author,
  course,
  duration,
  students,
  price,
}) => {
  return (
    <div className="course-individual-component">
      <div className="card">
        <div>
          <p className="category-cont">{category}</p>
          <img src={image} className="img-fluid" />
          <a href="#!">
            <div></div>
          </a>
        </div>
        <div className="card-body">
          <p>
            by <span className="author-cont">{author}</span>
          </p>
          <h5 className="card-title ">{course}</h5>
          <div className="d-flex gap-5">
            <p className="duration-element">{duration}</p>
            <p className="students-element">{students}</p>
          </div>
          <div className="lining"></div>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-1">
              <p>{price}</p>
              <span className="free-class">Free</span>
            </div>
            <a href="" className="view-more">
              View more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseComponent;
