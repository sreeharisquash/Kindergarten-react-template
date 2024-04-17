import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./CheckDrop.css";
import { useState } from "react";

function CheckDrop({ categoryData, activeIcon, inactiveIcon, head }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (nextOpenState, event, metadata) => {
    setIsOpen(nextOpenState);
  };

  const handleCheckboxClick = (event) => {
    // Prevent the click event from reaching the parent Dropdown.Item
    event.stopPropagation();
  };

  return (
    <div className="check-drop">
      <DropdownButton
        id="faq-dropdown"
        title={
          <span className="d-flex justify-content-between">
            <h5 className={isOpen ? "text-orange-cls" : "text-black"}>
              {head}
            </h5>
            <img
              className="icon-align"
              src={isOpen ? activeIcon : inactiveIcon}
              alt={isOpen ? "Active Dropdown Icon" : "Inactive Dropdown Icon"}
            />
          </span>
        }
        className={`custom-dropdown-arrow ${isOpen ? "dropdown-open" : ""}`}
        onToggle={handleDropdownToggle}
      >
        {categoryData.map((item) => (
          <Dropdown.Item key={item.id}>
            <div className="title-des">
              <div className="d-flex gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={handleCheckboxClick}
                />
                <p className={item.Class}>{item.title}</p>
              </div>
              <p>{item.tools}</p>
            </div>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default CheckDrop;
