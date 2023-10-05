
import React, { useState,useEffect } from "react";
import { Formik } from "formik";
import { connect, useDispatch } from "react-redux";
import { Input, InputButton, InputButtonOTP } from "../../Helper/Input";
import { Row } from "react-bootstrap";
import { UserDetailForm, CoulmRow } from "../../Helper/Modal/UserDetails";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Import useHistory
import firebaseHelper from "../../../Utils/helpers/firebase-helper"; // Adjust the import path as needed

import { createJoinUs } from "../../../Redux/Actions/joinUs";
import * as Yup from 'yup';
const JoinUs = () => {

  const history = useHistory();
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(""); // Track selected country
  const [mobileNumber, setMobileNumber] = useState(""); // Track mobile number
  const [countries, setCountries] = useState([]); // Store the list of countries
  const [dialingCodes, setDialingCodes] = useState({}); // Store dialing codes

  useEffect(() => {
    // Fetch the list of countries from the restcountries API
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        const countryList = response.data.map((country) => ({
          name: country.name,
          code: `+${country.callingCodes[0]}`, // Use the correct property for the country code
        }));
        setCountries(countryList);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
    
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'First Name should only contain alphabetic characters')
    .required('First Name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Last Name should only contain alphabetic characters')
    .required('Last Name is required'),
  middleName: Yup.string(),
  // mobileNumber: Yup.string().required('Mobile Number is required'),
  // country: Yup.string().required('Country is required'),
  userType: Yup.string().required('Please specify who you are? '),
  // otherUserType: Yup.string().required('Please specify your role'),
  });
  
  const handleCountryChange = (e) => {
    const selectedCountryValue = e.target.value;
    const selectedCountryData = countries.find((country) => country.name === selectedCountryValue);

    if (selectedCountryData) {
      const selectedDialingCode = selectedCountryData.code;
      setSelectedCountry(selectedCountryValue);
      setMobileNumber(selectedDialingCode);
    }

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
                    firstName:"",
                    middleName:"",
                    lastName:"",
                    country:"",
                    state:"",
                    city:"",
                    email:"",
                    mobileNumber:"",
                    userType:"",
                    otherUserType:"",
                    showReels:"",
                  }}
                  enableReinitialize={true}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting}) => {
                    const formData={
                      firstName: values.firstName,
                      middleName: values.middleName,
                      lastName: values.lastName,
                      country: selectedCountry,
                      state: values.state,
                      city: values.city,
                      email: values.email,
                      mobileNumber : mobileNumber,
                      userType: values.userType,
                      otherUserType: values.otherUserType,
                      showReels: values.showReels,

                    };
                    console.log(formData);
                    createJoinUs(formData)
                    .then((response) => {
                      // Handle the successful response from the API
                      console.log('JoinUs data created successfully', response);
                      firebaseHelper.sendEmailVerification();

    // Check if the selected country is India and send phone verification
    if (selectedCountry === 'India') {
      firebaseHelper.sendPhoneVerification(mobileNumber);
    }
                      history.push('/');
                      // Optionally, you can perform additional actions here (e.g., show a success message)
                    })
                    .catch((error) => {
                      // Handle API errors
                      console.error('Error creating JoinUs data', error);
                      // Optionally, you can display an error message to the user
                    })
                    .finally(() => {
                      setSubmitting(false);
                      // resetForm();
                      // resetForms();
                    });
                  }}
                >
                  {({ values, errors, touched ,handleBlur, handleChange, handleSubmit}) => (
                    // <form onSubmit={handleSubmit} >
                      <UserDetailForm onSubmit={handleSubmit}FormTitle="Join Us Now!">
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
                                Middle Name
                                <p> &nbsp;</p>
                              </div>
                              <Input
                                type="text"
                                name="middleName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.middleName}
                                placeholder="Middle name"
                              />
                              {errors.middleName && touched.middleName ? (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.middleName}
                                </div>
                              ) : null}
                            </label>
                          </div>
                        </CoulmRow>
                      </Row>
                      <Row>
                        <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
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
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
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
                      </Row>
                      <Row>
                        <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                          <label className="regiseration-label">
                            <div className="regiseration-valdated-fields">
                              City
                              <p>*</p>
                            </div>
                            <Input
                              type="text"
                              name="city"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              defaultValue={values.city}
                              placeholder="City"
                            />
                           
                          </label>
                        </CoulmRow>
                        <CoulmRow
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label">
                              <div className="regiseration-valdated-fields">
                                State
                                <p>*</p>
                              </div>
                              <Input
                                type="text"
                                name="state"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.state}
                                placeholder="State"
                              />
                             
                            </label>
                          </div>
                        </CoulmRow>
                      </Row>
                      <Row>
                        <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                          <label className="regiseration-label">
                            <div className="regiseration-valdated-fields">
                              Country
                              <p>*</p>
                            </div>
                            <select
  className="form-select"
  aria-label="Default select example"
  style={{
    color: "#000",
    border: "none",
    borderBottom: "1px solid #fff",
    backgroundColor: "#fff",
    borderRadius: "100px",
    padding: " 0.7rem 0.75rem",
    textIndent: "10px",
    fontWeight: "500",
    width: "100%",
    outline: "none",
  }}
  name="country"
  value={selectedCountry}
  onChange={handleCountryChange}
  onBlur={handleBlur}
  required
