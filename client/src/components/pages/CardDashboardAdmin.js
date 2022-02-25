import React from 'react'
import { Delete } from "../../js/action/adminAction";
import { useDispatch} from 'react-redux'
import './CardDashboardAdmin.css'


const CardDashboardAdmin = ({ el }) => {
        const dispatch = useDispatch() ;
         const deleteuser =()=>{
         dispatch(Delete(el._id))}
    return (
       
        <div className="AdmincardContainer">

        <div className="infoContainer">
        <div className="AdminInfo">
        <p> name: {el.name}</p>
        <p> lastname:{el.lastname}</p>
        <p> email:{el.email}</p>
        <p> age:{el.age}</p>
        <p> phone:{el.phone}</p>
        <p> role: {el.role}</p>
        </div>
        </div>

    <div className="AdminButton" style={{ display: "flex"}}>
        <button onClick={deleteuser}
        
        style={{
            color: "white",
            borderRadius: "20px",
            backgroundColor: "Purple",
            padding: "6px 14px",
          }}
        >
          {" "}
          delete{" "} </button></div>
        </div>
        
    )
}

export default CardDashboardAdmin











