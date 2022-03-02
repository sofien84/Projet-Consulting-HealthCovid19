import axios from "axios" ; 

import {GET_DOCUMENTSDRS , EDIT_DOCUMENTSDRS, DELETE_DOCUMENTSDRS, DOCUMENTSDRS_ERROR, SETLOADING} from '../action/documentsDrsActionTypes'

// getdocumentsdrs
export const getdocumentsdrs = () => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.get('/api/documentsDrs/getdocumentsDrs', option)
       dispatch({
        type : GET_DOCUMENTSDRS ,
         payload : res.data ,
       })
    }
    catch(error)
    {
        // console.log(error)
        dispatch({
            type : DOCUMENTSDRS_ERROR

        })
    }


}

//  postdocumentsdrs
export const postdocumentsdrs = (data) => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.post('/api/documentsDrs/adddocumentsDrs', data,option)
       console.log(res.data)
       dispatch(getdocumentsdrs())
    }
    catch(error)
    {
        console.log(error)
        // dispatch({
        //     type : DOCUMENTSDRS_ERROR

        // })
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
export const editdocumentsdrs = (iddocumentsDrs , newdocumentsDrs) => async(dispatch) =>{
    dispatch(setloading())
    
    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }

        const res = await axios.put(`/api/documentsDrs/edit/${iddocumentsDrs}`, newdocumentsDrs)
        dispatch({
         type : EDIT_DOCUMENTSDRS,
          payload : res.data ,
        })
     }
     catch(error)
     {
         console.log(error)
         dispatch({
            type : DOCUMENTSDRS_ERROR
        })
     
     }
 
 
 }





// deletedocumentsdrs
export const  Delete = (iddocumentsDrs) => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.delete(`/api/documentsDrs/delete/${iddocumentsDrs}`, option)
       dispatch({
        type : DELETE_DOCUMENTSDRS ,
         payload : res.data ,
       })
    }
    catch(error)
    {
        console.log(error)
       
    }


}
