import React, {Component}from 'react';
import Header from "./components/Header";
import './App.css';
import Alphabetical from './components/Alphabetical';


class App extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: ""
    }
  }

  render() {


    return (
      <div className="App">
      <Header />  
      Drinks Ahoy!!
      <Alphabetical />
        <Header />

      </div>
    );
  }
}

export default App;
