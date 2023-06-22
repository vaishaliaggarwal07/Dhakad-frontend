import React, {useState} from "react";
import "../../Helper/Style.css";
import {Formik} from "formik";
import {loginUser} from "../../../Redux/Actions/auth";
import {useDispatch} from "react-redux";
import ModalLayout from "../../ModalLayout";
import ModalBtn from "../../ModalBtn";
import {NavLink, useLocation} from "react-router-dom";

export function Login(props) {
    const dispatch = useDispatch();
    const [passwordType, setPasswordType] = useState("password");
    const location = useLocation();
    console.log('Login:Login: locationPathname ', location.pathname);
    let redirectPath = '/';
    if (location.pathname.includes('movie-detail')) {
        redirectPath = location.pathname
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
    return (
        <React.Fragment>
            <ModalLayout
                modalTitle={"Log in"}
                modalId={props.modalId}
                bodyClassName={"modal-body-outer-sec"}
            >
                <Formik
                    initialValues={{
                        email: "",
                        userType: "user",
                        password: "",
                        redirectPath: redirectPath,
                    }}
                    onSubmit={(values) => {
                        dispatch(loginUser(values));
                    }}
                >
                    {({values, handleBlur, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    defaultValue={values.email}
                                    placeholder="Enter your email address..."
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <div className="position-relative">
                                    <input
                                        type={passwordType}
                                        className="form-control"
                                        id="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={values.password}
                                        name="password"
                                        placeholder="Enter your password..."
                                    />

                                    <div className="position-absolute top-0 end-0 pe-3 pt-1">
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
                                                    <path
                                                        d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                                    <path
                                                        d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                                    <path
                                                        d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
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
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <small>
                                    <NavLink
                                        to={"/forget"}
                                        onClick={(e) => e.preventDefault()}
                                        className="modal-links"
                                        data-bs-toggle="modal"
                                        data-bs-target="#forgotmodal"
                                    >
                                        ForgetPassword
                                    </NavLink>
                                </small>
                            </div>
                            <ModalBtn
                                modalBtnType={"submit"}
                                modalBtnTitle={"Login your Account"}
                                btnClass={"btn-lg my-2"}
                            />
                            <div className="text-center">
                                <small
                                    className="form-text"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Don't have an account Create
                                    <NavLink to="/register" className="modal-links">
                                        Register now
                                    </NavLink>
                                </small>
                            </div>
                        </form>
                    )}
                </Formik>
            </ModalLayout>
        </React.Fragment>
    );
}

export default Login;
