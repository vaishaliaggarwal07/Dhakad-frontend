import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";
import ProfileImg from "./ProfileImg";

const BottomNavbar = () => {
  return (
    <React.Fragment>
      <div className="bottom-navbar">
        <div className="container-fluid">
          <div className="bottom-navbar-inner">
            <div className="bottom-navbar-profile-sec">
              <ProfileImg />
            </div>
          </div>
        </div>
        <div className="bottom-navbar-menu">
          <div className="container-fluid">
            <div className="bottom-navbar-menu-outer">
              <nav className="navbar navbar-expand-sm">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/profile"
                      activeClassName="active_class"
                      className="nav-link"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/pre-booked"
                      activeClassName="active_class"
                      className="nav-link"
                    >
                      Pre Booked
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/streaming-library"
                      activeClassName="active_class"
                      className="nav-link"
                    >
                      Streaming Library
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/rented-movies"
                      activeClassName="active_class"
                      className="nav-link"
                    >
                      Rented Movie
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/coupons"
                      activeClassName="active_class"
                      className="nav-link"
                    >
                      Coupons
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/rewards"
                      activeClassName="active_class"
                      className="nav-link"
                    >
                      Rewards
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/purchase-history"
                      activeClassName="active_class"
                      className="nav-link"
                    >
                      Purchase history
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BottomNavbar;
