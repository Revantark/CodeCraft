import React, { useState } from 'react'
import './register.css'
import RegisterForm from './registerForm';
import { validateName,validateEmail,validatePhNumber,validateCodeChefID, validateRollNumber} from './validations'

import {register} from '../../firebase/firebase'
function Register() {
  const [teamName, setTeamName] = useState();
  const [member1, setMember1] = useState({
    name:"",
    email:"",
    mobile:"",
    rollNumber:"",
    codechefid:"",
    branch:"",      
  })

  const [member2, setMember2] = useState({
    name:"",
    email:"",
    mobile:"",
    rollNumber:"",
    codechefid:"",
    branch:"",      
  }) 

  const [errorObj1, seterrorObj1] = useState({
    nameError:null,
    emailError:null,
    mobileError:null,
    rollNumberError:null,
    codechefIDError:null
  })

  const [errorObj2, seterrorObj2] = useState({
    nameError:null,
    emailError:null,
    mobileError:null,
    rollNumberError:null,
    codechefIDError:null
  })     

  async function submitForm() {
    var nameError=validateName(member1.name);
    var emailError=validateEmail(member1.email);
    var mobileError=validatePhNumber(member1.mobile);
    var rollNumberError=validateRollNumber(member1.rollNumber);
    var codechefIDError=validateCodeChefID(member1.codechefid);    
    
    seterrorObj1((m)=>{
      const mm={
        nameError:validateName(member1.name),
        emailError:validateEmail(member1.email),
        mobileError:validatePhNumber(member1.mobile),
        rollNumberError:validateRollNumber(member1.rollNumber),
        codechefIDError:validateCodeChefID(member1.codechefid)
      }
      return mm;
    })

    seterrorObj2((m)=>{
      const mm={
        nameError:validateName(member2.name),
        emailError:validateEmail(member2.email),
        mobileError:validatePhNumber(member2.mobile),
        rollNumberError:validateRollNumber(member2.rollNumber),
        codechefIDError:validateCodeChefID(member2.codechefid)
      }
      return mm;
    })  
    var flag = Object.values(errorObj1).every(x => x === null || x === '');
    var flag1= Object.values(errorObj2).every(x => x === null || x === ''); 
      
    if(flag && flag1){ 
      await register({
        member1:member1,
        member2:member2
      })
    }
    else{
      console.log("Erraneous");
    }   
   }
   
    return (
        <div className="register" style={{margin:'25px'}}>
            <div className="registerTitle">REGISTER</div>
            <div className="registerform"> 
              <RegisterForm 
              member={member1} setMember={setMember1} 
              no="1"
              errorObj={errorObj1} seterrorObj={seterrorObj1}
              />
              <RegisterForm 
              member={member2} setMember={setMember2} 
              no="2" 
              errorObj={errorObj2} seterrorObj={seterrorObj2}
              />                    
            </div>
            <button onClick={()=>submitForm()} className="button">Submit</button>                
        </div>
    )
}

export default Register;
