import React, { useEffect  } from "react";
import { getdoctors } from '../../js/action/patientAction'

import CardDashboarduser from "./CardDashboarduser";
import { useDispatch, useSelector } from "react-redux";
import './Dashboarduser.css';
import EditPatient from "./EditPatient";



    const Dashboarduser  = () => {
        const users= useSelector(state =>state.patientReducer.user);
        
         const user = useSelector(state =>state.authReducer.user);

      
        const dispatch = useDispatch()
     const getDoctors = () => dispatch(getdoctors())
     
      
  useEffect(() => {
    getDoctors()
   
   
  },[]);



        
       
          return (
    <div>
      <div className="userContainer">
      <h2> Welcome Dashboard Patient </h2><br />
      <div className = "cardContainer">
      <h2> MY CARD</h2>
      <h3> name: {user.name}</h3>
      <h3> lastname:{user.lastname}</h3>
      <h3>  email:{user.email}</h3>
      <h3> age:{user.age}</h3>
      <h3>  phone:{user.phone}</h3>
      <br />
      <div>
      <EditPatient user={user} />
      </div>
      </div>

             {users.filter((el)=>el.role === "Doctor" ).map((el) => (
        <CardDashboarduser el={el} /> ))}

         

            
      </div>
     
     

  
   </div>

  )
   
}
export default Dashboarduser
