
import React from 'react'
import {  Delete } from "../../js/action/documentsDrsAction";

import { useDispatch, useSelector} from 'react-redux';
import EditDocumentsDrs from "./EditDocumentsDrs";





import './CardDashboardDrs.css'


const CardDashboardDrs = ({el}) => {
  const drs = useSelector(state =>state.documentsDrsReducer.drs.documentsDrs);


  

    const dispatch = useDispatch()
   
     const deletedocuments =()=>{
          dispatch(Delete(el._id))}

          
         
return (
    <div>
    <div className="DocumentcardContainer">
    <h2> ARTICLE HEALTH </h2>
    <p> name: {el.name}</p>
    <p> lastname:{el.lastname}</p>
    <p> role:{el.role}</p>
     <p> titledocument: {el.titledocument}</p>
     <p> keywords:{el.keywords}</p>
     <p> document:{el.document}</p>
    
     <EditDocumentsDrs documentsDrs={el} />
     <br />
      <button    onClick={deletedocuments} 

           className="DRSButton" style={{ display: "inline",  color: "white",
            borderRadius: "20px",
            backgroundColor: "Purple",
            padding: "6px 14px"}} 
          > 
            {" "} 
            Delete {" "} </button> 
            
            </div>

      
    
    
 







     
       {/*<button onClick={edit_user}> edit </button>*/}
    
    </div>
    )
}

export default CardDashboardDrs
