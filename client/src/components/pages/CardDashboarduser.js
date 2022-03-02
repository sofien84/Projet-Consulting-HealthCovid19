import React from 'react'

import { useDispatch} from 'react-redux'
import { edituser } from "../../js/action/patientAction";




import './CardDashboarduser.css'


const CardDashboarduser  = ({ el }) => {
        const dispatch = useDispatch() ;
         
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
       
      
       
          
      
        </div>
       
        </div>
    )
}

export default CardDashboarduser 
