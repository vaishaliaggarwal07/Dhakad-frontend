import React, { useEffect, useState } from "react";
import { Input, InputButton } from "../../Helper/Input";
import { Row } from "react-bootstrap";
import { UserDetailForm, CoulmRow } from "../../Helper/Modal/UserDetails";
import PasswordStrengthBar from "react-password-strength-bar";
import { Formik } from "formik";
import { signup } from "../../../Redux/Actions/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { API_URL } from "../../../Utils/helpers/api_url";
import * as Yup from "yup";
import {useLocation} from "react-router-dom";
import axios from "axios";

const Email = () => {
  const dispatch = useDispatch();
  const [terms, setTerms] = useState(false);
  const [showInput, setshowInput] = useState(false);
  const [allUsers, setallUsers] = useState();
  const {search} = useLocation();
  const queryParams = new URLSearchParams(search);

  useEffect(() => {

    axios(`${API_URL}/api/v1/users`)
      .then((result) => setallUsers(result?.data?.data?.user))
      .catch((error) => console.log("error", error));
  }, []);
  const addReward = (userid) => {
    axios.patch(`${API_URL}/api/v1/users/addReward/${userid}`,{})
      .catch((error) => console.log("error", error));
  };
  const findUserByRCode = (rcode) => {
    axios.get(`${API_URL}/api/v1/users/getUserByRefCode/${rcode}`)
      .then((result) => addReward(result?.data?.data?.user?.[0]?._id))
      .catch((error) => console.log("error", error));
  };
  /* signUpSchema */

  const signUpSchema = Yup.object({
   firstName: Yup.string()
      .min(2)
      .max(25)
      .matches(/^[a-zA-Z\s]*$/,'Only letters and spaces are allowed for First Name')
      .required("Please enter your First Name"),
    lastName: Yup.string()
      .min(2)
      .max(25)
      .matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed for Last Name')
      .required("Please enter your Last Name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your Email"),
     mobile: Yup.string()
        .matches(/^[0-9]{10}$/,'Please enter valid Phone Number')
        .required('Please enter your Phone Number'),
    password: Yup.string().required("Please enter your Password"),
    passwordConfirm: Yup.string()
      .required("Please enter your Password Confirm")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const allRefCode = allUsers?.map((i) => {
    const referralCode = i.referralCode;
    return referralCode;
  });
  const [code, setCode] = useState(false);
  const chechRCode = (code) => {
    allRefCode?.forEach((i) => {
      if (i === code) {
        setCode(true);
      }
    });
  };

  /// password

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const [passwordConfirmType, setpasswordConfirmType] = useState("password");

  const togglepasswordConfirm = () => {
    if (passwordConfirmType === "password") {
      setpasswordConfirmType("text");
      return;
    }
    setpasswordConfirmType("password");
  };

  return (
    <>
      <div className="main-content">
        <div className="submit-movie-wrapper email-register-wrapper">
          <div className="container">
            <div className="submit-movie-content col-md-10 mx-auto">
              <div className="submit-movie-form email-register-form">
                <Formik
                  initialValues={{
                    userName: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    userType: "user",
                    status: "Active",
                    mobile: "",
                    password: "",
                    passwordConfirm: "",
                    referralCode: "",
                  }}
                  enableReinitialize={true}
                  validationSchema={signUpSchema}
                  onSubmit={(values) => {
                    if (values.referralCode !== "") {
                      findUserByRCode(values.referralCode);
                    }
                    const payload = {
                      ...values,
                      userName: values.firstName + values.lastName,
                    };
                    if (
                      payload.firstName &&
                      payload.lastName &&
                      payload.email &&
                      payload.password &&
                      payload.passwordConfirm !== null
                    ) {
                      if (payload.password === payload.passwordConfirm) {
                        payload.redirectUrl = '/';
                        if(queryParams.get('mrid')){
                          payload.redirectUrl = `/movie-detail/${queryParams.get('mrid')}`
                        }
                        terms === true
                          ? dispatch(signup(payload))
                          : toast.error(
                              "Please agree the above terms & condition"
                            );
                      }
                    }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <UserDetailForm onSubmit={handleSubmit} FormTitle="Sign Up">
                      <Row>
                        <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                          <label className="regiseration-label">
                            <div className="regiseration-valdated-fields">
                              First Name
                              <p>*</p>
                            </div>
                            <Input
                              type="text"
                              name="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              defaultValue={values.firstName}
                              placeholder="First name"
                            />
                            {errors.firstName && touched.firstName ? (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                  fontWeight: "500",
                                }}
                              >
                                {errors.firstName}
                              </div>
                            ) : null}
                          </label>
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label">
                              <div className="regiseration-valdated-fields">
                                Last Name
                                <p>*</p>
                              </div>
                              <Input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.lastName}
                                placeholder="Last name"
                              />
                              {errors.lastName && touched.lastName ? (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.lastName}
                                </div>
                              ) : null}
                            </label>
                          </div>
                        </CoulmRow>
                      </Row>
                      <Row>
                        <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label">
                              <div className="regiseration-valdated-fields">
                                Email
                                <p>*</p>
                              </div>
                              <Input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.email}
                                placeholder="Email"
                              />
                              {errors.email && touched.email ? (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.email}
                                </div>
                              ) : null}
                            </label>
                          </div>
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label regiseration-phn">
                            <div className="regiseration-valdated-fields">
                            Phone Number
                                <p>*</p>
                              </div>
                            
                             
                             <Input
                                type="text"
                                name="mobile"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.mobile}
                                placeholder="Phone number"
                                
                              />
                              {errors.mobile && touched.mobile && (
  <div style={{ color: "red", fontSize: "15px", fontWeight: "500" }}>
    {errors.mobile}
  </div>
)}
                            </label>
                          </div>
                        </CoulmRow>
                      </Row>
                      <Row>
                        <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label">
                              <div className="regiseration-valdated-fields">
                                Password
                                <p>*</p>
                              </div>
                              <PasswordStrengthBar
                                password={values.password}
                                className="password-strong"
                              />
                              <div className="position-relative">
                                <input
                                  type={passwordType}
                                  name="password"
                                  onBlur={handleBlur}
                                  defaultValue={values.password}
                                  placeholder="Password"
                                  onChange={handleChange}
                                />

                                <div className="position-absolute top-0 end-0 pe-3 pt-2">
                                  <div onClick={togglePassword}>
                                    {passwordType === "password" ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="bi bi-eye-slash"
                                        viewBox="0 0 16 16"
                                        fill="#3868b6"
                                      >
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                      </svg>
                                    ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="bi bi-eye"
                                        viewBox="0 0 16 16"
                                        fill="#3868b6"
                                      >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </div>
                              {errors.password && touched.password ? (
                                <div
                                  className="mt-3"
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.password}
                                </div>
                              ) : null}
                            </label>
                          </div>
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label">
                              <div className="regiseration-valdated-fields">
                                Confirm Password
                                <p>*</p>
                              </div>
                              <div className="position-relative">
                                <input
                                  type={passwordConfirmType}
                                  placeholder="Confirm Password"
                                  name="passwordConfirm"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  defaultValue={values.passwordConfirm}
                                />

                                <div className="position-absolute top-0 end-0 pe-3 pt-2">
                                  <div onClick={togglepasswordConfirm}>
                                    {passwordConfirmType === "password" ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="bi bi-eye-slash"
                                        viewBox="0 0 16 16"
                                        fill="#3868b6"
                                      >
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                      </svg>
                                    ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="bi bi-eye"
                                        viewBox="0 0 16 16"
                                        fill="#3868b6"
                                      >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {errors.passwordConfirm &&
                              touched.passwordConfirm ? (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.passwordConfirm}
                                </div>
                              ) : null}
                            </label>
                          </div>
                        </CoulmRow>
                      </Row>
                      <div className="ref-text">
                        Enter your referral code
                        <a
                          href={() => false}
                          style={{
                            color: "#3968b6",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setshowInput(true);
                          }}
                        >
                          here
                        </a>
                      </div>
                      {showInput === true ? (
                        <>
                          <div className="row mt-4">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4">
                              <div className="referral-code-field">
                                <label className="regiseration-label">
                                  <Input
                                    type="text"
                                    placeholder="Enter Referral Code"
                                    name="referralCode"
                                    onChange={
                                      (handleChange,
                                      (e) => {
                                        chechRCode(e.target.value);
                                      })
                                    }
                                    onBlur={handleBlur}
                                    defaultValue={values.referralCode}
                                  />
                                </label>
                                <div
                                  className="code-status mx-2"
                                  style={{ color: "red" }}
                                >
                                  {code !== true
                                    ? "(Please enter a valid referral code)"
                                    : ""}
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4"></div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      <CoulmRow
                        columWidth={12}
                        columStyle="col-md-12 text-center mt-4"
                      >
                        <InputButton
                          type="submit"
                          buttonTitle="SUBMIT"
                          TextTopGroup="text-center mb-1 term-and-condition-profile"
                          CheckBoxClass="CheckBox"
                          accountDefaultStatus="I agree to"
                          acountDefaultOption="Terms & Conditions"
                          acountDefaultOptionText="and"
                          acountDefaultOption1="Privacy Policy"
                          TextBottomGroup="d-none"
                          onChangeTerm={() => setTerms(!terms)}
                        />
                      </CoulmRow>
                    </UserDetailForm>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Email;
