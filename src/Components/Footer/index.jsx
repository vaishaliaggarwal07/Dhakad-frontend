import React from "react";
import "../../Components/Footer/index.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/X";
import XIcon from "../../Assets/Images/x.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import MessengerCustomerChat from "react-messenger-customer-chat";
import makeInIndiaLogo from '../../Assets/Images/Make-in-India-Logo-PNG-HD_2.svg'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer-section-main ">
        <MessengerCustomerChat
          pageId="100081339519023"
          appId="3210165435893714"
        />
        <div className="footer-icons">
          <Link to={{ pathname: "https://www.linkedin.com/company/dhaakad-cinema" }} target="_blank">
            <LinkedInIcon className="LinkedInIcon" />
          </Link>
          <Link to={{ pathname: "https://www.youtube.com/@dhaakadcinema5304" }} target="_blank">
            <YouTubeIcon className="YouTubeIcon" />
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/100069099051794" }} target="_blank">
            <FacebookIcon className="FacebookIcon" />
          </Link>
          <Link to={{ pathname: "https://twitter.com/DhaakadCinema" }} target="_blank">

            <img src={XIcon} className="Xicon"style={{ width: "26px", height: "26px",  margin: "0px 10px"
 }}  />
          </Link>
          <Link to={{ pathname: "https://www.instagram.com/dhaakadcinema/?hl=en" }} target="_blank">
            <InstagramIcon className="InstagramIcon" />
          </Link>
        </div>
        <hr className="line-footer" />
        <div className="container  footer-text">
          <div className="row align-content-center mb-2">
            <div className="col-12">
              <NavLink to="/privacy-policy" className="footer-link mr-1" activeClassName="active_div">Privacy Policy</NavLink>
              <NavLink to="/grievance" className="footer-link mr-1" activeClassName="active_div">Grievance</NavLink>
              <NavLink to="/faq" className="footer-link mr-1" activeClassName="active_div">FAQ</NavLink>
              <NavLink to="/user-agreement" className="footer-link mr-1" activeClassName="active_div">User Agreement</NavLink>
              <NavLink to="/terms-and-conditions" className="footer-link mr-1" activeClassName="active_div">Terms & Conditions</NavLink>
            </div>
          </div>
          <p>Copyright 2021 © Dhaakad Cinema Pvt. Ltd. All Rights Reserved. </p>
          <p className="startup-text">Dhaakad Cinema is an Indian Start Up recognized by Govt Of India , DIPP no 91222</p>
          {/* <img src={makeInIndiaLogo}/> */}
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
