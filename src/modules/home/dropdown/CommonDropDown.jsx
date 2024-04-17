// CommonDropDown.js
import React, { useState } from "react";
import "./CommonDropDown.css";

const CommonDropDown = ({
  label,
  btnLabel,
  item1,
  item2,
  item3,
  item4,
  onSelectCategory,
}) => {
  const [selectedItem, setSelectedItem] = useState(btnLabel);
 
  const handleCategoryClick = (selectedCategory) => {
    setSelectedItem(selectedCategory);
    onSelectCategory(selectedCategory, 'category');
  };


  return (
    <div className="mini-dropdown">
      <h6>{label}</h6>
      <div
        className="nav-link dropdown-toggle main-title"
        // href=""
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {selectedItem}
      </div>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <div
          className="dropdown-item"
          onClick={() => handleCategoryClick(item1)}
        >
          {item1}
        </div>
        <div
          className="dropdown-item sub-menu"
          onClick={() => handleCategoryClick(item2)}
        >
          {item2}
        </div>
        <div
          className="dropdown-item"
          onClick={() => handleCategoryClick(item3)}
        >
          {item3}
        </div>
        <div
          className="dropdown-item"
          onClick={() => handleCategoryClick(item4)}
        >
          {item4}
        </div>
      </div>
    </div>
  );
};

export default CommonDropDown;
