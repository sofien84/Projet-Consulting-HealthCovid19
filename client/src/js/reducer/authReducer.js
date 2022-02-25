import { LOGIN , REGISTER ,  LOGOUT, GET_AUTH_USER ,  SETLOADING } from '../action/actionTypes'

const initialState  = {

    token :  localStorage.getItem("token") , 
    isLoading : false ,
    user  : null ,
    isAuth : false , 
    msg  : null,
    users:[]

}


const authReducer   =  (state  = initialState , action)=>{
    switch(action.type)
    {
      case REGISTER:
      case LOGIN: 
            localStorage.setItem("token" ,  action.payload.token)
            return {...state , isAuth : true , ...action.payload }
       case GET_AUTH_USER:
          return {...state , isAuth : true , ...action.payload }  
       case LOGOUT:
        localStorage.removeItem("token")
           return {...state , isAuth : false, user : null , msg: null }  
       case SETLOADING : 
            return {...state , isLoading: true } 

       default:
           return state 
    }

}

export   default  authReducer