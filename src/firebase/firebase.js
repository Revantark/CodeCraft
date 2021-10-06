// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey:process.env.APIKey,
  authDomain: "codecraft-cs.firebaseapp.com",
  projectId: "codecraft-cs",
  storageBucket: "codecraft-cs.appspot.com",
  messagingSenderId: process.env.MessagingID,
  appId: process.env.AppID,
  measurementId: process.env.MeasurementID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default app;

