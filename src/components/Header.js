import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Header.css"  
class Header extends Component {

  render() {
    return (
      <header className="header">
        <h1 className="App-title">Drinks Ahoy!!</h1>
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
      </header>
    );
  }
}

export default Header;