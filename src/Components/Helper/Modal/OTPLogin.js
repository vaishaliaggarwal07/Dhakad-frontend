import React, {useState} from "react";
import classes from './OTPLogin.module.css'
import { Formik, Form, Field } from 'formik';
import indIcon from "../../../Assets/icons/ind_flag.svg"
import dropDownArrow from "../../../Assets/icons/down-arrow-5.svg"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import tickIcon from '../../../Assets/icons/check_svgrepo.svg';
import rightArrowOTPIcon from '../../../Assets/icons/right_arrow_otp.svg';
import * as Yup from "yup";
import firebaseHelper from '../../../Utils/helpers/firebase-helper';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch} from "react-redux";
import {registerFirebaseUser} from "../../../Redux/Actions/auth";
import {useLocation} from "react-router-dom";

const phoneAuthSchema = Yup.object().shape({
    mobile: Yup.number().min(1000000000,'Please enter valid mobile number').max(9999999999,'please enter valid mobile number').integer('please enter valid mobile number').required('Mobile Required'),
});

const otpSchema = Yup.object().shape({
    OTPNumber1:Yup.number().min(0).max(9).integer().required(),
    OTPNumber2:Yup.number().min(0).max(9).integer().required(),
    OTPNumber3:Yup.number().min(0).max(9).integer().required(),
    OTPNumber4:Yup.number().min(0).max(9).integer().required(),
    OTPNumber5:Yup.number().min(0).max(9).integer().required(),
    OTPNumber6:Yup.number().min(0).max(9).integer().required(),
})

