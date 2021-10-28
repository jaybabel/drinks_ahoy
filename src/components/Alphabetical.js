import React, { Component } from 'react';
import axios from 'axios';

class Alphabetical extends Component {
    constructor() {
        super();

        this.state = {
            cocktails: [],
            searchLetter: 'd'
        }
    }

    componentDidMount = () => {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.searchLetter}`, {

            })
            .then((response) => {
                this.setState({ cocktails: response.data.drinks })
            })
    }

    render() {
        return (
            <div className="cocktailList">
                {this.state.cocktails.map((cocktail, index) => {
                    return (
                        <div key={cocktail.id}
                            style={{backgroundImage: `url(${cocktail.strDrinkThumb})` }}>
                            <p>{cocktail.strDrink}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Alphabetical;
