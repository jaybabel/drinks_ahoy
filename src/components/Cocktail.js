import React, { Component } from 'react';
import axios from 'axios';
// import { Redirect } from "react-router-dom"

class Cocktail extends Component {
    constructor() {
        super() 

            this.state = {
                drinkId: '11007'
            }
        }

        componentDidMount = () => {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.state.drinkId}`, {

                })
                .then((response) => {
                    this.setState({ cocktails: response.data.drinks })
                })
        }


    // if (!props.dataRandom.length) {
    //     return <Redirect to="/"/>
    //   }

    //www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
   
    render() {

        return (
            <div className="cocktailDetail">
                <h1>Drink Detail</h1>
                {/* <h1>{props.match.strDrink}</h1>
                <h1>{props.location.strDrink}</h1>
                <h1>{props.history.strDrink}</h1>
                <h1>{props.drinkState.strDrink}</h1>
                <img src={props.drinkState.strDrinkThumb} alt="" /> */}
                <div className="cocktailDescription">
                    <h3>blah blah blah</h3>
                </div>
            </div>
        )
    }


}

export default Cocktail