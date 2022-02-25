
import axios from "axios" ; 

import {GET_USER , DELETE_USER ,  ADMIN_ERROR, SETLOADING} from '../action/adminActionTypes'



// getuser
export const getuser = () => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.get('api/user/api/user',option)
       dispatch({
        type : GET_USER ,
         payload : res.data.user ,
       })
    }
    catch(error)
    {
        console.log(error)
        dispatch({
            type : ADMIN_ERROR
        })
    }


}


// deleteuser
export const  Delete = (iduser) => async(dispatch) =>{
    dispatch(getuser())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.delete(`api/user/delete/${iduser}` ,  option)
       dispatch({
        type : DELETE_USER ,
         payload : res.data ,
       })
    }
    catch(error)
    {
        console.log(error)
        dispatch({
            type : ADMIN_ERROR
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