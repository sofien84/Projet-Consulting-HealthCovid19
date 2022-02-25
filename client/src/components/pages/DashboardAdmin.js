
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../js/action/adminAction";
import CardDashboardAdmin from "./CardDashboardAdmin";
import './DashboardAdmin.css';

 



const DashboardAdmin  = () => {

  const state = useSelector(state =>state.adminReducer.user);
  console.log("st tz" , state)

     const dispatch = useDispatch()
     const getUser = () => dispatch(getuser())
  useEffect(() => {
    getUser()
   
  },[]);


   return (
    <div className="AdminContainer">
    <h2>Welcome Dashboard Admin </h2>
    <br />
    
    {state.map((el) => (
      <CardDashboardAdmin el={el} />
    ))}
    
    </div>
)
}
   
    
  

export default DashboardAdmin