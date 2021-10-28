import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Header from "./components/Header";
import './App.css';
import axios from 'axios';
import Alphabetical from './components/Alphabetical';
import Random from './components/Random';


class App extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: "",
      dataRandom: "",
      drinkState: "",
      searchInput: "",

    }
  }

  componentDidMount = async () => {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        console.log(response.data)
        this.setState({
          dataRandom: response.data,
          drinkState: response.data.drinks[0]
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
          dataRandom: response.data,
          drinkState: response.data.drinks[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
  };
  handleSubmit = (e) =>{
    e.preventDefault();
    this.getSearch(this.state.searchInput);
  }

  render() {


    return (
      <div className="App">
        <nav>
          <Link to="/"> <Header /> </Link>
        </nav>
        <main>
          <form onSubmit={this.handleSubmit} >
            <div className="searchbox">
              Search
            </div>
            <input type="text" onChange={this.handleChange}/>
            <button>Search</button>
          </form>


          <Route exact path="/" 
              render = {routerProps => (
            <Random 
            {...routerProps}             
            dataRandom={this.state.dataRandom}
              drinkState={this.state.drinkState}
              newRandomDrink={this.newRandomDrink} 
            /> )} />
            <Route path="/alphabetical"
              render = {routerProps => (
              <Alphabetical 
              {...routerProps}   
            />  )} />              


        </main>
      </div>
    );
  }
}

export default App;
