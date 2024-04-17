import React from "react";
import "./Comments.css";

const Comments = ({ profile, name, para, date }) => {
  return (
    <div className="comments-container">
      <div className="profile">
        <img src={profile} alt="" />
      </div>
      <div className="content">
        <div className="d-flex justify-content-between align-items-baseline">
          <h5>{name}</h5>
          <p className="content-date">{date}</p>
        </div>

        <p>{para}</p>
        <span className="content-para">Reply</span>
      </div>
    </div>
  );
};
export default Comments;
