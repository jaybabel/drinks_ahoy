import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Cocktail from './Cocktail';

class Ingredient extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: [],
      searchIngredients: "",
      searchIngredient: "",
    }
  }
  // Call to get the list of available ingredients and then populate a select input type
  componentDidMount = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        , {

        })
      .then((response) => {
        console.log(response)
        this.setState({ ingredients: response.data.drinks })
      })
  }

  render() {
    return (
      <div>
        <h1>Ingredient Search</h1>
        <div className="ingredientList">
          <div>
            <form>
              <select name="ingredients_list" id="ingredients_list">
                {this.state.ingredients.map((ingredient, index) => {
                  return (
                    console.log(ingredient.strIngredient1),

                    <option key={ingredient.id} value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>

                  )
                }
                )}
              </select>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Ingredient;