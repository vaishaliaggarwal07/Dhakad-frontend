import React from "react";
import "../../Helper/Style.css";
import { Button } from "react-bootstrap";
import ModelStyle from "./ModelStyle";
import "../../Helper/Style.css";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { Link } from "react-router-dom";
// import { loginWithGoogle } from "../../../Redux/Actions/auth";
import { useDispatch } from "react-redux";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export function Signup(props) {
  const dispatch = useDispatch();
  // firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_DATABASE_URL,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  //   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  // });
  // const googleProvider = new firebase.auth.GoogleAuthProvider();
  // const facebookProvider = new firebase.auth.FacebookAuthProvider();
  // // const emailProvider = new firebase.auth.EmailAuthProvider();
  //
  // const auth = firebase.auth();
  // signInWithGoogle
  const signInWithGoogle = () => {
   /* auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        // console.log(res.user.multiFactor.user.accessToken);
        const email = res.user.multiFactor.user.email;
        const token = res.user.multiFactor.user.accessToken;
        dispatch(loginWithGoogle({ token, email }));
      })
      .catch((error) => {
        console.log(error.message, "+++++>");
      });*/
  };
  //signInWithFacebook
  const signInWithFacebook = () => {
    // console.log("signInWithFacebook");
   /* auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        // console.log(res, ".user.multiFactor.user.accessToken");
        // const email = res.user.multiFactor.user.email;
        // const token = res.user.multiFactor.user.accessToken;
        // dispatch(loginWithGoogle({ token, email }));
      })
      .catch((error) => {
        console.log(error.message);
      });*/
  };
  //signInWithEMail
  // const signInWithEMail = () => {
  //   console.log("signInWithEMail");
  //   auth
  //     .fetchSignInMethodsForEmail(emailProvider)
  //     .then((res) => {
  //       console.log(res, ".user.multiFactor.user.accessToken");
  //       // const email = res.user.multiFactor.user.email;
  //       // const token = res.user.multiFactor.user.accessToken;
  //       // dispatch(loginWithGoogle({ token, email }));
  //     })
  //     .catch((error) => {
  //       console.log(error.message, "ss");
  //     });
  // };
  return (
    <React.Fragment>
      <ModelStyle modalTitle="Get Started" modalBtn={props.modalBtn}>
        <div className="register-user-content">
          <div className="register-user-content-outer  col-sm-12 ">
            {/* <Link to="/register" className="nav-link text-dark regiter-btn"> */}
            <Button
              variant="register-form-field col-sm-12 mb-3"
              onClick={signInWithFacebook}
            >
              <FaFacebook className="register-icon register-icon-facebook" />
              <span>Continue with Facebook</span>
            </Button>
            {/* </Link> */}
            {/* <span className="nav-link text-dark regiter-btn"> */}
            <Button
              variant="register-form-field col-sm-12 mb-2"
              onClick={signInWithGoogle}
            >
              <FcGoogle className="register-icon" />
              <span>Continue with Google</span>
            </Button>
            {/* <Link to="/register" className="nav-link text-dark regiter-btn"> */}
            {/* <Button
              variant="register-form-field col-sm-12"
              onClick={signInWithEMail}
            >
              <FaRegEnvelope className="register-icon register-icon-mail" />
              <span>Continue with Email</span>
            </Button> */}
            {/* </Link> */}
            <div className="devider-outer">
              <hr />
              <span className="or-devider">or</span>
            </div>

            <Link to="/register" className="nav-link text-dark regiter-btn">
              <Button
                variant="register-form-field col-sm-12 mt-2"
                // onClick={signInWithEMail}
              >
                <FaUser className="register-icon register-icon-mail" />
                <span>Continue with Your Details</span>
              </Button>
            </Link>
          </div>
        </div>
      </ModelStyle>
    </React.Fragment>
  );
}

export default Signup;
