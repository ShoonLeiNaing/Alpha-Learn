import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { useStateValue } from '../../contexts/AuthContext'

export const PrivateRoute = ({component:Component, ...rest}) => {
    const[{user}]=useStateValue()
    return (
        <Route
        {...rest} 
        render={(props)=>{
            return user?<Component {...props}/>:<Redirect to='/login' />
        }}
        />
    )
}
