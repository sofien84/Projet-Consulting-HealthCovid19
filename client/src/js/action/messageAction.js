import axios from "axios" ; 

import {GET_MESSAGE ,  MESSAGE_ERROR, SETLOADING} from '../action/messageActionTypes'



//  postmessage
export const postmessage = (data) => async(dispatch) =>{
    dispatch(setloading())
    console.log("addmessage",data)

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.post('api/message/addmessage', data, option)
       console.log(res.data)
       dispatch(getmessage())

    }
    catch(error)
    {
        console.log(error)
        dispatch({
            type : MESSAGE_ERROR

        })
    }
}

// getmessage
export const getmessage = () => async(dispatch) =>{
    dispatch(setloading())

    try {
        const option = {
            headers :{
               authorization : localStorage.getItem("token") 
            }
           
        }
       const res = await axios.get('api/message/getmessage', option)
       dispatch({
        type : GET_MESSAGE ,
         payload : res.data ,
       })
    }
    catch(error)
    {
        // console.log(error)
        dispatch({
            type : MESSAGE_ERROR

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
