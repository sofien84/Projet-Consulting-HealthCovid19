import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {BrowserRouter , Route , Switch } from 'react-router-dom' ;
import {getauthuser} from  "./js/action/authAction"
import {getuser} from  "./js/action/adminAction"


import {getdocumentsdrs} from  "./js/action/documentsDrsAction"
import {getdoctors} from  "./js/action/patientAction"

import AppNavbar from './components/AppNavbar'
import Home from "./components/pages/Home"
import Dashboarduser from "./components/pages/Dashboarduser"
import DashboardAdmin from "./components/pages/DashboardAdmin"
import DashboardDrs from "./components/pages/DashboardDrs"
import PrivateRoute from "./components/route/PrivateRoute"
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './App.css'

function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getuser())
  const getuser1 =()=> dispatch(getauthuser())


  const getDocumentsdrs = () => dispatch(getdocumentsdrs())
   const getDoctors = () => dispatch(getdoctors())



  useEffect(() => {
    getUser()
    getuser1()
  
    getDocumentsdrs()
    getDoctors ()
  },[]) 

  return (
  <BrowserRouter>
    <AppNavbar/>
      <Switch>
        <div className="App">
           <Route exact path= "/" component ={Home}/>
           <PrivateRoute path="/dashboarduser" component={Dashboarduser} />
           <PrivateRoute path="/dashboardDrs" component={DashboardDrs} />
           <PrivateRoute path="/dashboardAdmin" component={DashboardAdmin} />
        </div>
       </Switch>
       <Footer/>
       </BrowserRouter>
  );
}

export default App;
