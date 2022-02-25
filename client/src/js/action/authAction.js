import axios from "axios" ; 

import {LOGIN , REGISTER ,  LOGOUT, GET_AUTH_USER , AUTH_ERROR, SETLOADING} from '../action/actionTypes'




// register
export const register = (formData) => async(dispatch) => {
       dispatch(setloading())
        
     try
     { const res = await axios.post('/api/user/register' , formData) ;
        dispatch({
         type : REGISTER ,
         payload : res.data
        })
     }
     catch(error)
     {
         console.dir(error)
         const errorsArray = error.response.data.errors
         const msg = error.response.data.msg
        
         
         if(Array.isArray(errorsArray)){
          errorsArray.forEach(el=>alert(el.msg))
      }
      if(msg)
      {
          alert(msg)
      }
         dispatch({
          type : AUTH_ERROR
      })
      }
     
}


// login
export const login  = (formData) => async(dispatch) => {
       dispatch(setloading())

    try
    {
        const res = await axios.post('/api/user/login' , formData) ;
        dispatch({
         type : LOGIN ,
         payload : res.data

    })
    }
    catch(error)
    {
        console.dir(error)
        const errorsArray = error.response.data.errors
        const msg = error.response.data.msg
       
        
        if(Array.isArray(errorsArray)){
         errorsArray.forEach(el=>alert(el.msg))
     }
     if(msg)
     {
         alert(msg)
     }
        dispatch({
         type : AUTH_ERROR
     })
     }


}

// getauthuser
export const getauthuser = () => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.get('api/user/me', option)
       dispatch({
        type : GET_AUTH_USER ,
         payload : res.data ,
       })
    }
    catch(error)
    {
        console.log(error)
        dispatch({
            type : AUTH_ERROR
        })
    }


}

// logout
export const logout = () => async (dispatch) => {

    try
    {
        dispatch({
            type: LOGOUT

        })

    }
    catch(error)
    {
        console.log(error)
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



// getuser
export const getuser = () => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.get('api/user/api/user', option)
       dispatch({
        type : GET_AUTH_USER ,
         payload : res.data ,
       })
    }
    catch(error)
    {
        console.log(error)
        dispatch({
            type : AUTH_ERROR
        })
    }


}


// deleteuser
export const  Delete = (iduser) => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.delete(`api/user/delete/${iduser}` , option)
       dispatch({
        type : GET_AUTH_USER ,
         payload : res.data ,
       })
    }
    catch(error)
    {
        console.log(error)
        dispatch({
            type : AUTH_ERROR
        })
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
         type : GET_AUTH_USER ,
          payload : res.data ,
        })
     }
     catch(error)
     {
         console.log(error)
         dispatch({
             type : AUTH_ERROR
         })
     }
 
 
 }