const OTPLogin = (props)=>{

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOTPRequested, setIsOTPRequested] = useState(false);
    const [isOTPVerifySuccess, setIsOTPVerifySuccess] = useState(false);
    const [otpVerifyMessage, setOtpVerifyMessage] = useState(null);
    const [seconds, setSeconds] = useState('59');
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [confirmationResult, setConfirmationResult] = useState(null);

    // generateCaptcha();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePhoneNumberSubmit = (values,{setSubmitting})=>{
        const phoneNumber = '+91'+values.mobile
        let appVerifier = new RecaptchaVerifier(firebaseHelper.firebaseAuth,'otpCaptchaContainer', {
            'size': 'invisible',
            'callback': (response) => {
                // onSendOTP(phoneNumber,setSubmitting)
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            }
        });
        signInWithPhoneNumber(firebaseHelper.firebaseAuth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code)
                console.log('OTPLogin:confirmations result : ',confirmationResult);
                if(confirmationResult){
                    setConfirmationResult(confirmationResult);
                    setPhoneNumber(phoneNumber);
                    setIsOTPRequested(true);
                    startCountdownTimerForOTPResend();
                }
                setSubmitting(false);
                // appVerifier._reset();
            }).catch((error) => {
            // Error; SMS not sent
            console.error('custom ',error);
            setSubmitting(false);
        });
    }


    const startCountdownTimerForOTPResend = ()=>{
        setSeconds('59')
        let secondsNum = 59;
        let myInterval = setInterval(() => {
            secondsNum--
            if(secondsNum<10){
                setSeconds('0'+secondsNum)
                if (secondsNum === 0) {
                    clearInterval(myInterval)
                    // myInterval.clear();
                }
            }else{
                setSeconds(secondsNum.toString());
            }
        }, 1000)
    }

    const handleOTPSubmit = (values,{setSubmitting})=>{
        let otpValues = '';
        for(let key in values){
            otpValues+= values[key];
        }
        confirmationResult.confirm(otpValues).then(result=>{
            console.log('OTPLogin:result: ',result);
            setOtpVerifyMessage(null);
            setIsOTPVerifySuccess(true);
            setSubmitting(false);
            dispatch(registerFirebaseUser({mobile:phoneNumber,userType:'user',firebaseToken:result.user.accessToken,firebaseUID:result.user.uid}))
        }).catch((error)=>{
            if(error.code === 'auth/invalid-verification-code'){
                setOtpVerifyMessage('Invalid OTP')
            }else{
                setOtpVerifyMessage(error.code)
            }
            console.log('OTPLogin:result:error ',error);
            setSubmitting(false);
        })
        // startCountdownTimerForOTPResend();
    }
    const handleKeyDownForOtpInput = (event)=>{
        if(event.key==='-'){
            event.preventDefault();
        }
        if(event.code !=='Backspace' && event.key !=='Enter'){
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

    const handleGetStarted = ()=>{
        props.onGetStartedClick(true);
        window.location.reload();
    }

    const handleResendOTP = ()=>{
        if(phoneNumber){
            let appVerifier = new RecaptchaVerifier(firebaseHelper.firebaseAuth,'otpCaptchaContainerResend', {
                'size': 'invisible',
                'callback': (response) => {
                    // onSendOTP(phoneNumber,setSubmitting)
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    // ...
                }
            });
            signInWithPhoneNumber(firebaseHelper.firebaseAuth, phoneNumber,appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code)
                    console.log('OTPLogin:confirmations result : resend',confirmationResult);
                    if(confirmationResult){
                        startCountdownTimerForOTPResend();
                    }
                }).catch((error) => {
                // Error; SMS not sent
                console.error('custom ',error);
            });
        }
    }

    return (
        <>
            {!isOTPRequested && <Formik
                initialValues={{ mobile: '' }}
                validationSchema={phoneAuthSchema}
                onSubmit={handlePhoneNumberSubmit}>


                {({ errors, touched,isSubmitting,isValid }) => (
                    <Form>
                        <div className="flex mt-5">
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
                                <div className={`${classes.mobileInputBox} ${(errors.mobile && touched.mobile) && classes.inputBoxError}`}>
                                    <div className={classes.countryCodePlaceholder}>+91</div>
                                    <Field className={`${classes.numberInput} ${classes.mobileInput}`} type="number" name="mobile" placeholder="Enter mobile number" />
                                </div>
                                {errors.mobile && touched.mobile && <div className={classes.errorText}>{errors.mobile}</div>}
                            </div>

                            <Button variant="contained" id="getOTPBtn" className={classes.otpBtn} classes={{disabled:classes.disabledButton}} disableElevation type="submit" disabled={(isSubmitting || !isValid)}>
                                GET OTP {isSubmitting && <CircularProgress className="ms-2" size="1.5rem"/>}
                            </Button>
                        </div>
                        <div className="flex mb-5">
                            <div className={classes.captchaContainer} id="otpCaptchaContainer"></div>
                        </div>
                    </Form>
                )}
            </Formik>
            }

            {(isOTPRequested && !isOTPVerifySuccess) && <Formik
                initialValues={{OTPNumber1:'',OTPNumber2:'',OTPNumber3:'',OTPNumber4:'',OTPNumber5:'',OTPNumber6:''}}
                validationSchema={otpSchema}
                onSubmit={handleOTPSubmit}>

                {({ errors, touched,isSubmitting,isValid }) => (
                    <Form className={`flex flex-column ${classes.otpInputSection} pt-5 pb-5`}>
                        <span className={classes.OTPEnterText}>Please enter OTP to verify</span>
                        <span className={classes.OTPSentText}>OTP has sent on mobile number +91 xxxxxxxxxxx</span>

                        <div className={`flex flex-row justify-content-center mt-4 ${classes.otpInputContainer}`}>
                            <Field autoFocus className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber1" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber2" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber3" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber4" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber5" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                            <Field className={`${classes.numberInput} ${classes.otpInput}`} type="number" name="OTPNumber6" min="0" max="9" onKeyDown={handleKeyDownForOtpInput} onKeyUp={handleKeyUpForOTPInput} />
                        </div>
                        {((touched && !isValid)||otpVerifyMessage) &&
                            <div className={classes.otpInputError}>
                                {otpVerifyMessage?otpVerifyMessage:'Please enter valid OTP'}
                            </div>
                        }

                        {seconds !== '00' && <span className={classes.timeRemainingText}>00:{seconds}</span>}
                        {seconds === '00' && <div className={classes.didntGetOTP}>Didn’t get OTP ?
                            <span className={classes.resendOTP} onClick={handleResendOTP}> Re-send now</span></div>}

                        <div className="flex mt-2 justify-content-center">
                            <div className={classes.captchaResendContainer} id="otpCaptchaContainerResend"></div>
                        </div>

                        <div className="w-100 flex flex-row justify-content-center mt-4">
                            <Button variant="contained" id="verifyOTPBtn" className={classes.verifyOTPBtn} classes={{disabled:classes.disabledButton}} disabled={isSubmitting || !isValid} disableElevation type="submit">
                                Verify OTP {isSubmitting && <CircularProgress className="ms-2" size="1.5rem"/>}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            }
            {(isOTPRequested && isOTPVerifySuccess) && <div className="flex flex-column justify-content-center mt-5 mb-5">
                <div className={classes.verifyTickContainer}>
                    <img className={classes.verifyTickIcon} src={tickIcon}/>
                </div>

                <span className={classes.verifiedText}>Verified</span>

                <div className="w-100 flex flex-row justify-content-center mt-4">
                    <Button variant="contained" className={classes.getStartedBtn} disableElevation onClick={handleGetStarted}>
                        Get Started <img className={classes.rightArrowIcon} src={rightArrowOTPIcon}/>
                    </Button>
                </div>

            </div>}

        </>
    );
}

export default OTPLogin;
