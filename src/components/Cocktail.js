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
                    this.setState({ cocktail: response.data.drinks[0] })
                })
        }
            
    // if (!props.dataRandom.length) {
    //     return <Redirect to="/"/>
    //   }
   
    render() {
        // const measure = this.state.cocktail.strMeasur1.map(d) => <li key={d.}
        
        return (         
            <div className="cocktailDetail">
                <h1>Drink Detail</h1>
                <h1>{this.state.cocktail.strDrink}</h1>
                <img src={this.state.cocktail.strDrinkThumb} alt="" />
                <div className="cocktailDescription">
                    <h3>Instructions:</h3>
                    <h4>{this.state.cocktail.strInstructions}</h4>
                    <h4>You'll want to drink this from a {this.state.cocktail.strGlass}. Otherwise it will taste funny.</h4>
                </div>
                <div className="cocktailRecipe">
                    <h3>Ingredients:</h3>
                    <h4>{this.state.cocktail.strMeasure1} - {this.state.cocktail.strIngredient1}</h4>
                    {/* {measure.map(measure => (
                        <li>
                            {measure}
                        </li>
                    )
                    )} */}
                </div>
            </div>
        )
    }

}

export default Cocktail