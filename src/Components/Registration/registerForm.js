import React,{useState} from 'react'
import InputField from '../globals/input'
import './registerForm.css'
import { validateName,validateEmail,validatePhNumber,validateCodeChefID, validateRollNumber} from './validations'

function RegisterForm({member,setMember,no, errorObj,seterrorObj}) {    

    function handleName(e) {
        setMember((m)=>{
          const mm={...m,name:e}
          return mm;
        })
        seterrorObj((m)=>{
            const mm={...m,nameError:validateName(e)}
            return mm;
        })
    }

    function handleEmail(e) {
        setMember((m)=>{
          const mm={...m,email:e}
          return mm;
        })
        seterrorObj((m)=>{
            const mm={...m,emailError:validateEmail(e)}
            return mm;
        })
    }

    function handleMobile(e) {
        setMember((m)=>{
          const mm={...m,mobile:e}
          return mm;
        })
        seterrorObj((m)=>{
            const mm={...m,mobileError:validatePhNumber(e)}
            return mm;
        })
    }

    function handleRollNumber(e) {
        setMember((m)=>{
            const mm={...m,rollNumber:e}
            return mm;
          })
        seterrorObj((m)=>{
            const mm={...m,rollNumberError:validateRollNumber(e)}
            return mm;
        })
    }

    function handleCodeChefID(e) {
        setMember((m)=>{
            const mm={...m,codechefid:e}
            return mm;
          })
          seterrorObj((m)=>{
            const mm={...m,codechefIDError:validateCodeChefID(e)}
            return mm;
        })
    }

    function handleBranch(e) {
        setMember((m)=>{
            const mm={...m,branch:e}
            return mm;
          })
    }
    
    return (
        <div className="member">
            <div className="membertitle" style={{height:'20px'}}>Member {no}</div>
            <InputField
                type="text"
                placeholder="Name"
                error={errorObj.nameError?errorObj.nameError:''}
                value={member.name}
                maxLength="15"
                onChange={(e)=>handleName(e.target.value)}
            />

            <InputField
                type="text"
                placeholder="Email"
                error={errorObj.emailError?errorObj.emailError:""}
                value={member.email}
                onChange={(e) => handleEmail(e.target.value)}
            />

            <InputField
                type="text"
                placeholder="Mobile Number"
                error={errorObj.mobileError?errorObj.mobileError:""}
                value={member.mobile}
                maxLength="10"
                onChange={(e) => handleMobile(e.target.value)}
            />
            <InputField
                type="text"
                placeholder="Roll Number"
                error={errorObj.rollNumberError?errorObj.rollNumberError : ""}
                value={member.rollNumber}
                maxLength="10"
                onChange={(e) => handleRollNumber(e.target.value)}
            />            
            <InputField
                type="text"
                placeholder="CodeChef ID"
                error={errorObj.codechefIDError ?errorObj.codechefIDError : ""}
                value={member.codechefid}
                onChange={(e) => handleCodeChefID(e.target.value)}
            />
            <select value={member.branch}
                onChange={(e) =>handleBranch(e.target.value)}>
                <option className="optionClass" value="CSE">CSE</option>
                <option className="optionClass" value="ECE">ECE</option>
                <option className="optionClass" value="IT">IT</option>
                <option className="optionClass" value="EEE">EEE</option>
                <option className="optionClass" value="CIVIL">CIV</option>
                <option className="optionClass" value="MECH">MECH</option>
                <option className="optionClass" value="CSM">CSM</option>
                <option className="optionClass" value="CSB">CSB</option>        
                <option className="optionClass" value="CSC">CSC</option>   
                <option className="optionClass" value="CSD">CSD</option>               
            </select> 
        </div>
    )
}

export default RegisterForm;
