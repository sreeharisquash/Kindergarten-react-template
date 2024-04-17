import React, { useState } from "react";
import Slider from "react-slider";
import "./RangeSlider.css";

const PriceSlider = () => {
  const [values, setValues] = useState([0, 2000]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <div className="price-slider">
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={0}
        max={2000}
      />
      <div className="ranage-slider-contain">
        <div className="pricing-sec">
          <div className="price-square">
            <label htmlFor="minPrice">$Min:</label>
            <input
              type="number"
              id="minPrice"
              className="minPrice"
              value={values[0]}
              onChange={(e) => handleChange([+e.target.value, values[1]])}
            />
          </div>
        </div>
        <div className="pricing-sec">
          <div className="price-square">
            <label htmlFor="maxPrice">$Max:</label>
            <input
              type="number"
              id="maxPrice"
              className="maxprice"
              value={values[1]}
              onChange={(e) => handleChange([values[0], +e.target.value])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
