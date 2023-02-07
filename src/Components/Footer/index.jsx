import React from "react";
import "../../Components/Footer/index.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MessengerCustomerChat from "react-messenger-customer-chat";

import { Link } from "react-router-dom";

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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been <br />
            the industry's standard
          </p>
          <p>Copyright 2021 © Dhaakad Cinema Pvt. Ltd. All Rights Reserved. </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
