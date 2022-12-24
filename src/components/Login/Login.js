import React, { useState } from "react"
import "./Login.css"
import axios from "axios"

const Login = () =>{

       
            const [ user, setUser ] = useState({
                
                email:"",
                password:""
                
            })
        
            const handleChange = e => {
               
                const { name,value } =e.target
                setUser({
                    ...user,
                    [name]:value
                })
            }
            const Login = () => {
                axios.post("http://localhost:9002/login", user)
                .then(res => console.log(res))

            }
        return(
        <div className="login">
          
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <input type="password"  name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"></input>
            <div className="button" onClick={Login}>Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}
export default Login;