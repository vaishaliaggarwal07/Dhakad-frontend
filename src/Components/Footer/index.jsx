import React from "react";
import "../../Components/Footer/index.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
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
          <Link to={{ pathname: "https://in.linkedin.com/" }} target="_blank">
            <LinkedInIcon className="LinkedInIcon" />
          </Link>
          <Link to={{ pathname: "https://youtube.com/" }} target="_blank">
            <YouTubeIcon className="YouTubeIcon" />
          </Link>
          <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">
            <FacebookIcon className="FacebookIcon" />
          </Link>
          <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
            <TwitterIcon className="TwitterIcon" />
          </Link>
          <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
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
            </div>
          </div>
          <p>Copyright 2021 © Dhaakad Cinema Pvt. Ltd. All Rights Reserved. </p>
          <img src={makeInIndiaLogo}/>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
