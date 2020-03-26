import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProperties }) => (
  <button className="custom-button" {...otherProperties}>
    {children}
  </button>
);

export default CustomButton;
