import React from "react";
import { useEffect, useState } from "react";

import {useNavigate} from "react-router-dom";
import idm from "../backend/idm";

const Register = (prop) =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const navigate = useNavigate();

    let register = (evt) =>{
        console.log("register");

        const user = {
            email,
            password
        }

        console.log(user);
        console.log(user);

        idm.register(user)
            .then(() =>alert("success"))
            .catch((error) => alert("error"));
        
        evt.preventDefault();
    }

    return(
        <>
            <form className={"form-register"} onSubmit={register}>       
            <h1>Register</h1>
            <label>
            <b>Email</b>
            <input type="text" className="form-control" value={email}  
            onChange={ (evt) => {setEmail(evt.target.value)}}
            placeholder="Email" maxLength={20} required/>
            </label>
            <label>
                <b>Password</b>
                <input type="password" className="form-control" value={password}  onChange={ (evt) => {setPassword(evt.target.value)}}
                        placeholder="Password is required" maxLength={20} required/>
            </label>
 
            <br/>
            <label>
                <b>Re-enter password</b>
                <input type="password" className="form-control" value={repassword}  onChange={ (evt) => {setRepassword(evt.target.value)}}
                        placeholder="Re-passwrod is required" maxLength={20} required/>
            </label>
            <br/>
            <button className="btn btn-warning" >Coninue </button>
            <br/>
            <label>Already have an account? <a>Sign in</a></label>
            </form>
        </>

    );

}

export default Register;