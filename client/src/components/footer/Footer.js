import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
 
 
  <footer className="text-center text-lg-start  text-muted" style={{backgroundColor:"#022247",borderTop:"3px solid white"}}>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
    <div className="me-5 d-none d-lg-block" style={{color:'white', fontWeight:"bold", backgroundColor:"#022247"}}>
      <span>Get connected with us on social networks</span>
    </div>
 
  </section>
  <div className="text-center p-4" style={{backgroundColor:"Tomato" ,color:"SlateBlue" }}>
     © 2022 Copyright :
 <Link className="text-reset fw-bold" to="/"> HealthCOVID-19 App </Link>
  </div>
</footer>
  )}

  

 

  

export default Footer