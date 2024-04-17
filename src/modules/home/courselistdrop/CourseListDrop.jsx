import React from "react";
import "./CourseDetailDrop.css";
import "../../../modules/home/faq/Faq.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function CourseDetailDrop({
  dropdownTitle,
  items,
  activeIcon,
  inactiveIcon,
  design,
  lecture,
  duration,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (nextOpenState, event, metadata) => {
    setIsOpen(nextOpenState);
  };
  return (
    <div className="course-drop">
      <DropdownButton
        id="dropdown-item-button"
        title={
          <span className="d-flex">
            <img
              className="icon-align-course"
              src={isOpen ? activeIcon : inactiveIcon}
              alt={isOpen ? "Active Dropdown Icon" : "Inactive Dropdown Icon"}
            />
            <h6 className={isOpen? 'orange-color' : 'text-black'}>{dropdownTitle}</h6>
            <div className="lecture-duration">
              <p className="lecture-bef">{lecture}</p>
              <p className="duration-bef">{duration}</p>
            </div>
          </span>
        }
        className={`custom-dropdown-arrow ${isOpen ? "dropdown-open" : ""}`}
        onToggle={handleDropdownToggle}
      >
        <Dropdown.ItemText>
        {items.map((item, index) => (
          <Dropdown.ItemText key={index}>
            <div className="d-flex justify-content-between">
            <h6 className={design}>{item.main}</h6>
            <h6>{item.size}</h6>
            </div>
          </Dropdown.ItemText>
        ))}
        </Dropdown.ItemText>
      </DropdownButton>
    </div>
  );
}
export default CourseDetailDrop;
