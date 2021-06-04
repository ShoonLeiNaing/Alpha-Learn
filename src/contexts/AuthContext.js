import React,{useContext,useReducer,createContext} from 'react'

const AuthContext = createContext()

export function AuthProvider ({children,reducer,initialState}){
    return(
        <AuthContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </AuthContext.Provider>
    )
}
export const useStateValue =()=> useContext(AuthContext)