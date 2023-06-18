import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/index.css";
import "../Helper/Responsive.css";
import "../Helper/SlickCarousel.css";
import { useLocation } from "react-router-dom";
import Dhakad from "../../Assets/Images/Dhakad99x45.png";
import Cinema from "../../Assets/Images/Dhakad119x31.png";
import Logo from "../../Assets/Images/Dhakad70x70.png";
import dhaakadLogo from "../../Assets/Images/dhaakad_logo.svg"
import SearchIcon from "@material-ui/icons/Search";
import SearchBox from "../../Screen/SearchBox";
import SideNavigation from "../../Screen/SideNavigation";
import { connect } from "react-redux";
function Navbar() {
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light top-navbar">
          <div className="container navbar-container">
            <div className="logo-dhaakad-cinema">
              <NavLink to="/">
                <img className="Dhakad" src={Dhakad} alt="Dhakad" />
                <img className="Cinema" src={Cinema} alt="Cinema" />
                <img className="navbar-logo-img" src={dhaakadLogo} alt="Logo" />
              </NavLink>
            </div>
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-dhaakad-cinema">
              <li className="nav-item active-link">
                <NavLink exact to="/" activeClassName="active_div">
                  Home
                </NavLink>
              </li>
              <li className="nav-item active-link">
                <div className="dropdown">
                  <NavLink
                    activeClassName="active_div"
                    to={pathname}
                    isActive={() =>
                      ["/about-company", "/about-founder"].includes(pathname)
                    }
                  >
                    About us
                  </NavLink>
                  <div className="dropdown-content">
                    <NavLink to="/about-company">About Company</NavLink>
                    <NavLink to="/about-founder">About Founder</NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item active-link">
                <NavLink to="/submit-movie" activeClassName="active_div">
                  Submit your movie
                </NavLink>
              </li>
            </ul>
            <div className="material-icons d-flex">
              <div className="search-container">
                <SearchBox />
                <SearchIcon className="searchIcon" />
              </div>
              <SideNavigation />
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default connect(null, {})(Navbar);
