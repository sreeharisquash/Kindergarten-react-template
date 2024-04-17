import React, { startTransition } from "react";
import "./BlogComponent.css";
import CommonButton from "../../button/CommonButton";
import { Link, useNavigate } from "react-router-dom";

const BlogComponent = ({ image, head, date, designation, para }) => {
  return (
    <div className="course-individual-component">
      <div className="card">
        {/* <div> */}
        <img src={image} className="img-fluid" />
        <a href="#!"></a>
        {/* </div> */}
        <div className="card-body">
          <h5 className="card-title mb-3 mt-2">{head}</h5>
          <div className="d-flex gap-5">
            <p className="designation-sec">{designation}</p>
            <p className="date-sec">{date}</p>
          </div>
          <p>{para}</p>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <Link to="/blogdetail">
                <CommonButton
                  backgroundColor="#F57005"
                  fontColor="white"
                  label="Read more"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogComponent;
