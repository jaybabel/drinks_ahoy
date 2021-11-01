import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootswatch/dist/cosmo/bootstrap.min.css'; // Added this :boom:

import "./Header.css"  
class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header-left">
          <h1 className="App-title">Drinks Ahoy!!</h1>
        </div>    
        <div className="header-right">   
        <Link to="/alphabetical" >
          <div className="alphabeticalLink">
            <h4>Browse The List</h4>
          </div>
        </Link>

        <Link to="/ingredient" >
          <div className="ingredientLink">
            <h4>Browse by Ingredient</h4>
          </div>
        </Link>
        </div>
      </header>
    );
  }
}

export default Header;