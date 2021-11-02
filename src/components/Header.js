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
                  <img className="header-image" src="./header_img.jpg" alt="header image" />
                  <Link to="/" id="headerLink">Drinks Ahoy!!</Link></h1>
              </div>
              <div className="spacer"></div>
              <li className="nav-item">
                <div className="nav-link justify-content-right">
                  <Link to="/alphabetical"  id="headerLink">Browse The List</Link>
                </div>
              </li>
   
              <li className="nav-item">
                <div className="nav-link justify-content-right ">
                  <Link to="/ingredient"  id="headerLink">Browse by Ingredient</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;