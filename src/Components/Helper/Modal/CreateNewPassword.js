import React, { useState } from "react";
import "../../Helper/Style.css";
import { connect, useDispatch } from "react-redux";
import ModalLayout from "../../ModalLayout";
import ModalBtn from "../../ModalBtn";
import { Formik } from "formik";
import { createNewPassword } from "../../../Redux/Actions/auth";
import { verifyPasswordOTP } from "../../../Redux/Actions/auth";

// import { NavLink } from "react-router-dom";

export function CreateNewPassword(props) {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  const userVerifedData = props.user_verify_data
    ? props.user_verify_data
    : null;

  setTimeout(() => {
    setUserId(userVerifedData?.id);
  });
  const [errMess, setErrMess] = useState(null);
  const checkPassword = (data) => {
    if (data?.password === "" || data?.password === undefined) {
      setErrMess("Password is required!");
    } else if (
      data?.passwordConfirm === "" ||
      data?.passwordConfirm === undefined
    ) {
      setErrMess("Confirm password is required!");
    } else if (data?.password !== data?.passwordConfirm) {
      setErrMess("Confirm password or Password does not match!");
    } else {
      setErrMess(null);
      dispatch(createNewPassword(data));
    }
  };

  return (
    <React.Fragment>
      <ModalLayout
        modalTitle={"Create New Password"}
        modalId={props.modalId}
        bodyClassName={"modal-body-outer-sec"}
      >
        <Formik
          initialValues={{
            password: "",
            passwordConfirm: "",
            id: "",
          }}
          onSubmit={(values) => {
            const payload = {
              ...values,
              id: userId,
            };
            checkPassword(payload);
          }}
        >
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="new-password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="new-password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.password}
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.passwordConfirm}
                  placeholder="Enter your confirm password"
                />
              </div>
              {errMess !== null ? (
                <p className="text-danger">
                  <small>{errMess}</small>
                </p>
              ) : (
                ""
              )}
              {/* <div className="text-center">
                <small data-bs-dismiss="modal" aria-label="Close">
                  Dont have an account Create
                  <NavLink to="/register" className="modal-links">
                    Account now
                  </NavLink>
                </small>
              </div> */}
              <ModalBtn
                modalBtnType={"submit"}
                modalBtnTitle={"Submit"}
                btnClass={"btn-lg my-2"}
              />
            </form>
          )}
        </Formik>
      </ModalLayout>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    user_verify_data: state?.user?.user_verify,
  };
};
export default connect(mapStateToProps, { verifyPasswordOTP })(
  CreateNewPassword
);
