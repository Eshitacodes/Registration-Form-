// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuTZuVynugcE38hJNVEQPrO-IasMzxPIA",
  authDomain: "registration-page-6af40.firebaseapp.com",
  projectId: "registration-page-6af40",
  storageBucket: "registration-page-6af40.appspot.com",
  messagingSenderId: "182872014677",
  appId: "1:182872014677:web:eb5f76ee0e46b333d439dc",
  measurementId: "G-GFKVHK0S07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);





const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-password");
const createacctbtn = document.getElementById("submit");

var emailValue, passwordValue, confirmPasswordValue;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  passwordValue = password.value;
  confirmPasswordValue = confirmPassword.value;
  if(passwordValue != confirmPasswordValue) 
  {
      window.alert("Password fields do not match. Try again.")
      isVerified = false;
  }

  if(email == null  || password == null || confirmPassword == null) 
  {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if(isVerified) 
  {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      window.alert("Registered Successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      window.alert("Invalid ID or Password");
    });
  }
});
