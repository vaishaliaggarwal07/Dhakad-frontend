// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { sendEmailVerification, verifyPhoneNumber,PhoneAuthProvider, RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app);

const firebaseHelper = {
    firebaseApp:app,
    firebaseAuth,

    sendEmailVerification: () => {
        const user = firebaseAuth.currentUser;
    
        sendEmailVerification(user)
          .then(() => {
            // Email verification sent
            console.log("Email verification sent.");
          })
          .catch((error) => {
            // Error occurred while sending email verification
            console.error("Error sending email verification:", error);
          });
      },
      sendPhoneVerification: (phoneNumber) => {
        const phoneAuthProvider = new PhoneAuthProvider(firebaseAuth);
        // const appVerifier = new RecaptchaVerifier("recaptcha-container", {
        //   size: "invisible",
        // });
    
        phoneAuthProvider
          .verifyPhoneNumber(phoneNumber)
          .then(() => {
            // SMS sent successfully
            console.log("SMS sent successfully");
            // Save verificationId to verify the code later
          })
          .catch((error) => {
            // Error sending SMS
            console.error("Error sending SMS:", error);
          });
      },
};

export default firebaseHelper;
