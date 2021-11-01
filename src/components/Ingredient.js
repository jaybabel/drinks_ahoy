import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Cocktail from './Cocktail';
import './Header.css';


class Ingredient extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: [],
      searchIngredients: "",
      searchIngredient: "",
      value: "",
      drinkIngredientSearch: [],
    }
  }
  // Call to get the list of available ingredients and then populate a select input type
  componentDidMount = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        , {

        })
      .then((response) => {
        // console.log(response)
        this.setState({ 
          ingredients: response.data.drinks 
        })
      })
  }

  handleIngredientChange = async (event) =>  {
    // alert('You chose: '+ this.state.value)
   await this.setState({
      value: event.target.value
    });
    // alert('You chose: '+ this.state.value)

  }

  submitIngredient = async (event) => {
    event.preventDefault();
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.value}`
    ,{

    })
    .then((response) => {
      // console.log(response)
      this.setState ( {
        drinkIngredientSearch: response.data.drinks })
    })
  }

  render() {
    return (
      <div>
        <h1>Ingredient Search</h1>
        <div className="ingredientList">
          <div>
            <form onSubmit={this.submitIngredient}>
              <select value= {this.state.value} onChange={this.handleIngredientChange}>
                <option selected value="">Select an Ingredient</option>
                {this.state.ingredients.map((ingredient, index) => {
                  return (
                    // console.log(ingredient.strIngredient1),
                    <option key={ingredient.id} 
                    value={ingredient.strIngredient1}> {ingredient.strIngredient1}
                    </option>
                  )}
                )}
              </select>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="ingredientThumbs">
          {this.state.drinkIngredientSearch.map((drinks) => {
                        return (
                            <div>
                                <Link className="drinkLink" to={`/cocktail/${drinks.idDrink}`}>
                                    <div key={drinks.id}
                                        style={{ backgroundImage: `url(${drinks.strDrinkThumb})` }}>
                                        <p>{drinks.strDrink}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
          </div>
        </div>
      </div>
    )
  }

}
export default Ingredient;