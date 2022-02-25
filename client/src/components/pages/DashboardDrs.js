import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmessage } from "../../js/action/messageAction";
import { getdocumentsdrs , postdocumentsdrs } from "../../js/action/documentsDrsAction";
import CardDashboardDrs from "./CardDashboardDrs";
import Healthmessage from "./Healthmessage";
import { getdoctors } from '../../js/action/patientAction'
import './DashboardDrs.css';
import EditDoctors from "./EditDoctors";
import AddDocumentsDrs from "./AddDocumentsDrs";

 

const DashboardDrs = () => {
    const msg = useSelector(state =>state.messageReducer.msg.message);
    const drs = useSelector(state =>state.documentsDrsReducer.drs.documentsDrs);
    const user = useSelector(state =>state.authReducer.user);
    // console.log("user", user)
    // console.log("drs")

    const [message , setMessage]= useState([msg])
    const [document , setdocument]= useState(drs)
    
    const dispatch = useDispatch()
    // const getMessage = () => dispatch(getmessage())
    const postdocumentsdrs  = () => dispatch(postdocumentsdrs ());
    // console.log("drs" , drs)
    const getDocumentsdrs  = () => dispatch(getdocumentsdrs ());
    const getDoctors = () => dispatch(getdoctors())
    
    // console.log("msg" , msg)

  useEffect(() => {
   getDocumentsdrs()
 },[]);


    return (

      <div className="DoctorsContainer">
      <h2> Welcome Dashboard Doctors </h2><br />
      <div className = "DcardContainer">
      <h2> MY CARD</h2>
      <h3> name: {user.name}</h3>
      <h3> lastname:{user.lastname}</h3>
      <h3>  email:{user.email}</h3>
      <h3> age:{user.age}</h3>
      <h3>  phone:{user.phone}</h3>
      <br />
      <div>
      <EditDoctors user={user}/>
      </div>
      </div>
      <Healthmessage message={msg}/>
      <br />
      <br />
      <AddDocumentsDrs  documentsDrs={drs}/>
      

       {/*   // {document.map((el) => (
        //   <CardDashboardDrs el={el} />
        //   ))} */}


           {document.map((el) => (
         <CardDashboardDrs el={el} />
          ))} 

         
       {/*  {message.map((el) => (
            <CardDashboardDrs el={el} />

          ))} */}
        
        
        </div>

 )
}

export default DashboardDrs