>
  <option value="" label="Select Country" />
  {countries.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ))}
</select>
                          
                            {errors.country && touched.country ? (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "15px",
                                  fontWeight: "500",
                                }}
                              >
                                {errors.country}
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
                                Mobile No.
                                <p>*</p>
                              </div>
                              
                              <Input
                                type="text"
                                name="mobileNumber"
                                // value={values.mobileNumber}
                                onChange={(e) => {
                                  setMobileNumber(e.target.value);
                                  // handleChange(e);
                                }}
                                onBlur={handleBlur}
                                // value={mobileNumber}
                                defaultValue={mobileNumber}
                                placeholder="Enter Mobile Number"
                                required
                               
                              />
                              {errors.mobileNumber && touched.mobileNumber ? (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.mobileNumber}
                                </div>
                              ) : null}
                           
                            </label>
                          </div>
                        </CoulmRow>
                      </Row>
                      <Row>
                      <CoulmRow
                      
                          columWidth={6}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label">
                              <div className="regiseration-valdated-fields">
                                Who you are?
                                <p>*</p>
                              </div>
                              <select
    className="form-select"
    aria-label="Default select example"
    style={{
      color: "#000",
      border: "none",
      borderBottom: "1px solid #fff",
      backgroundColor: "#fff",
      borderRadius: "100px",
      padding: " 0.7rem 0.75rem",
      textIndent: "10px",
      fontWeight: "500",
      width: "100%",
      outline: "none",
    }}
    name="userType"
    defaultValue={values.userType}
    onChange={(e) => {
      handleChange(e);
      setSelectedRole(e.target.value);
    }}
    onBlur={handleBlur}
    required
  >
    <option value="" label="Select your role" />
    <option value="Director" label="Director" />
    <option value="Cinematographer" label="Cinematographer" />
    <option value="Actor" label="Actor" />
    <option value="Actress" label="Actress" />
    <option value="Technician" label="Technician" />
    <option value="Others" label="Others" />
  </select>
  {errors.userType && touched.userType ? (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.userType}
                                </div>
                              ) : null}  
                            </label>  
                            
                          </div>

                        </CoulmRow>
                        {selectedRole === "Others" && (
  <CoulmRow 
  
  columWidth={6} 
  columStyle="mb-2 col-md-12 ms-auto">
    <div className="regiseration-valdated-fields">
      <label className="regiseration-label">
        <div className="regiseration-valdated-fields">
          Specify Yourself
          <p>*</p>
        </div>
        <Input
          type="text"
          name="otherUserType"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.otherUserType}
          placeholder="Please specify who you are?"
        />
        {errors.otherUserType && touched.otherUserType ? (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {errors.otherUserType}
                                </div>
                              ) : null}  
      </label>
    </div>
  </CoulmRow>
)}
                        </Row>
                        <Row>
                      <CoulmRow
                          columWidth={12}
                          columStyle="mb-2 col-md-12 ms-auto"
                        >
                          <div className="regiseration-valdated-fields">
                            <label className="regiseration-label">
                              <div className="regiseration-valdated-fields">
                                Show Reels
                                {["Actor","Actress","Technician"].includes(selectedRole) && (
                                  <p>*</p>
                                )}
                                
                              </div>
                              <Input
                                type="text"
                                name="showReels"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={values.showReels}
                                placeholder="Enter Youtube link"
                                required={["Actor", "Actress", "Technician"].includes(selectedRole)}
                              />
                              
                            </label>
                          </div>
                        </CoulmRow>
                        </Row>
                        <CoulmRow
                        columWidth={12}
                        columStyle="col-md-12  mt-4"
                      >
                        <InputButtonOTP
                         
                          customButtonClass="custom-button custom-button-2"
                          TextTopGroup=" mb-1 term-and-condition-profile"
                          CheckBoxClass="CheckBox"
                          accountDefaultStatus="I allow Dhaakad Cinema to use my credentials for further communication related to work."
                          
                          TextBottomGroup="d-none"
                        />
                      </CoulmRow>
                      
                      <CoulmRow
                        columWidth={12}
                        columStyle="col-md-12 text-center mt-1"
                      >
                        <InputButton
                          type={"submit"}
                          buttonTitle="SUBMIT"
                          TextTopGroup="d-none"
                          TextBottomGroup="d-none"
                          navLinkBottom={"/"}
                        />
                      </CoulmRow>
                      
                      {/* <div className="custom-support-btn">
                        <button
                          type="submit"
                          disabled={!title || !email || !description}
                          className="btn btn-primary support-btn btn-lg"
                        >
                          Submit
                        </button>
                      </div> */}
                    {/* </form> */}
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
export default connect(null, )(JoinUs);

// export default connect(null, { supportChat })(JoinUs);
