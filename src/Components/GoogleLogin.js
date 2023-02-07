import firebase from "firebase";
const GoogleLogin = () => {
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
};

export default GoogleLogin;

const firebaseConfig = {
  // Your credentials
};

export { auth, provider };
