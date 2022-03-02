import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getdocumentsdrs } from "../../js/action/documentsDrsAction";
import CardDashboardDrs from "./CardDashboardDrs";


import './DashboardDrs.css';
import EditDoctors from "./EditDoctors";
import AddDocumentsDrs from "./AddDocumentsDrs";

 

const DashboardDrs = () => {

    const drs = useSelector(state =>state.documentsDrsReducer.drs.documentsDrs);
    const user = useSelector(state =>state.authReducer.user);


    
    const [document , setdocument]= useState(drs)
    
    const dispatch = useDispatch()
    
    
    
    const getDocumentsdrs  = () => dispatch(getdocumentsdrs ());
    
  

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
      
      <br />
      <br />
      <AddDocumentsDrs  documentsDrs={drs}/>
      

       


           {document.map((el) => (
         <CardDashboardDrs el={el} />
          ))} 

         
       
        
        
        </div>

 )
}

export default DashboardDrs