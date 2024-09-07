import React from "react"
import Content from "./Content";
import { UserProvider } from "../hook/User";

const App = () =>{

    return(
        <UserProvider>
                 <Content></Content>
        </UserProvider>
   
    );
}

export default App;