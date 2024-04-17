import React from "react";
import "./Section6.css";
import TeamMember1 from "../../../assets/images/section6/images/team-member-1.svg";
import TeamMember2 from "../../../assets/images/section6/images/team-member-2.svg";
import TeamMember3 from "../../../assets/images/section6/images/team-member-3.svg";

const Section6 = () => {
  const teamMembers = [
    { id: "1", Image: TeamMember1 },
    { id: "2", Image: TeamMember2 },
    { id: "3", Image: TeamMember3 },
  ];
  return (
    <div className="section6-container">
      <div className="container">
        <h3 className="mb-4" data-aos="zoom-in-down">Team members</h3>
        <h2 className="mb-5" data-aos="zoom-in-down">Meet Our Expert Instructor</h2>
        <div className="row bordering-items">
          {teamMembers.map((items) => (
            <div className="col-lg-4" data-aos="fade-up">
              <div key={items.id} className="border-blue">
                <img src={items.Image} alt="" className="border-blue-img img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section6;
