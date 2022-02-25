
import { SETLOADING,  GET_DOCUMENTSDRS, EDIT_DOCUMENTSDRS, DELETE_DOCUMENTSDRS, DOCUMENTSDRS_ERROR } from '../action/documentsDrsActionTypes';

const initialState  = {

    token :  localStorage.getItem("token") , 
    isLoading : false ,
    user  : null ,
    isAuth : false , 
    drs  : []

}

const documentsDrsReducer   =  (state  = initialState , action)=>{
    switch(action.type)
    {
 
        case GET_DOCUMENTSDRS:
          return {...state , isLoad:false , drs : action.payload }  
        case EDIT_DOCUMENTSDRS:
          return {...state , isAuth : true , ...action.payload }  
        case DELETE_DOCUMENTSDRS:
          return {...state , isAuth : true , ...action.payload }  
        case SETLOADING : 
            return {...state , isLoading: true } 
        case DOCUMENTSDRS_ERROR: 
            return {...state , isLoading: false } 
       default:
           return state 
    }


}

export   default  documentsDrsReducer