import React from "react";

const InputElement = ({
  labelName,
  type,
  onChange,
  placeholder,
  name,
  value,
  labelClass, 
  inputDivClass,
  className,
  inputMainClass,
}) => {
  return (
    <div className={inputMainClass}>
      {labelName && <label className={labelClass}>{labelName}</label>}
      <div className={inputDivClass}>
        <input
          className={className}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

InputElement.defaultProps = {
  type: "text",
  className: "form-control mb-2",
  name: "change name",
  labelClass: "col-sm-12 col-md-2 col-form-label",  
  inputDivClass: "col-sm-12 col-md-10",
  inputMainClass: "form-group row",
};

export default InputElement;
