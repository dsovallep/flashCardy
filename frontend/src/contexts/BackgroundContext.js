import React, { createContext } from "react";
import background from "../assets/background.png";

export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    return (
        <BackgroundContext.Provider value = {background}>
            {children}
        </BackgroundContext.Provider>
    );
};