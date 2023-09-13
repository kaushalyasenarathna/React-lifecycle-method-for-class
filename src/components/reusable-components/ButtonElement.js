import React from "react";

const ButtonElement = ({ type, className, buttonName ,handleFunction}) => {
  return (
    <div >
      <button type={type} className={className} onClick={handleFunction}>
        {buttonName}
      </button>
    </div>
  );
};
ButtonElement.defaultProps = {
  type: "button",
  className: "btn btn-primary",
  buttonName:"submit"
};

export default ButtonElement;
