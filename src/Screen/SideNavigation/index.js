import React, { useState, useEffect } from "react";
import "../../Screen/SideNavigation/index.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { RiMovie2Fill } from "@react-icons/all-files/ri/RiMovie2Fill";
import { FaStream } from "@react-icons/all-files/fa/FaStream";
import { BsFillGiftFill } from "@react-icons/all-files/bs/BsFillGiftFill";
import { RiCoupon2Fill } from "@react-icons/all-files/ri/RiCoupon2Fill";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { BiPurchaseTagAlt } from "@react-icons/all-files/bi/BiPurchaseTagAlt";
import { FaUserPlus } from "@react-icons/all-files/fa/FaUserPlus";
import Login from "../../Components/Helper/Modal/Login";
import { logOutUser } from "../../Redux/Actions/auth";
import { connect, useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions/auth";
import ForgetPassword from "../../Components/Helper/Modal/ForgetPassword";
import CreateNewPassword from "../../Components/Helper/Modal/CreateNewPassword";
function SideNavigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const token = localStorage.getItem("token");
  const isAuthenticated = token;
  useEffect(() => {
    document.addEventListener("click", closeMobileMenu, true);
    return () => {
      document.removeEventListener("click", closeMobileMenu, false);
    };
  }, [click]);
  //
  const userId = localStorage.getItem("id");
  const getUserDataById = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);
  const userDetails = getUserDataById?.user?.data?.user;

  return (
    <>
      <div className="movies-sidebar-wrapper">
        <div className="material-personaddicon" onClick={handleClick}>
          {click ? (
            <CloseIcon className="nav-icon" />
          ) : (
            <MenuIcon className="nav-icon" />
          )}
        </div>
        <div className="navbar-nav profile-list res-side-navigation">
          <ul className={click ? " nav-menu active" : "nav-menu "}>
            <div className="custom-profile">
              <h1>{userDetails?.firstName}</h1>
              <CgProfile className="person-outline" />
            </div>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink
                    onClick={closeMobileMenu}
                    exact={true}
                    to="/profile"
                    className="nav-link"
                  >
                    <CgProfile className="profile-icons" />
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeMobileMenu}
                    exact={true}
                    to="/pre-booked"
                    className="nav-link"
                  >
                    <RiMovie2Fill className="profile-icons" />
                    Pre Booked
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeMobileMenu}
                    exact={true}
                    to="/streaming-library"
                    className="nav-link"
                  >
                    <FaStream className="profile-icons" />
                    Streaming Library
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    to="/rented-movies"
                    className="nav-link"
                  >
                    <BiPurchaseTagAlt className="profile-icons" />
                    Rented Movie
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeMobileMenu}
                    exact={true}
                    to="/coupons"
                    className="nav-link"
                  >
                    <RiCoupon2Fill className="profile-icons" />
                    Coupons
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeMobileMenu}
                    exact={true}
                    to="/rewards"
                    className="nav-link"
                  >
                    <BsFillGiftFill className="profile-icons" />
                    Rewards
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} to="/support" className="nav-link">
                    <BiSupport className="profile-icons" />
                    Help and Support
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}

            {isAuthenticated ? (
              <li className="nav-item">
                <NavLink
                  exact={true}
                  onClick={logOutUser}
                  to="/"
                  className="nav-link"
                >
                  <FiLogOut className="profile-icons" />
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink exact={true} to="/register" className="nav-link">
                    <FaUserPlus className="profile-icons" />
                    Sign Up
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact={true}
                    to="..."
                    onClick={(e) => e.preventDefault()}
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    <FiLogIn className="profile-icons" />
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <Login modalId={"loginModal"} />
          <ForgetPassword modalId={"forgotmodal"} />
          <CreateNewPassword modalId={"createnewpass"} />
        </div>
      </div>
    </>
  );
}
export default connect(null, { logOutUser })(SideNavigation);
