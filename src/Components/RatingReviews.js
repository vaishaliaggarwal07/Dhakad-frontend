import React from "react";
import { connect } from "react-redux";
const RatingReview = (props) => {
  return (
    <React.Fragment>
      <div className="review-wrapper" key={props.key}>
        <div className="card user-review-card">
          <div className="user-review-card-header">
            <div className="user-review-profile">
              <div className="user-review-profile-img">
                <img src={props.userProfile} alt="." />
                <h5 className="user-review-profile-title">{props.userName}</h5>
              </div>
              <span>Reviewed on {props.reviewDate}</span>
            </div>
          </div>
          <div className="user-review-description">
            <div className="user-review-rating-icons">
              {props.startRaing}
              <label className="user-review-start-rating-lable-text">
                {props.lable}
              </label>
            </div>
            <div className="user-review-description-text">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, {})(RatingReview);
