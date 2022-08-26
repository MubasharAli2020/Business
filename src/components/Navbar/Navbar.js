import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
    <nav class="navbar navbar-expand-lg navbar-light container bg-transparent">
   <Link class="navbar-brand " to="/">MSA</Link>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
     <ul class="navbar-nav">
       <li class="nav-item active">
   <Link  to="/" class="nav-link px-4">Home <span class="sr-only">(current)</span></Link>
       </li>
       <li class="nav-item">
       <Link  to="/services" class="nav-link px-4">Projects</Link>
       </li>
       <li class="nav-item">
         <Link to="/contact" class="nav-link px-4">Contact</Link>
       </li>
     </ul>
   </div>
 
 </nav>
 
     </ div>
  );
}
export default Navbar;
