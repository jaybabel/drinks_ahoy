import React, {Component}from 'react';
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
      dataRandom: ""
    }
  }

  componentDidMount = async ()  => {
    await axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => {
        console.log(response.data)
        this.setState({
          dataRandom:response.data,
        })
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    // console.log(this.state.dataRandom.drinks[0].strDrink)
  //   if (!this.state.dataRandom.drinks[0].strDrink) {
  //     return <span>Loading...</span>;
  // }
    return (
      <div className="App">
      <Header />  
      <Random dataRandom={this.state.dataRandom}/>
      <Alphabetical />

      </div>
    );
  }
}

export default App;
