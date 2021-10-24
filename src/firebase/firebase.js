// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { query, getDocs } from "firebase/firestore";



// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKey,
  authDomain: "codecraft-cs.firebaseapp.com",
  projectId: "codecraft-cs",
  storageBucket: "codecraft-cs.appspot.com",
  messagingSenderId: process.env.REACT_APP_MessagingID,
  appId: process.env.REACT_APP_AppID,
  measurementId: process.env.REACT_APP_MeasurementID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();


async function register(team){
  let checkMails=true

  const q = query(collection(db, "registrations"));

  try{
    const querySnapshot = await getDocs(q); 
    if(querySnapshot.size>0){
      querySnapshot.forEach((doc) => {
        if(team.member1.email === doc.data().member1.email || 
          team.member1.email === doc.data().member2.email ||
          team.member2.email === doc.data().member1.email ||
          team.member2.email === doc.data().member2.email){
            checkMails=false
          }
      });
    }   
  }
  catch(e){
    return {status:false,desc:'Unknown Error Occured'};
  }   

  if(checkMails){
    try {
      const docRef = await addDoc(collection(db,"registrations"), team);
      return {status:true,desc:'Registration Successful'}; 
    } catch (e) {
      return {status:false,desc:'Registration Failed'};
    }
  }
  else{
    return {status:false,desc:'Mail ID already registered'};
  }  

}

export  {
  app,
  db,
  register
};

