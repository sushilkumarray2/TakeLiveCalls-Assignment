import React, { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router";

const Register = ({user,setUser}) => {
    
    const navigate = useNavigate();
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    const[repass,setRepass] = useState("");
    //const[user1,setUser1] = useState(getLocalStorage())
    const register = () => {

        if(name && email && pass && repass && (pass===repass))
        {
            let obj = user.find((ele)=>{
                return ele.useremail===email;
            })

            if(obj)
            {
                alert("User is already Registered. Please Login");
            }
            else
            {
                setUser([...user,{username:name,useremail:email,password:pass}]);
                alert("User Registered Successfully!!!");
                navigate("/");
            }
        }
        else
        {
            alert("Please fill all details");
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={name} placeholder="Your Name" onChange={(e)=>setName(e.target.value) }></input>
            <input type="text" name="email" value={email} placeholder="Your Email" onChange={(e)=>setEmail(e.target.value) }></input>
            <input type="password" name="password" value={pass} placeholder="Your Password" onChange={(e)=>setPass(e.target.value) }></input>
            <input type="password" name="reEnterPassword" value={repass} placeholder="Re-enter Password" onChange={(e)=>setRepass(e.target.value) }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/")}>Login</div>
        </div>
    )
}

export default Register