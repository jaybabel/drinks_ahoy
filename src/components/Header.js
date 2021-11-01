import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootswatch/dist/darkly/bootstrap.min.css'; // Added this :boom:

import "./Header.css"  
class Header extends Component {

  render() {
    return (
      <div>
      <nav className="header">
        <div className="container-fluid">

        <ul className="navbar-nav list-group-horizontal">

        <div className="header-left">
        <h1 className="navbar-brand">
        <Link to="/" >Drinks Ahoy!!</Link></h1>
        </div>
       
        {/* <button className="navbar-toggler" type ="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01"> */}
        {/* <ul className="navbar-nav list-group-horizontal"> */}

        <li className="nav-item">
        <div className="nav-link justify-content-right">
        <Link to="/alphabetical" >Browse The List</Link>
        </div>
        </li>
        <li> </li>

        <li className="nav-item">
        <div className="nav-link justify-content-right"> 
        <Link to="/ingredient" >Browse by Ingredient</Link>
        </div>
        </li>
        </ul>


        {/* <div className="header-right">
        <Link to="/alphabetical" >
        <div className="alphabeticalLink">
        <h4>Browse The List</h4>
        </div>
        </Link> */}


        {/* <Link to="/ingredient" >
        <div className="ingredientLink">
        <h4>Browse by Ingredient</h4>
        </div>
        </Link> */}
          {/* </div> */}
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;