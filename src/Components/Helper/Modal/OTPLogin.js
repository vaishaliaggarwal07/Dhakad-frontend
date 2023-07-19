import React, {useState} from "react";
import classes from './OTPLogin.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ModalLayout from "../../ModalLayout";
import ModalBtn from "../../ModalBtn";
import indIcon from "../../../Assets/icons/ind_flag.svg"
import dropDownArrow from "../../../Assets/icons/down-arrow-5.svg"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const OTPLogin = (props)=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOTPSent, setIsOTPSent] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSendOTP = ()=>{
        setIsOTPSent(true);
    }

    return (
        <>
            {!isOTPSent && <Formik
                initialValues={{ mobile: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.mobile) {
                        errors.mobile = 'Required';
                    } /*else if (
                        .test(values.mobile)
                    ) {
                        errors.mobile = 'Invalid mobile number';
                    }*/
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>


                {({ isSubmitting }) => (
                    <Form className="flex">
                        <div className={classes.dropDownCountryOutline}>

                            <IconButton className={classes.selectCountryIconBtn} aria-label="open country"
                                        component="span" onClick={handleClick}>
                                <img className={classes.selectCountryIcon} src={indIcon}/>
                                <div className={classes.selectCountryIconSeparator}></div>
                                <img className={classes.selectDropDownIcon} src={dropDownArrow}/>

                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <MenuItem onClick={handleClose}>
                                    <img className={classes.selectCountryIcon} src={indIcon}/>
                                </MenuItem>
                            </Menu>
                        </div>

                        <div className="flex flex-column">
                            <div className={classes.mobileInputBox}>
                                <div className={classes.countryCodePlaceholder}>+91</div>
                                <Field className={classes.mobileInput} type="number" name="mobile" placeholder="Enter mobile number" />
                            </div>
                            <ErrorMessage className={classes.errorText} name="mobile" component="div" />
                        </div>



                        <Button variant="contained" className={classes.otpBtn} disableElevation onClick={handleSendOTP}>
                            GET OTP
                        </Button>
                    </Form>
                )}
            </Formik>
            }
        </>
    );
}

export default OTPLogin;
