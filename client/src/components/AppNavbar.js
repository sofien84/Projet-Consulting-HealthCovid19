import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import Register from "./auth/Register";
import Login from "./auth/Login";
import { Link } from "react-router-dom";
import { logout} from "../js/action/authAction";
import { getuser } from "../js/action/adminAction";




  const AppNavbar = () => {
  const dispatch = useDispatch();
   const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
    // console.log("state.user", user)
   
  // console.log("user" , user)
  return (
    <Navbar className="d-flex justify-content-between" color="dark" dark>
      <NavbarBrand
        tag={() => (
          <Link
            style={{ textDecoration: "none", color: "Tomato", fontSize: "25px" }}
            to="/"
          >
            Consulting Health_COVI19 App
          </Link>
        )}
      />
      <Nav className="text-white">
       {isAuth && user.role === "Patient"  ? (
          <Fragment>
            <NavItem className="p-2">
              <Button onClick={() => dispatch(logout())} color="light">
                Logout
              </Button>
            </NavItem>
            <NavItem className="p-2">
              <Button color="light">
                <Link to="/Dashboarduser">dashboard Patient</Link>
              </Button>
              </NavItem>
          </Fragment>
        ) 
      : isAuth && user.role === "Doctor"  ? (
          <Fragment>
            <NavItem className="p-2">
              <Button onClick={() => dispatch(logout())} color="light">
                Logout
              </Button>
            </NavItem>
            <NavItem className="p-2">
              <Button color="light">
                <Link to="/dashboardDrs" >Dashboard Doctors</Link>
              </Button>
            </NavItem>
          </Fragment>
          )
       
      : isAuth && user.role === "Admin"  ? ( 
        <Fragment>
          <NavItem className="p-2">
            <Button onClick={() => dispatch(logout())} color="light">
              Logout
            </Button>
          </NavItem>
          <NavItem className="p-2">
            <Button color="light">
              <Link to="/dashboardAdmin">Dashboard Admin</Link>
            </Button>
          </NavItem>
        </Fragment>
        )
     : (
          <Fragment>
            <NavItem className="p-2">
              <Login />
            </NavItem>
            <NavItem className="p-2">
              <Register />
            </NavItem>
          </Fragment>
        )}
      </Nav>
  </Navbar>
  )
}

export default AppNavbar
