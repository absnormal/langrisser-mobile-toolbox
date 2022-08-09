// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBb56cSkIAop67Sp5ZYPPrfD0dN-q9J6xs",
	authDomain: "langrissermobile-calculator.firebaseapp.com",
	databaseURL: "https://langrissermobile-calculator-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "langrissermobile-calculator",
	storageBucket: "langrissermobile-calculator.appspot.com",
	messagingSenderId: "639726374538",
	appId: "1:639726374538:web:eb9adb4ff98d316a602773",
	measurementId: "G-K6ZN3F519F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);