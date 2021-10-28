import React, { Component } from 'react';
import axios from 'axios';
import LetterChooser from './LetterChooser'

class Alphabetical extends Component {
    constructor() {
        super();

        this.state = {
            cocktails: [],
            searchLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ],
            searchLetter: 'M'
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
            <div>
                <LetterChooser />
                <div className="cocktailList">

                    {this.state.cocktails.map((cocktail, index) => {
                        return (
                            <div key={cocktail.id}
                                style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}>
                                <p>{cocktail.strDrink}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Alphabetical;
