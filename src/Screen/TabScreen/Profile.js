import React, { useEffect } from "react";
import BottomNavbar from "../../Components/Helper/BottomNavbar";
import { Formik } from "formik";
import {
  UserDetailForm,
  CoulmRow,
} from "../../Components/Helper/Modal/UserDetails";
import { Row } from "react-bootstrap";
import { Input, InputButton } from "../../Components/Helper/Input";
import { getUser, updateUser } from "../../Redux/Actions/auth";
import { connect, useDispatch, useSelector } from "react-redux";
import dateFormat from "dateformat";

const PersonalDetils = () => {
  const userId = localStorage.getItem("id");
  const getUserDataById = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userDetails = getUserDataById?.user?.data?.user;
  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  return (
    <React.Fragment>
      <div className="main-content">
        <BottomNavbar />
        <div className="container">
          <div className="profile-form-content col-md-10 mx-auto">
            <Formik
              initialValues={{
                firstName: userDetails?.firstName,
                lastName: userDetails?.lastName,
                email: userDetails?.email,
                mobile: userDetails?.mobile,
                gender: userDetails?.gender,
                dateOfBirth: userDetails?.dateOfBirth,
                city: userDetails?.city,
                state: userDetails?.state,
                
               
                country: userDetails?.country,
              }}
              enableReinitialize={true}
              onSubmit={(data) => {
                console.log("dispatch");
                console.log(data);
                dispatch(updateUser(data, userId));
              }}
            >
              {({ values, handleBlur, handleChange, handleSubmit }) => (
                <UserDetailForm
                  FormTitle="Personal Details"
                  onSubmit={handleSubmit}
                >
                  <Row>
                    <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                      <label
                        htmlFor="firstName"
                        className="form-label input-label"
                      >
                        <div className="regiseration-valdated-fields">
                          First Name
                          <p>*</p>
                        </div>
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        controlId="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={
                          userDetails?.firstName
                            ? userDetails?.firstName
                            : values.firstName
                        }
                        required={true}
                      />
                    </CoulmRow>

                    <CoulmRow
                      columWidth={6}
                      columStyle="mb-2 col-md-12 ms-auto"
                    >
                      <label
                        htmlFor="lastName"
                        className="form-label input-label"
                      >
                        <div className="regiseration-valdated-fields">
                          Last Name
                          <p>*</p>
                        </div>
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        controlId="lastName"
                        defaultValue={
                          userDetails?.lastName
                            ? userDetails?.lastName
                            : values.lastName
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Last Name"
                        required={true}
                      />
                    </CoulmRow>
                  </Row>
                  <Row>
                    <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                      <label htmlFor="email" className="form-label input-label">
                        <div className="regiseration-valdated-fields">
                          Email
                          <p>*</p>
                        </div>
                      </label>
                      <Input
                        type="text"
                        name="email"
                        controlId="email"
                        defaultValue={
                          userDetails?.email ? userDetails?.email : values.email
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email"
                        required={true}
                      />
                    </CoulmRow>
                    <CoulmRow
                      columWidth={6}
                      columStyle="mb-2 col-md-12 ms-auto"
                    >
                      <label
                        htmlFor="mobile"
                        className="form-label input-label mb-3"
                      >
                        <div className="regiseration-valdated-fields">
                          Phone no
                         
                        </div>
                        
                       
                      </label>
                      <Input
                        type="text"
                        name="mobile"
                        controlId="mobile"
                        defaultValue={
                          userDetails?.mobile
                            ? userDetails?.mobile
                            : values.mobile
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone no"
                        
                      />
                    </CoulmRow>
                  </Row>
                  <Row>
                    <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                      <label
                        htmlFor="dateOfBirth"
                        className="form-label input-label"
                      >
                        <div className="regiseration-valdated-fields">
                          Date Of Birth
                         
                        </div>
                      </label>
                      <Input
                        type="date"
                        name="dateOfBirth"
                        controlId="dateOfBirth"
                        defaultValue={
                          userDetails?.dateOfBirth
                            ? dateFormat(userDetails?.dateOfBirth, "yyyy-mm-dd")
                            : ""
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Date Of Birth"
                        
                      />
                    </CoulmRow>
                    <CoulmRow
                      columWidth={6}
                      columStyle="mb-2 col-md-12 ms-auto"
                    >
                      <label
                        htmlFor="gender"
                        className="form-label input-label"
                      >
                        <div className="regiseration-valdated-fields">
                          Gender
                          {/* <p>*</p> */}
                        </div>
                      </label>
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
                        name="gender"
                        defaultValue={
                          userDetails?.gender
                            ? userDetails?.gender
                            : values.gender
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                       
                      >
                        <option value="" label="Select Gender" />
                        <option
                          value="male"
                          label="Male"
                          selected={
                            userDetails?.gender === "male" ? true : false
                          }
                        />
                        <option
                          value="female"
                          label="Female"
                          selected={
                            userDetails?.gender === "female" ? true : false
                          }
                        />
                        <option
                          value="other"
                          label="Other"
                          selected={
                            userDetails?.gender === "other" ? true : false
                          }
                        />
                      </select>
                      {/* <Input
                        type="text"
                        name="gender"
                        controlId="gender"
                        defaultValue={
                          userDetails?.gender
                            ? userDetails?.gender
                            : values.gender
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Gender"
                      /> */}
                    </CoulmRow>
                  </Row>
                  <Row>
                    <CoulmRow columWidth={6} columStyle="mb-2 col-md-12">
                      <label htmlFor="city" className="form-label input-label">
                        <div className="regiseration-valdated-fields">
                          City
                          {/* <p>*</p> */}
                        </div>
                      </label>
                      <Input
                        type="text"
                        name="city"
                        controlId="city"
                        defaultValue={
                          userDetails?.city ? userDetails?.city : values.city
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="City"
                      />
                    </CoulmRow>
                    <CoulmRow
                      columWidth={6}
                      columStyle="mb-2 col-md-12 ms-auto"
                    >
                      <label htmlFor="state" className="form-label input-label">
                        <div className="regiseration-valdated-fields">
                          State
                          {/* <p>*</p> */}
                        </div>
                      </label>
                      <Input
                        type="text"
                        name="state"
                        controlId="state"
                        defaultValue={
                          userDetails?.state ? userDetails?.state : values.state
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="State"
                      />
                    </CoulmRow>
                  </Row>
                  <CoulmRow columWidth={12}>
                    <label htmlFor="country" className="form-label input-label">
                      <div className="regiseration-valdated-fields">
                        Country
                        {/* <p>*</p> */}
                      </div>
                    </label>
                    <Input
                      type="text"
                      name="country"
                      controlId="country"
                      defaultValue={
                        userDetails?.country
                          ? userDetails?.country
                          : values.country
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Country"
                    />
                  </CoulmRow>
                  <CoulmRow
                    columWidth={12}
                    columStyle="col-md-12 text-center check-box-class"
                  >
                    <InputButton type="submit" buttonTitle={"SUBMIT"} />
                  </CoulmRow>
                </UserDetailForm>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     is_loading: state.user?.is_loading,
//   };
// };

export default connect(null, { getUser })(PersonalDetils);
