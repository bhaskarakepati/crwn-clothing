import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otheProperties }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otheProperties} />
    {label ? (
      <label
        className={`${
          otheProperties.value.length ? "shrink" : ""
        }form-input-label`}
      >
        {label}
      </label>
    ) : (
      label
    )}
  </div>
);

export default FormInput;
