import {createContext, useState} from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {

    //variables
    const [area, setArea] = useState("")

    return (
        <AuthContext.Provider
            value={{area, setArea}}>
            {children}
        </AuthContext.Provider>
    )
}