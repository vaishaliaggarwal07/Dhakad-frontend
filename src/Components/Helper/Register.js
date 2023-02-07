import React from "react";
import "../Helper/Style.css";
import UniqueBtn from "../UniqueBtn.jsx";
import Signup from "../../Components/Helper/Modal/Signup";

const Register = () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = token;
  return (
    <React.Fragment>
      <div className="registration-banner" id="masthead-registration-swiper">
        <div className="container container-bottom">
          <div className="registration-content col-md-6">
            <div className="join-banner">
              <div className="reges-banner">
                <h3>
                  We support new talent! <br />
                  <p>We support new age filmmakers!</p>
                </h3>
              </div>
              <div className="join-btn">
                {isAuthenticated ? (
                  <UniqueBtn
                    title="Joined!"
                    icon=""
                    iconsClass={"bg-warning text-primary"}
                    disabled={true}
                  />
                ) : (
                  <Signup modalBtn={<UniqueBtn title="Join Us" icon="" />} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
