import React, { useState } from 'react'
import './register.css'
import RegisterForm from './registerForm';
import { validateName,validateEmail,validatePhNumber,validateCodeChefID, validateRollNumber} from './validations'

import {register} from '../../firebase/firebase'
import Dialog from '../globals/dialog';
import {useHistory} from 'react-router-dom';

function Register() {
  const history=useHistory();
  const [teamName, setTeamName] = useState();
  const [member1, setMember1] = useState({
    name:"",
    email:"",
    mobile:"",
    rollNumber:"",
    codechefid:"",
    branch:"CSE",      
  })

  const [member2, setMember2] = useState({
    name:"",
    email:"",
    mobile:"",
    rollNumber:"",
    codechefid:"",
    branch:"IT",      
  }) 

  const [errorObj1, seterrorObj1] = useState({
    nameError:"",
    emailError:"",
    mobileError:"",
    rollNumberError:"",
    codechefIDError:""
  })

  const [errorObj2, seterrorObj2] = useState({
    nameError:"",
    emailError:"",
    mobileError:"",
    rollNumberError:"",
    codechefIDError:""
  }) 
  
  const [status, setstatus] = useState(null);

  async function submitForm() {
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
    var flag = Object.values(errorObj1).every(x => x === null);
    var flag1= Object.values(errorObj2).every(x => x === null); 
      
    if(flag && flag1){ 
      console.log(!flag)
      console.log(!flag1)
      var status= await register({
        member1:member1,
        member2:member2
      })
      if(status===true){
        console.log("Register Successful");
        setstatus("Register Successful");
      }
      else{
        console.log("Register Unsuccessful");
        setstatus("Register Unsuccessful")
      }
    }
    else{
      console.log("Erraneous");
    }   
   }
   
    return (
      <div className="page"  >
        <nav>
          <ul style={{listStyle:'none'}}>
          <li className="registerTitle" onClick={()=>history.replace('/')}>HOME</li>
          <li className="verticalLine"></li>
          <li className="registerTitle" onClick={()=>history.replace('/register')}>REGISTER</li>
          </ul>
        </nav>

        {
          status && <Dialog message={status} setstatus={setstatus} 
          onOK={function(){
            setstatus(null);
            history.replace('/')
          }} />
        }
        
        <div className="register">
            <div className="instructions">
              <ul style={{color:'#ffd000',listStyle:'inside' }}>
                <li style={{marginBottom:'10px',}}>register only if both of you did not register </li>
                <li>create your codechef account prior to registration</li>
              </ul>
            </div>

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
      </div>
    )
}

export default Register;
