import React, { useReducer, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children, reducer, initialState }) => {
    const [globalUserState, dispatch] = useReducer(initialState, reducer);

    return (
        <AuthContext.Provider value={{ globalUserState, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
// export const useStateValue = () => useContext(AuthContext)
// const { globalUserState, dispatch } = useContext(AuthContext)  //, using authContext
