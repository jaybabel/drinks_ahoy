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
        const recipe = []

    
        if ((this.state.cocktail.strIngredient1) && (this.state.cocktail.strMeasure1)) 
            { recipe.push([...this.state.cocktail.strIngredient1," - ", ...this.state.cocktail.strMeasure1]) } 
                else if (this.state.cocktail.strIngredient1) { recipe.push([this.state.cocktail.strIngredient1])}

        if ((this.state.cocktail.strIngredient2) && (this.state.cocktail.strMeasure2)) 
            { recipe.push([...this.state.cocktail.strIngredient2," - ", ...this.state.cocktail.strMeasure2]) } 
                else if (this.state.cocktail.strIngredient2) { recipe.push([this.state.cocktail.strIngredient2])}
            
        if ((this.state.cocktail.strIngredient3) && (this.state.cocktail.strMeasure3)) 
            { recipe.push([...this.state.cocktail.strIngredient3," - ", ...this.state.cocktail.strMeasure3]) } 
                else if (this.state.cocktail.strIngredient3) { recipe.push([this.state.cocktail.strIngredient3])}
            
        if ((this.state.cocktail.strIngredient4) && (this.state.cocktail.strMeasure4)) 
            { recipe.push([...this.state.cocktail.strIngredient4," - ", ...this.state.cocktail.strMeasure4]) } 
                else if (this.state.cocktail.strIngredient4) { recipe.push([this.state.cocktail.strIngredient4])}
            
        if ((this.state.cocktail.strIngredient5) && (this.state.cocktail.strMeasure5)) 
            { recipe.push([...this.state.cocktail.strIngredient5," - ", ...this.state.cocktail.strMeasure5]) } 
                else if (this.state.cocktail.strIngredient5) { recipe.push([this.state.cocktail.strIngredient5])}
            
        if ((this.state.cocktail.strIngredient6) && (this.state.cocktail.strMeasure6)) 
            { recipe.push([...this.state.cocktail.strIngredient6," - ", ...this.state.cocktail.strMeasure6]) } 
                else if (this.state.cocktail.strIngredient6) { recipe.push([this.state.cocktail.strIngredient6])}
            
        if ((this.state.cocktail.strIngredient7) && (this.state.cocktail.strMeasure7)) 
            { recipe.push([...this.state.cocktail.strIngredient7," - ", ...this.state.cocktail.strMeasure7]) } 
                else if (this.state.cocktail.strIngredient7) { recipe.push([this.state.cocktail.strIngredient7])}
            
        if ((this.state.cocktail.strIngredient8) && (this.state.cocktail.strMeasure8)) 
            { recipe.push([...this.state.cocktail.strIngredient8," - ", ...this.state.cocktail.strMeasure8]) } 
                else if (this.state.cocktail.strIngredient8) { recipe.push([this.state.cocktail.strIngredient8])}
            
        if ((this.state.cocktail.strIngredient9) && (this.state.cocktail.strMeasure9)) 
            { recipe.push([...this.state.cocktail.strIngredient9," - ", ...this.state.cocktail.strMeasure9]) } 
                else if (this.state.cocktail.strIngredient9) { recipe.push([this.state.cocktail.strIngredient9])}
                
        if ((this.state.cocktail.strIngredient10) && (this.state.cocktail.strMeasure10)) 
            { recipe.push([...this.state.cocktail.strIngredient10," - ", ...this.state.cocktail.strMeasure10]) } 
                else if (this.state.cocktail.strIngredient10) { recipe.push([this.state.cocktail.strIngredient10])}
    
        if ((this.state.cocktail.strIngredient11) && (this.state.cocktail.strMeasure11)) 
            { recipe.push([...this.state.cocktail.strIngredient11," - ", ...this.state.cocktail.strMeasure11]) } 
                else if (this.state.cocktail.strIngredient11) { recipe.push([this.state.cocktail.strIngredient11])}
        
        if ((this.state.cocktail.strIngredient12) && (this.state.cocktail.strMeasure12)) 
            { recipe.push([...this.state.cocktail.strIngredient12," - ", ...this.state.cocktail.strMeasure12]) } 
                else if (this.state.cocktail.strIngredient12) { recipe.push([this.state.cocktail.strIngredient12])}
            
        if ((this.state.cocktail.strIngredient13) && (this.state.cocktail.strMeasure13)) 
            { recipe.push([...this.state.cocktail.strIngredient13," - ", ...this.state.cocktail.strMeasure13]) } 
                else if (this.state.cocktail.strIngredient13) { recipe.push([this.state.cocktail.strIngredient13])}
                
        if ((this.state.cocktail.strIngredient14) && (this.state.cocktail.strMeasure14)) 
            { recipe.push([...this.state.cocktail.strIngredient14," - ", ...this.state.cocktail.strMeasure14]) } 
                else if (this.state.cocktail.strIngredient14) { recipe.push([this.state.cocktail.strIngredient14])}
                    
        if ((this.state.cocktail.strIngredient15) && (this.state.cocktail.strMeasure15)) 
            { recipe.push([...this.state.cocktail.strIngredient15," - ", ...this.state.cocktail.strMeasure15]) } 
                else if (this.state.cocktail.strIngredient15) { recipe.push([this.state.cocktail.strIngredient15])}
                        
                                                                                                                   

console.log(recipe)

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
                    {recipe.map(recipe => (
                        <p>{recipe}</p>
                    ))}
                </div>
            </div>
        )
    }

}

export default Cocktail