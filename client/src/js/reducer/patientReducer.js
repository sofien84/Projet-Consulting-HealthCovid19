import {GET_DOCTORS , SETLOADING, PATIENT_ERROR } from '../action/patientActionTypes'

const initialState  = {
    isLoading : true ,
    user  : [] ,
     }


const patientReducer  =  (state  = initialState , action)=>{
    switch (action.type)

    {
       
        case GET_DOCTORS:
          return {...state , user : action.payload , isLoad:false}  
        case SETLOADING : 
            return {...state , isLoading: true } 
        case PATIENT_ERROR: 
            return {...state , isLoading: false } 
       default:
           return state 
    
    }
}
export default patientReducer
