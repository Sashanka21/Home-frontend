import React, {useState} from "react"
import "./Register.css"
import axios from "axios"

const Register = () =>{
    const [ user,setUser ] = useState({
        name:"",
        email:"",
        dlno:"",
        address:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e => {
       
        const { name,value } =e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const Register = () =>{
        const { name,email,dlno,address,password,reEnterPassword } = user
        if( name && email && dlno && address && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/Register", user)
            .then( res => console.log(res))

        }else{
            alert("Invalid Input")
        }
      

    }
    return(
        <div className="register">
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
        <input type="text" name="dlno" value={user.dlno} placeholder="Enter Your DL No" onChange={handleChange}></input>
        <input type="text" name="address" value={user.address} placeholder="Enter Your Address" onChange={handleChange}></input>

        <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Your Password" onChange={handleChange}></input>

        <div className="button" onClick={Register} >Register</div>
        <div>or</div>
        <div className="button">Login</div>
    </div>
    )
}
export default Register;