import React, {useState} from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"

const Login = ({user,setUserName,setUserEmail}) => {
    const nevigate  = useNavigate();
    const [ email,setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const login = () => {


           if(email && password)
           {
             if(user)
             {
                let obj = user.find((ele)=>{
                     return ((ele.useremail===email) && (ele.password==password));
                })

                if(obj)
                {
                    setUserName(obj.username);
                    setUserEmail(obj.useremail);
                    nevigate("/Login/Dashboard");
                }
                else
                { 
                    alert("User has not registered");
                }
                
             }
             else
             {
                alert("User has not registered");
             }
            
           }
           else
           {
            alert("Please Enter User Id and Password");
           }
            
        }
    

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => nevigate("/Register")}>Register</div>
        </div>
    )
}

export default Login