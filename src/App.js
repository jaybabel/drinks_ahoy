<<<<<<< HEAD
import React, { Component } from 'react';
import Header from "./components/Header";
import './App.css';
import Alphabetical from './components/Alphabetical';
=======
import React, {Component}from 'react';
import Header from "./components/Header";
import './App.css';
import axios from 'axios';
import Alphabetical from './components/Alphabetical';
import Random from './components/Random';
>>>>>>> Bob_branch


class App extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: "",
      dataRandom: "",
      drinkState: "",
    }
  }

  componentDidMount = async ()  => {
    await axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => {
        console.log(response.data)
        this.setState({
          dataRandom:response.data,
          drinkState:response.data.drinks[0]
        })
    })
    .catch(err => {
      console.log(err)
    })
  }

  newRandomDrink = (e) => {
    axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => {
        console.log(response.data)
        this.setState({
          dataRandom:response.data,
          drinkState:response.data.drinks[0]
        })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
   
    
    return (
      <div className="App">
      <Header />  
      <Random dataRandom={this.state.dataRandom} 
              drinkState={this.state.drinkState}
              newRandomDrink={this.newRandomDrink}/>
      <Alphabetical />

      </div>
    );
  }
}

export default App;
