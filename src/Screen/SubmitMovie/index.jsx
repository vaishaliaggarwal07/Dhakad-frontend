import React, { useState } from "react";
import { Input, InputButton,InputButtonOTP } from "../../Components/Helper/Input";
import { Row } from "react-bootstrap";
import PasswordStrengthBar from "react-password-strength-bar";
import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import {
  UserDetailForm,
  CoulmRow,
} from "../../Components/Helper/Modal/UserDetails";
import "../SubmitMovie/index.css";
import { addmovie } from "../../Redux/Actions/userMovies";
import * as Yup from "yup";

const SubmitMovie = () => {
  const [terms, setTerms] = useState(false);
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();

  var resetForms = () => {
    setTimeout(() => {
      return document.getElementById("userMovieform").reset();
    }, 2000);
  };

  const signUpSchema = Yup.object({
    name: Yup.string().required("Please enter your  Name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your Email"),

    language: Yup.string().required("Please enter your  Language"),
    trailerVideo: Yup.string().required("Please enter your  Trailer Video"),
    movieVideo: Yup.string().required("Please enter your  Movie Video"),
    // privacyPolicy: Yup.boolean().oneOf([true], "You must agree to Privacy Policy").required("You must agree to Privacy Policy"),
    trailerPass: Yup.string().required("Please enter your Trailer Password"),
    moviePass: Yup.string().required("Please enter your Movie Password"),
    movieDescription: Yup.string().required(
      "Please enter your Movie Description"
    ),
  });

  const [passwordType, setPasswordType] = useState("password");
  const [movieType, setMovieType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const togglePasswordMovie = () => {
    if (movieType === "password") {
      setMovieType("text");
      return;
    }
    setMovieType("password");
  };
  return (
    <React.Fragment>
      <div className="main-content">
        <div className="submit-movie-wrapper">
          <div className="container">
            <div className="submit-movie-content col-md-10 mx-auto">
              <div className="submit-movie-form">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    productionHouse: "",
                    language: "",
                    trailerVideo: "",
                    movieVideo: "",
                    trailerPass: "",
                    moviePass: "",
                    movieDescription: "",
                  }}
                  enableReinitialize={true}
                  validationSchema={signUpSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log("submitting");
                      const payload = {
                        ...values,
                      };
                      console.log(payload);
                      dispatch(addmovie(payload, userId));
                      setSubmitting(false);
                      resetForm();
                      resetForms();
                    
                    
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
                    <UserDetailForm
                      FormTitle="Submit Your Movie"
                      formId={"userMovieform"}
                      onSubmit={handleSubmit}
                    >
                      <Row>
                        <CoulmRow columWidth={6} columStyle="col-md-12">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label"
                          >
                            <div className="regiseration-valdated-fields">
                              Name
                              <p>*</p>
                            </div>
                          </label>
                          <Input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.name}
                          />
                          {errors.name && touched.name ? (
                            <div
                              style={{
                                color: "red",
                                fontSize: "15px",
                                fontWeight: "500",
                              }}
                            >
                              {errors.name}
                            </div>
                          ) : null}
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label"
                          >
                            <div className="regiseration-valdated-fields">
                              Email
                              <p>*</p>
                            </div>
                          </label>
                          <Input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.email}
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
                        </CoulmRow>
                      </Row>
                      <Row>
                        <CoulmRow
                          columWidth={6}
                          columStyle="col-md-12 mb-2 ms-auto mt-2"
                        >
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label regiseration-phn mb-3"
                          >
                            Name of Production House
                          </label>
                          <Input
                            type="text"
                            placeholder="Name of Production House"
                            name="productionHouse"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.productionHouse}
                          />
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto mt-2"
                        >
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label"
                          >
                            <div className="regiseration-valdated-fields">
                              Language
                              <p>*</p>
                            </div>
                          </label>
                          <Input
                            type="text"
                            placeholder="Language"
                            name="language"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.language}
                          />
                          {errors.language && touched.language ? (
                            <div
                              style={{
                                color: "red",
                                fontSize: "15px",
                                fontWeight: "500",
                              }}
                            >
                              {errors.language}
                            </div>
                          ) : null}
                        </CoulmRow>
                      </Row>
                      <Row>
                        <CoulmRow columWidth={6} columStyle="col-md-12 mt-2">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label"
                          >
                            <div className="regiseration-valdated-fields">
                              Trailer Link
                              <p>*</p>
                            </div>
                          </label>
                          <Input
                            type="text"
                            placeholder="Trailer Link"
                            name="trailerVideo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.trailerVideo}
                          />
                          {errors.trailerVideo && touched.trailerVideo ? (
                            <div
                              style={{
                                color: "red",
                                fontSize: "15px",
                                fontWeight: "500",
                              }}
                            >
                              {errors.trailerVideo}
                            </div>
                          ) : null}
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="col-md-12 ms-auto mt-2"
                        >
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label"
                          >
                            <div className="regiseration-valdated-fields">
                              Password Trailer
                              <p>*</p>
                            </div>
                          </label>
                          <PasswordStrengthBar
                            password={values.trailerPass}
                            className="password-strong"
                          />
                          <div className="position-relative">
                            <input
                              type={passwordType}
                              placeholder="Password Trailer"
                              onChange={handleChange}
                              name="trailerPass"
                              onBlur={handleBlur}
                            />

                            <div className="position-absolute top-0 end-0 pe-3 p-2">
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
                          {errors.trailerPass && touched.trailerPass ? (
                            <div
                              style={{
                                color: "red",
                                fontSize: "15px",
                                marginTop: "10px",
                                fontWeight: "500",
                              }}
                            >
                              {errors.trailerPass}
                            </div>
                          ) : null}
                        </CoulmRow>
                      </Row>
                      <Row>
                        <CoulmRow columWidth={6} columStyle="col-md-12 mt-2">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label"
                          >
                            <div className="regiseration-valdated-fields">
                              Movie Link
                              <p>*</p>
                            </div>
                          </label>
                          <Input
                            type="text"
                            placeholder="Movie Link"
                            name="movieVideo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.movieVideo}
                          />
                          {errors.movieVideo && touched.movieVideo ? (
                            <div
                              style={{
                                color: "red",
                                fontSize: "15px",
                                fontWeight: "500",
                              }}
                            >
                              {errors.movieVideo}
                            </div>
                          ) : null}
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="col-md-12 ms-auto mt-2"
                        >
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label input-label"
                          >
                            <div className="regiseration-valdated-fields">
                              Password Movie
                              <p>*</p>
                            </div>
                          </label>
                          <PasswordStrengthBar
                            password={values.moviePass}
                            className="password-strong"
                          />
                          <div className="position-relative">
                            <input
                              type={movieType}
                              placeholder="Password Movie"
                              onChange={handleChange}
                              name="moviePass"
                              onBlur={handleBlur}
                            />

                            <div className="position-absolute top-0 end-0 pe-3 p-2">
                              <div onClick={togglePasswordMovie}>
                                {movieType === "password" ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#3868b6"
                                    className="bi bi-eye-slash"
                                    viewBox="0 0 16 16"
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
                                    fill="#3868b6"
                                    className="bi bi-eye"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </div>

                          {errors.moviePass && touched.moviePass ? (
                            <div
                              style={{
                                color: "red",
                                fontSize: "15px",
                                marginTop: "10px",
                                fontWeight: "500",
                              }}
                            >
                              {errors.moviePass}
                            </div>
                          ) : null}
                        </CoulmRow>
                      </Row>
                      <CoulmRow columWidth={12} columStyle="mb-5 mt-2">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label input-label"
                        >
                          <div className="regiseration-valdated-fields">
                            Movie Description
                            <p>*</p>
                          </div>
                        </label>
                        <Input
                          type="text"
                          placeholder="Movie  Description"
                          name="movieDescription"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={values.movieDescription}
                        />
                        {errors.movieDescription && touched.movieDescription ? (
                          <div
                            style={{
                              color: "red",
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {errors.movieDescription}
                          </div>
                        ) : null}
                      </CoulmRow>
                      <CoulmRow
                        columWidth={12}
                        columStyle="col-md-12  mt-3"
                      >
                        <CoulmRow
                        columWidth={12}
                        columStyle="col-md-12  mt-4"
                      >
                        <InputButtonOTP
                        customButtonClass="custom-button custom-button-2"
                          TextTopGroup="mb-1 term-and-condition-profile"
                          CheckBoxClass="CheckBox"
                          accountDefaultStatus="By Clicking on this, we agree to Dhaakad Cinema Submit Your Movie"
                          acountDefaultOption="Terms & Conditions"
                          TextBottomGroup="d-none"
                          onChangeTerm={() => {
                            setTerms(!terms);
                            setIsPrivacyPolicyChecked(!isPrivacyPolicyChecked);
                        }}
                        />
                      </CoulmRow>
                        <p className="submit-movie-note ">
                          Note:
                          <span className="note-description">
                            We prefer trailer and movie link to be uploaded on
                            the Vimeo and password protected.
                          </span>
                        </p>
                      </CoulmRow>
                      <CoulmRow
                        columWidth={12}
                        columStyle="col-md-12 text-center mt-1"
                      >
                        {/* <InputButton>
                        <button  type="submit" className="model-submit-btn mt-2" size="lg">SUBMIT</button>
                        </InputButton> */}
                        <InputButton
                          type={"submit"}
                          buttonTitle="SUBMIT"
                          TextTopGroup="d-none"
                          TextBottomGroup="d-none"
                          navLinkBottom={"/"}
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
    </React.Fragment>
  );
};

export default connect(null, { addmovie })(SubmitMovie);
