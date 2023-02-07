import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const UniqueBtn = (props) => {
  return (
    <React.Fragment>
      <button
        style={{ boxShadow: "none" }}
        type="button"
        className={props.iconsClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.icon}
        {props.title}
      </button>
    </React.Fragment>
  );
};

UniqueBtn.defaultProps = {
  icon: <ArrowRightIcon />,
  iconsClass: "btn btn-primary",
};
export default UniqueBtn;
