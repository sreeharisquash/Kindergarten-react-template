import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./BlogDetailDrop.css";
import { useState } from "react";

function BlogDetailDrop({ categoryData, activeIcon, inactiveIcon , head }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (nextOpenState, event, metadata) => {
    setIsOpen(nextOpenState);
  };
  return (
    <div className="faq-drop">
      <DropdownButton
        id="faq-dropdown"
        title={
          <span className="d-flex justify-content-between" style={{alignItems:"inherit"}}>
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
              <p className={item.Class}>{item.title}</p>
              <p>{item.number}</p>
            </div>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default BlogDetailDrop;
