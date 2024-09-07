import Axios from "axios";
import Config from "../backend/config.json"
/*
use axios to create REST calls to backend
*/
async function login(loginRequest) {
    const requestBody = {
        email: loginRequest.email,
        password: loginRequest.password
    };

    const options = {
        method: "POST", // Method type ("POST", "GET", "DELETE", ect)
        baseURL: Config.baseUrl, // Base URL (localhost:8081 for example)
        url: Config.idm.login, // Path of URL ("/login")
        data: requestBody // Data to send in Body (The RequestBody to send)
    }

    return Axios.request(options);
}

async function register(registerRequest) {
    const requestBody = {
        email: registerRequest.email,
        password: registerRequest.password
    };

    const options = {
        method: "POST", // Method type ("POST", "GET", "DELETE", ect)
        baseURL: Config.baseUrl, // Base URL (localhost:8081 for example)
        url: Config.idm.register, // Path of URL ("/register")
        data: requestBody // Data to send in Body (The RequestBody to send)
    }

    return Axios.request(options);
}



export default {login, register};