import React, {useState} from "react";
import classes from './OTPLogin.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import indIcon from "../../../Assets/icons/ind_flag.svg"
import dropDownArrow from "../../../Assets/icons/down-arrow-5.svg"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import tickIcon from '../../../Assets/icons/check_svgrepo.svg';
import rightArrowOTPIcon from '../../../Assets/icons/right_arrow_otp.svg';

const OTPLogin = (props)=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOTPRequested, setIsOTPRequested] = useState(false);
    const [timer, setTimer] = useState('00:00');
    const [isOTPResend, setIsOTPResend] = useState(false);
    const [isOTPVerifySuccess, setIsOTPVerifySuccess] = useState(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSendOTP = ()=>{
        setIsOTPRequested(true);
    }

    const handlePhoneNumberSubmit = (values,setSubmitting)=>{
        console.log('OTPLogin:handlePhoneNumberSubmit: ',values,setSubmitting);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    const handleOTPSubmit = (values,setSubmitting)=>{
        console.log('OTPLogin:handleOTPSubmit: values ',values);
    }
    const handleKeyDownForOtpInput = (event)=>{
        if(event.key==='-'){
            event.preventDefault();
        }
        if(event.code !=='Backspace'){
            if(event.target.value && event.target.value.length === 1){
                event.preventDefault()
            }
        }
    }

    const handleKeyUpForOTPInput = (event)=>{
        if(!isNaN(+event.key) && event.target.value!=='' && event.target.nextElementSibling){
            event.target.nextElementSibling.focus();
        }
        if(event.code ==='Backspace' && event.target.previousElementSibling){
            event.target.previousElementSibling.focus();
        }
    }

    const handleVerifyOTP = (event)=>{

    }

    const handleGetStarted = ()=>{

    }

    return (
        <>
            {false && <Formik
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
                onSubmit={handlePhoneNumberSubmit}>


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
                                <Field className={classes.numberInput} type="number" name="mobile" placeholder="Enter mobile number" />
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

            {isOTPRequested && <Formik
                initialValues={{OTPNumber1:'',OTPNumber2:'',OTPNumber3:'',OTPNumber4:''}} onSubmit={handleOTPSubmit}>

                {({ isSubmitting }) => (
                    <Form className={`flex flex-column ${classes.otpInputSection} pt-5 pb-5`}>
                        <span className={classes.OTPEnterText}>Please enter OTP to verify</span>
                        <span className={classes.OTPSentText}>OTP has sent on mobile number +91 xxxxxxxxxxx</span>

                        <div className={`flex flex-row justify-content-center mt-4 ${classes.otpInputContainer}`}>
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber1" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber2" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber3" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber4" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                        </div>
                        <div className={classes.otpInputError}>
                            Please enter valid OTP
                        </div>

                        {/*<span className={classes.timeRemainingText}>1:00</span>*/}
                        <div className={classes.didntGetOTP}>Didn’t get OTP ?<span className={classes.resendOTP}> Re-send now</span></div>

                        <div className="w-100 flex flex-row justify-content-center mt-4">
                            <Button variant="contained" className={classes.verifyOTPBtn} disableElevation onClick={handleVerifyOTP}>
                                Verify OTP
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            }
            {isOTPVerifySuccess && <div className="flex flex-column justify-content-center mt-5 mb-5">
                <div className={classes.verifyTickContainer}>
                    <img className={classes.verifyTickIcon} src={tickIcon}/>
                </div>

                <span className={classes.verifiedText}>Verified</span>

                <div className="w-100 flex flex-row justify-content-center mt-4">
                    <Button variant="contained" className={classes.getStartedBtn} disableElevation onClick={handleGetStarted()}>
                        Get Started <img className={classes.rightArrowIcon} src={rightArrowOTPIcon}/>
                    </Button>
                </div>

            </div>}

        </>
    );
}

export default OTPLogin;
