import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect } from "react-router-dom"

class Cocktail extends Component {
    constructor() {
        super() 

            this.state = {
                cocktail: ""
            }
        }
 
        componentDidMount = () => {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`, {

                })
                .then((response) => {
                    this.setState({ cocktail: response.data.drinks[0]})
                })
        }


    // if (!props.dataRandom.length) {
    //     return <Redirect to="/"/>
    //   }

    //www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222
   
    render() {
  
        return (
        console.log(this.cocktail),          
            <div className="cocktailDetail">
                <h1>Drink Detail</h1>
                <h1>{this.state.cocktail.strDrink}</h1>
                {/* <img src={props.drinkState.strDrinkThumb} alt="" /> */}
                <img src={this.state.cocktail.strDrinkThumb} alt="" />
                <div className="cocktailDescription">
                    <h3>blah blah blah</h3>
                </div>
            </div>
        )
    }


}

export default Cocktail