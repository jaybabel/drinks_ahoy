import React, { Component } from 'react';
import axios from 'axios';
import LetterChooser from './LetterChooser'
import { Link } from 'react-router-dom';


class Alphabetical extends Component {
    constructor() {
        super();

        this.state = {
            cocktails: [],
            searchLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "9"],
            searchLetter: 'A'
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

    updateView() {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.searchLetter}`, {

            })
            .then((response) => {
                this.setState({ cocktails: response.data.drinks })
            })
    }

    getLetter = async (e) => {
        e.preventDefault();
        await this.setState({
            searchLetter: e.target.textContent
        });
        this.updateView()
    }

    render() {
        return (
            <div>
                <LetterChooser
                    searchLetters={this.state.searchLetters}
                    searchLetter={this.state.searchLetter}
                    getLetter={this.getLetter}
                    updateView={this.updateView} />
                <div className="cocktailList">
                    {this.state.cocktails.map((cocktail, index) => {
                        return (
                            <div>
                                <Link className="drinkLink" to={`/cocktail/${cocktail.idDrink}`}>
                                    <div className="thumbnailDiv" key={cocktail.id}
                                        style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}>
                                        <p>{cocktail.strDrink}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Alphabetical;
