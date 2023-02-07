import React from "react";

const DhakadRating = (props) => {
  return (
    <React.Fragment>
      <div className="dhakad-rating-sec">
        <div className="dhakad-rating-title-sec">
          <h6>Dhaakad Rating</h6>
          <img src={props.reatingIcon} alt="." />
          <span className="dhakad-rating-tooltip-btn">i</span>

          <div className="dhakad-rating-tooltip">
            <span>{props.tooltipText}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DhakadRating;
