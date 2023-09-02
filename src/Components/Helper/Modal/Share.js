import React, { useState } from "react";
import "../../Helper/Style.css";
import ModelStyle from "./ModelStyle";

import InsertLinkIcon from "@material-ui/icons/InsertLink";
import { BiCheckCircle } from "@react-icons/all-files/bi/BiCheckCircle";
import CopyText from "react-copy-text";

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import {MAIN_WEBSITE} from "../../../Utils/helpers/api_url"

export function Share(props) {
  const link = props?.link;

  const [message, setMessage] = useState(false);
  const [copyText, setCopyText] = useState();
  const onButtonClick = () => {
    setCopyText(
      `${MAIN_WEBSITE}${link}`
    );
    setMessage(true);
  };
  const onCopied = (text) => {
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };
  return (
    <React.Fragment>
      <ModelStyle modalTitle="Share" modalBtn={props.modalBtn}>
        <div className="share-wrapper">
          <div className="share-culumn">
            <FacebookShareButton
              className="d-flex justify-content-between w-100"
              url={`http://dhaakadcinema.com.s3-website-ap-northeast-1.amazonaws.com/${link}`}
            >
              <h5>Facebook</h5> <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className="share-culumn">
            <TwitterShareButton
              className="d-flex justify-content-between w-100"
              url={`http://dhaakadcinema.com.s3-website-ap-northeast-1.amazonaws.com/${link}`}
            >
              <h5>Twitter</h5> <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="share-culumn">
            <WhatsappShareButton
              className="d-flex justify-content-between w-100"
              url={`http://dhaakadcinema.com.s3-website-ap-northeast-1.amazonaws.com/${link}`}
            >
              <h5>WhatsApp</h5>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className="share-culumn custom-toolip">
            <a
              className="d-flex justy-content-between"
              onClick={onButtonClick}
              href={() => false}
            >
              <h5>Copy Link</h5>
              <CopyText text={copyText} onCopied={onCopied} />
              <span className="copy-text">
                <InsertLinkIcon className="share-culumn-icon share-culumn-icon-link" />
              </span>
            </a>
            <div className="tooltip-outer">
              <span className="tooltiptext">
                {message ? (
                  <div className="text-success">
                    <BiCheckCircle />
                    <span className="px-1">Copied!</span>
                  </div>
                ) : (
                  "Copy Link"
                )}
              </span>
            </div>
          </div>
        </div>
      </ModelStyle>
    </React.Fragment>
  );
}

export default Share;
