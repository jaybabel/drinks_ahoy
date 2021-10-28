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
            <h4>Alphabetical Search</h4>
          </div>
        </Link>
      </header>
    );
  }
}

export default Header;