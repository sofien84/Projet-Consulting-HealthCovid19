
import { SETLOADING, GET_MESSAGE , MESSAGE_ERROR } from '../action/messageActionTypes';

const initialState  = {

    token :  localStorage.getItem("token") , 
    isLoading : false ,
    user  : null ,
    isAuth : false , 
    msg  : []

}

const messageReducer   =  (state  = initialState , action)=>{
    switch(action.type)
    {
    //    case POST_MESSAGE:
    //       return {...state , isLoad:false , msg: action.payload }  
          case GET_MESSAGE:
          return {...state , isLoad:false , msg: action.payload }  
        case SETLOADING : 
            return {...state , isLoading: true } 
        case MESSAGE_ERROR: 
            return {...state , isLoading: false } 
       default:
           return state 
    }


}

export   default  messageReducer

