import axios from "axios" ; 

import {GET_DOCTORS ,  PATIENT_ERROR, EDIT_USER , SETLOADING} from '../action/patientActionTypes'




// getdoctors
export const getdoctors = () => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.get('api/user/api/user',option)
       dispatch({
        type : GET_DOCTORS ,
         payload : res.data.user ,
       })
    }
    catch(error)
    {
        console.log(error)
        dispatch({
            type : PATIENT_ERROR
        })
    }


}



// setloading
export const setloading = () => (dispatch) => {

    try
    {
        dispatch({ type: SETLOADING
        })
    }
    catch(error)
    {
        console.log(error)
    }

}




//edit
export const edituser = (iduser , newuser) => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }

        const res = await axios.put(`/api/user/edit/${iduser}` , newuser)
        dispatch({
         type : EDIT_USER ,
          payload : res.data ,
        })
     }
     catch(error)
     {
         console.log(error)
         dispatch({
             type : PATIENT_ERROR
         })
     }
 
 
 }