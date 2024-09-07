import React, { createContext, useState, useContext } from "react";

const localStorage = require("local-storage");

const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [accessToken, accessTokenSetter] = useState( localStorage.get("access_token"));

    const setAccessToken = (accessToken) => {
        accessTokenSetter(accessToken);
       
        localStorage.set("access_token", accessToken);
       
    }

    const value = {
        accessToken, setAccessToken,
    }

    return (
      <UserContext.Provider value={value}>
          {children}
      </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext);
}
