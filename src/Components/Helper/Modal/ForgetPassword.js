import React, { useState } from "react";
import "../../Helper/Style.css";
import { connect, useDispatch } from "react-redux";
import ModalLayout from "../../ModalLayout";
import ModalBtn from "../../ModalBtn";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import {
  forgotPassword,
  verifyPasswordOTP,
  resendOTP,
} from "../../../Redux/Actions/auth";
import CreateNewPassword from "./CreateNewPassword";
export function ForgetPassword(props) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const user_status =
    props.user_data?.user?.status === "success"
      ? props.user_data?.user?.status
      : "";
  //
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const otpNumbers = otp.join().replace(/,/g, "");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const verifyHandle = (e) => {
    e.preventDefault();
    const verifyData = {
      email: userEmail,
      otp: Number(otpNumbers),
    };
    dispatch(verifyPasswordOTP(verifyData));
  };

  const reSendOTPhandle = (e) => {
    e.preventDefault();
    const verifyData = {
      email: userEmail,
    };
    dispatch(resendOTP(verifyData));
  };

  const userVerifedData = props.user_verify_data
    ? props.user_verify_data
    : null;

  if (userVerifedData !== null) {
    setTimeout(() => {
      document.getElementById("create-pass-id").click();
    }, 1000);
  }

  return (
    <React.Fragment>
      <ModalLayout
        modalTitle={user_status ? "Verify OTP" : "Forgot Password"}
        modalId={props.modalId}
        bodyClassName={"modal-body-outer-sec"}
      >
        {user_status ? (
          <form className="px-4">
            <>
              <div
                id="otp"
                className="inputs d-flex flex-row justify-content-center my-2"
              >
                {otp.map((data, index) => {
                  return (
                    <input
                      className="m-2 text-center form-control rounded"
                      type="text"
                      name="otp"
                      maxLength="1"
                      value={data}
                      key={index}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select}
                    />
                  );
                })}
              </div>
              <ModalBtn
                modalBtnType={"submit"}
                modalBtnTitle={"Submit"}
                btnClass={"btn-lg my-2"}
                onClick={(e) => verifyHandle(e)}
              />

              <div className="otp-form-bottom-tex mt-2">
                <p>
                  Didn’t recieve OTP code?{" "}
                  <NavLink
                    to={"/create-new-password"}
                    onClick={(e) => reSendOTPhandle(e)}
                    className="form-otp-resend"
                  >
                    Resend
                  </NavLink>
                </p>
              </div>
              <small style={{ visibility: "hidden" }}>
                <NavLink
                  to={"/create-new-password"}
                  onClick={(e) => e.preventDefault()}
                  className="modal-links"
                  id={"create-pass-id"}
                  data-bs-toggle="modal"
                  data-bs-target="#createnewpass"
                ></NavLink>
              </small>
            </>
          </form>
        ) : (
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              const payload = {
                ...values,
                email: userEmail,
              };
              dispatch(forgotPassword(payload));
              setStatus(true);
            }}
          >
            {({ values, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="emailforgot" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailforgot"
                    name="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    onBlur={handleBlur}
                    defaultValue={values.email}
                    placeholder="Enter your email address..."
                  />
                </div>
                <div className="text-center">
                  <small data-bs-dismiss="modal" aria-label="Close">
                    Dont have an account Create
                    <NavLink to="/register" className="modal-links">
                      Account now
                    </NavLink>
                  </small>
                </div>
                {status === true ? (
                  <ModalBtn
                    modalBtnType={"button"}
                    modalBtnTitle={
                      <div className="spinner-border" role="status"></div>
                    }
                    btnClass={"btn-lg my-2"}
                  />
                ) : (
                  <ModalBtn
                    modalBtnType={"submit"}
                    modalBtnTitle={"Submit"}
                    btnClass={"btn-lg my-2"}
                  />
                )}
              </form>
            )}
          </Formik>
        )}
      </ModalLayout>
      <CreateNewPassword modalId={"createnewpass"} />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    user_data: state?.user,
    user_verify_data: state?.user?.user_verify,
  };
};

export default connect(mapStateToProps, {
  forgotPassword,
  verifyPasswordOTP,
  resendOTP,
})(ForgetPassword);
