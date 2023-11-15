import React ,{useState} from "react";


const Form =(props)=> {
const [fisrtName,setfirstrName]= useState("");
const [lastName,setlastName]= useState("");
const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const [confirmPassword,setConfirmPassword]= useState("");

 const CreateUser =(e) => {
    e.preventDefault();

    const newUser =() => {
    fisrtName=fisrtName;
    lastName=lastName;
    email=email;
    password=password;
    confirmPassword=confirmPassword;   
   
}
setfirstrName("");
setlastName("");
setEmail("");
setPassword("");
setConfirmPassword("");
}
    return (
        <div>
        <form onSubmit={CreateUser}>
        <div>
                <label>First name  </label> 
            <input type="text" value={fisrtName} onChange={(e)=> setfirstrName(e.target.value)} />
        </div>
        <div>
                <label>Last Name </label> 
            <input type="text" value={lastName} onChange={(e)=> setlastName(e.target.value)} />
        </div>
        <div>
                <label>Email </label> 
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
                <label>Password </label> 
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div>
                <label>Confirm Password</label> 
            <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
        </div>
            </form>
            <p>Your Form Data</p>
            
                <p>First Name : {fisrtName}</p>
                <p>Last Name :{lastName}</p>
                <p>Email : {email}</p>
                <p>Password :{password}</p>
                <p>Confirm Password : {confirmPassword}</p>
            
        </div>

    )
}

export default Form ;