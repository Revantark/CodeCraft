export const validateName = (fullName) => {
    if (fullName === "") {
        return "name cannot be empty";
    } 
    else if (!/^[a-zA-Z .]*$/.test(fullName)) {
        return "name must contain only alphabets";
    } 
    else if (fullName.length < 3) {
        return "name must be atleast 3 characters!";
    } 
    else {
        return null
    }      
  }

export const validatePhNumber = (phoneNumber) => {
    const regE = /^[6-9]\d{9}$/;
    if (phoneNumber.toString().length > 10) {
        return "mobile number exceeds 10 digits";
    } 
    else if (phoneNumber.toString().length < 10) {
        return "mobile number must contain 10 digits";
    } 
    else if (!regE.test(phoneNumber)) {
        return "enter a valid mobile number";
    } 
    else{
        return null;
    }
}

export const validateEmail=(email,temp)=>{
    const regE = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email.length ===0) {
        return "email cannot be empty";
    }
    else if (!regE.test(email)) {
        return "email invalid";
    } 
    else {
        return null;
    }     
}

export const validateRollNumber=(rn)=>{
    var rollNumber = rn.toUpperCase();
    let rollRegex = new RegExp(/^(18|19|20|21)(p6|p5)(01|02|03|04|05|12|56|62|66|67|69|70)[(a-z)|(0-9)][0-9]$/i);
    if(rollNumber.length===0){
        return "roll number cannot be empty";
    }
    else if(rollNumber.length<10){
        return "roll number cannot be less than 10 characters";
    }
    // else if(rollNumber.length>10){
    //     return "roll number cannot exceed 10 characters";
    // }

    else if(!rollRegex.test(rollNumber)){
        return "roll number invalid";  
    } 
    else{
        return null;
    }   
}

export const validateCodeChefID = (codechefid) => {
    if (codechefid === "") {
        return "name cannot be empty";
    } 
    else if (codechefid.length < 3) {
        return "name must be atleast 3 characters!";
    } 
    else {
        return null;
    }      
}
