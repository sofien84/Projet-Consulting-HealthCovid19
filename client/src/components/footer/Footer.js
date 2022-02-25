import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
  // <div className="footerContainer">
  //   <div className='firstCol' >
  //       <span>Connect on Social Media:</span>
  //     <div className='iconDiv'>
  //           <div className="sidebarSocial">
  //         <i className="sidebarIcon fab fa-facebook-square"></i>
  //         <i className="sidebarIcon fab fa-twitter-square"></i>
  //         <i className="sidebarIcon fab fa-pinterest-square"></i>
  //         <i className="sidebarIcon fab fa-instagram-square"></i>
  //       </div>
  //      </div>
  //   </div>
  //   <div className="copyright">
  //     <Link className="text-reset fw-bold" to="/"> HealthCOVID-19 App </Link>
  //   </div>
  // </div>
 
  <footer className="text-center text-lg-start  text-muted" style={{backgroundColor:"#022247",borderTop:"3px solid white"}}>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
    <div className="me-5 d-none d-lg-block" style={{color:'white', fontWeight:"bold", backgroundColor:"#022247"}}>
      <span>Get connected with us on social networks</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-youtube"></i>
      </a>
    
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor:"Tomato" ,color:"SlateBlue" }}>
     © 2022 Copyright :
    <a className="text-reset fw-bold" href="#">  <Link className="text-reset fw-bold" to="/"> HealthCOVID-19 App </Link></a>
  </div>
</footer>
  )}

  

 

  

export default Footer