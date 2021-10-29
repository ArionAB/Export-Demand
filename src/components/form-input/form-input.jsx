import react from "react";

import style from "./form-input.styles.scss";

// export const FormInput = ({ handleChange, label, ...otherProps }) => (
//   <div className="group">
//     <input className="form-input" onChange={handleChange} {...otherProps} />
//     <label>{label}</label>
//   </div>
// );
export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);
