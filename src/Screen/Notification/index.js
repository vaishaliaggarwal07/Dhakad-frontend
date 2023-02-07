import React from "react";
import ImageNt from "../../Assets/Images/Ellipse 35.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "../../Screen/Notification/index.css";

function Example() {
  return (
    <React.Fragment>
      <div className="dropdown notifiction-toggle">
        <NotificationsIcon
          className="notifiction-bar dropdown-toggle"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <div className="notification d-flex me-auto">
            <div className="col-sm-2" style={{ marginLeft: "5px" }}>
              <div className="notification-images">
                <img src={ImageNt} className="img-fluid mr-2" alt="ImageNt" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="movie-time-notification">
                <h5>The night</h5>
                <strong className="me-auto pr-4">Hindi</strong>
                <small className="pr-4">HD</small>
                <small className="pr-4">02:55 Hours</small>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="movie-date-notification">
                <small>15 march 2019</small>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Example;
