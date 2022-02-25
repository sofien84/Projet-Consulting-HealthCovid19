import React from 'react'
import { useSelector} from "react-redux"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({component : Component, ...rest}) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    if(!isAuth){
        <Redirect to ='/' />
        
    }

    return (
        <div>
        <Route component={Component} {...rest} />  
        </div>
    )
}

export default PrivateRoute


