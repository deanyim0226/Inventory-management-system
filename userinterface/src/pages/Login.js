import React from "react";
import { useEffect, useState } from "react";
import { useUser } from "../hook/User";
import {useNavigate} from "react-router-dom";
import idm from "../backend/idm";

const Login = () =>{

    const {accessToken, setAccessToken} = useUser();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    let login = (evt) =>{
        console.log("register");

        const user = {
            email,
            password
        }
        
        idm.login(user)
            .then(response => {
                alert(response.data.accessToken)
                setAccessToken(response.data.accessToken)
                navigate("/")
            })
            .catch(error => {
                console.error("Error details:", error);
                alert(JSON.stringify(error.response))
            });
        
        evt.preventDefault();
    }

    return(

        <form className={"form-register"} onSubmit={login}>       
        <h1>Login</h1>
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
        <button className="btn btn-warning" >Coninue </button>
        <br/>
        </form>
    );

}

export default Login;