import React from 'react'
import { getmessage, postmessage } from "../../js/action/messageAction";
import { useDispatch} from 'react-redux'
import { edituser } from "../../js/action/patientAction";


import Healthmessage from "./Healthmessage"

import './CardDashboarduser.css'


const CardDashboarduser  = ({ el }) => {
        const dispatch = useDispatch() ;
         const get_message =()=>{
         dispatch(getmessage(el._id))};
         const post_message =()=>{
            dispatch(postmessage(el._id))};
        const edit_user =()=>{
              dispatch(edituser(el._id, {}))};
            

    return (
        <div className="PatientcardContainer">
        <div style={{ width:"350px" , flexDirection:"column"}}>
        <h2> Doctor Card</h2>
        <p> name: {el.name}</p>
        <p> lastname:{el.lastname}</p>
        <p> email:{el.email}</p>
        <p> age:{el.age}</p>
        <p> phone:{el.phone}</p>
        <p> role: {el.role}</p>
       
        {/* <button onClick={get_message}> Check Message</button>*/}
         {/* <button onClick={post_message}> Send Message</button></div>*/}
         {/* <button onClick={edit_user}> edit </button> */}
         
       
           <Healthmessage />
      
        </div>
       
        </div>
    )
}

export default CardDashboarduser 
