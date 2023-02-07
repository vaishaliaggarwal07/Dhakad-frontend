import React from "react";
import "../Components/Helper/Style.css";
import Images from "../../src/Assets/Images/dhakadcinema-org1.png";
import { Link } from "react-router-dom";

const CouponCard = (props) => {
  return (
    <React.Fragment>
      <div className="reward-cards-wrapper col-sm-4 col-xl-3 col-lg-4">
        <div className="card reward-coupon-card">
          <div className="card-header">
            <div className="coupon-card-heading">
              <h4>
                {props.heading}({props.ccode})
              </h4>
              <span>{props.sabheading}</span>
            </div>
            <div className="coupon-card-logo">
              <img className="coupon-logo-img" src={Images} alt="logo" />
            </div>
          </div>
          <div className="card-body">
            <div className="reward-card-description">{props.paragraph}</div>
            <div className="reward-amount text-center">
              <b>{props.rupees}</b>
            </div>
            <div className="term-and-conditon text-center">
              <Link to="/term&conditions" className="modal-form-sign-in-option">
                Terms
              </Link>
              and
              <Link to="/term&conditions" className="modal-form-sign-in-option">
                conditions
              </Link>
              apply
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CouponCard;
