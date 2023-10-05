import React from "react";
import "../Helper/Style.css";
import UniqueBtn from "../UniqueBtn.jsx";
import Signup from "../../Components/Helper/Modal/Signup";
import JoinUs from "./Modal/JoinUs";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
    const token = localStorage.getItem("token");
  const isAuthenticated = token;
  const handleJoinUsClick = () => {
    // Navigate to the Join Us page when the button is clicked
    history.push("/join-us");
  };
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
                  // <Signup modalBtn={<UniqueBtn title="Join Us" icon="" />} />
                  // <button onClick={handleJoinUsClick}>Join Us</button> 
<UniqueBtn title="Join Us" icon="" onClick={handleJoinUsClick}/>
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
