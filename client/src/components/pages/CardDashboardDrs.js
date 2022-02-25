
import React from 'react'
import { editdocumentsdrs , Delete } from "../../js/action/documentsDrsAction";
import { postmessage , getmessage } from "../../js/action/messageAction";
import { useDispatch, useSelector} from 'react-redux';
import EditDocumentsDrs from "./EditDocumentsDrs";
// import { edituser } from "../../js/action/patientAction";
import { edituser } from "../../js/action/authAction";
import { getdocumentsdrs } from "../../js/action/documentsDrsAction";


import './CardDashboardDrs.css'


const CardDashboardDrs = ({el}) => {
  const drs = useSelector(state =>state.documentsDrsReducer.drs.documentsDrs);
  const msg = useSelector(state =>state.messageReducer.msg.message);
  console.log("drs" , drs)
  console.log("msg" , msg)
  console.log("el" , el)
  

    const dispatch = useDispatch()
    const getDocumentsdrs  = () => dispatch(getdocumentsdrs ());
    const Editdocuments =()=>{
     dispatch(editdocumentsdrs (el._id, {}))}

    //  const deletedocuments =()=>{
    //     dispatch(Delete(el._id))}

     const postMessage =()=>{
     dispatch(postmessage(el._id))}
     const getMessage =()=>{
      dispatch(getmessage(el._id))}
 

     const edit_user =()=>{
        dispatch(edituser(el._id, {}))};
     const deletedocuments =()=>{
          dispatch(Delete(el._id))}

          const message = msg.filter(msg=>msg.name == (el && el.name))
          console.log("message" ,message)
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

          {/* <button onClick={Editdocuments}> edit </button>*/}
    
    
 







     
       {/*<button onClick={edit_user}> edit </button>*/}
    
    </div>
    )
}

export default CardDashboardDrs
