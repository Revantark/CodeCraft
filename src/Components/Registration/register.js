import React, { useState,useEffect } from 'react'
import InputField from '../globals/input';
import './register.css'
function Register() {
    const [name1, setname1] = useState();
    const [email1, setemail1] = useState();
    const [mobile1, setmobile1] = useState();
    const [rollnumber1, setrollnumber1] = useState();
    const [codechefid1, setcodechefid1] = useState();

    const [name1error, setname1error] = useState();
    const [email1error, setemail1error] = useState();
    const [mobile1error, setmobile1error] = useState();
    const [rollnumber1error, setrollnumber1error] = useState();
    const [codechefid1error, setcodechefid1error] = useState();

    const [name2, setname2] = useState();
    const [email2, setemail2] = useState();
    const [mobile2, setmobile2] = useState();
    const [rollnumber2, setrollnumber2] = useState();
    const [codechefid2, setcodechefid2] = useState();

    const [name2error, setname2error] = useState();
    const [email2error, setemail2error] = useState();
    const [mobile2error, setmobile2error] = useState();
    const [rollnumber2error, setrollnumber2error] = useState();
    const [codechefid2error, setcodechefid2error] = useState();

    async function register(){
      if()
      
    }


    useEffect(() => {

      return () => {

        
      }
    }, [])
    const validateName = (e,temp) => {
        const fullName = e.target.value;
        let flag =null;

        if(temp){
            if (fullName === "") {
            setname1error("Name cannot be Empty");
            } else if (!/^[a-zA-Z .]*$/.test(fullName)) {
            setname1error("Name must contain only alphabets");
            } else if (fullName.length < 3) {
                setname1error("Name must be atleast 3 characters!");
            } else {
                setname1error(null);
            flag = true;
            }
            setname1(e.target.value)
        }
        else{
            if (fullName === "") {
                setname2error("Name cannot be Empty");
              } else if (!/^[a-zA-Z .]*$/.test(fullName)) {
                setname2error("Name must contain only alphabets");
              } else if (fullName.length < 3) {
                  setname2error("Name must be atleast 3 characters!");
              } else {
                  setname2error(null);
                flag = true;
              }
              setname2(e.target.value);
        }   
        return flag;
      }

    const validatePhNumber = (e,temp) => {
        const phoneNumber = e.target.value;
        const regE = /^[6-9]\d{9}$/;
        let flag = false;

        if(temp){
            if (phoneNumber.toString().length > 10) {
                setmobile1error("Mobile Number exceeds 10 digits");
              } else if (phoneNumber.toString().length < 10) {
                  setmobile1error("Mobile Number must contain 10 digits");
              } else if (!regE.test(phoneNumber)) {
                  setmobile1error("Enter a valid Mobile Number");
              } else {
                  setmobile1error(null);
                flag = true;
              }
              setmobile1(e.target.value);
        }
        else{
            if (phoneNumber.toString().length > 10) {
                setmobile2error("Mobile Number exceeds 10 digits");
              } else if (phoneNumber.toString().length < 10) {
                  setmobile2error("Mobile Number must contain 10 digits");
              } else if (!regE.test(phoneNumber)) {
                  setmobile2error("Enter a valid Mobile Number");
              } else {
                  setmobile2error(null);
                flag = true;
              }
              setmobile2(e.target.value);
        }   
        return flag;
      }

      const validateEmail=(e,temp)=>{
        const email = e.target.value;
        const regE = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        let flag = false;

        if(temp){
            if (email.length ==0) {
                setemail1error("Email Not entered");
              }
              else if (!regE.test(email)) {
                setemail1error("Email Invalid");
              } 
              else {
                setemail1error(null);
                flag = true;
              }
              setemail1(e.target.value);
        }
        else{
            if (email.length ==0) {
                setemail2error("Email Not entered");
              }
              else if (!regE.test(email)) {
                setemail2error("Email Invalid");
              } 
              else {
                setemail2error(null);
                flag = true;
              }
              setemail2(e.target.value);
        }   
        return flag;
      }

    return (
        <div className="register" style={{margin:'25px'}}>
            <div className="registerform"> 
                       
              <div className="member">
                <div className="title" style={{height:'20px'}}>Team Member 1</div>
                <InputField
                    type="text"
                    placeholder="Name"
                    error={name1error ? name1error : ""}
                    value={name1}
                    maxLength="15"
                    onChange={(e) => validateName(e,true)}
                />
                <InputField
                    type="text"
                    placeholder="Email"
                    error={email1error ? email1error : ""}
                    value={email1}
                    onChange={(e) => validateEmail(e,true)}
                />
                <InputField
                    type="text"
                    placeholder="Mobile Number"
                    error={mobile1error ? mobile1error : ""}
                    value={mobile1}
                    maxLength="10"
                    onChange={(e) => validatePhNumber(e,true)}
                />
                <InputField
                    type="text"
                    placeholder="Roll Number"
                    error={rollnumber1error ? rollnumber1error : ""}
                    value={rollnumber1}
                    maxLength="10"
                    onChange={(e) => setrollnumber1(e.target.value)}
                />            
                <InputField
                    type="text"
                    placeholder="CodeChef ID"
                    error={codechefid1error ? codechefid1error : ""}
                    value={codechefid1}
                    onChange={(e) => setcodechefid1(e.target.value)}
                />            
              </div>

              <div className="member">
                <div className="title" style={{height:'20px'}}>Team Member 2</div>
                <InputField
                    type="text"
                    placeholder="Name"
                    error={name2error ? name2error : ""}
                    value={name2}
                    maxLength="15"
                    onChange={(e) => validateName(e,false)}
                />
                <InputField
                    type="text"
                    placeholder="Email"
                    error={email2error ? email2error : ""}
                    value={email2}
                    onChange={(e) => validateEmail(e,false)}
                />
                <InputField
                    type="text"
                    placeholder="Mobile Number"
                    error={mobile2error ? mobile2error : ""}
                    value={mobile2}
                    maxLength="10"
                    onChange={(e) => validatePhNumber(e,false)}
                />
                <InputField
                    type="text"
                    placeholder="Roll Number"
                    error={rollnumber2error ? rollnumber2error : ""}
                    value={rollnumber2}
                    maxLength="10"
                    onChange={(e) => setrollnumber2(e.target.value)}
                />            
                <InputField
                    type="text"
                    placeholder="CodeChef ID"
                    error={codechefid2error ? codechefid2error : ""}
                    value={codechefid2}
                    onChange={(e) => setcodechefid2(e.target.value)}
                />            
              </div>

            </div>

            <button onClick={()=>register()} className="button">Submit</button>                
        </div>
    )
}

export default Register;
