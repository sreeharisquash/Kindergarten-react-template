import React from "react";
import "./CommonButton.css";

const CommonButton = ({ label, backgroundColor, fontColor }) => {
  const Design = {
    label: label,
    backgroundColor: backgroundColor,
    color: fontColor,
  };
  return (
    <button style={Design} className="common-btn">
      {label}
    </button>
  );
};
export default CommonButton;
