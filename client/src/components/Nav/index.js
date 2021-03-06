import React from "react";
import { NavLink } from "react-router-dom"


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
     <a className="navbar-brand" href="https://books.google.com/" target="blank">Google Books</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     
      <div className="collapse navbar-collapse" id="navbarNav"> 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to ="/"><b>Search</b></NavLink> 
          </li>
        
              
          <li className="nav-item">
          &nbsp; &nbsp;
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to ="/saved"><b>Saved</b>
            </NavLink>
          </li>
        

        </ul>
        </div> 
        
      </div>
    </nav>
  );
}

export default Nav;
