import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Content = () => {

    return(
        <Routes>
            <Route path="/register" element={<Register/>}/>    
            <Route path="/login" element={<Login/>}/>   
        </Routes>
    );
}

export default Content;