import { GET_USER , DELETE_USER ,  SETLOADING, ADMIN_ERROR } from '../action/adminActionTypes'

const initialState  = {
    isLoading : true ,
    user  : [] ,
     }


const adminReducer  =  (state  = initialState , action)=>{
    switch (action.type)

    {
       
        case GET_USER:
          return {...state , user : action.payload , isLoad:false}  
        case DELETE_USER:
         return {...state , isAuth : true , ...action.payload }  
        case SETLOADING : 
            return {...state , isLoading: true } 
        case ADMIN_ERROR: 
            return {...state , isLoading: false } 
       default:
           return state 
    
    }
}
export default adminReducer
