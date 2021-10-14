// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore"


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
const db = getFirestore();


async function register(team){
  try {
    const docRef = await addDoc(collection(db,"registrations"), team);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export  {
  app,
  register
};

