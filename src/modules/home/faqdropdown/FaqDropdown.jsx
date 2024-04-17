import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./FaqDropdown.css";
import { useState } from "react";


function DropdownItemTags({ dropdownTitle, para, activeIcon, inactiveIcon , number}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (nextOpenState, event, metadata) => {
    setIsOpen(nextOpenState);
  };
  return (
    <div className="faq-drop">
      <DropdownButton
        id="dropdown-item-button"
        title={
          <span className="d-flex">
            <h5 className="text-black">{dropdownTitle} </h5>
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
        <Dropdown.ItemText>
          <div className="d-flex justify-content-between">
          <p>{para}</p>
          <p>{number}</p>
          </div>
          
        </Dropdown.ItemText>
      </DropdownButton>
    </div>
  );
}

export default DropdownItemTags;
