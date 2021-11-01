import { render } from "@testing-library/react";
import React, { useEffect } from "react";
// import './Header.css';

const Random = (props) => {

    const drink = props.drinkRandom;
    const recipe = [];


    if ((props.drinkState.strIngredient1) && (props.drinkState.strMeasure1)) { recipe.push([...props.drinkState.strIngredient1, " - ", ...props.drinkState.strMeasure1]) }
    else if (props.drinkState.strIngredient1) { recipe.push([props.drinkState.strIngredient1]) }

    if ((props.drinkState.strIngredient2) && (props.drinkState.strMeasure2)) { recipe.push([...props.drinkState.strIngredient2, " - ", ...props.drinkState.strMeasure2]) }
    else if (props.drinkState.strIngredient2) { recipe.push([props.drinkState.strIngredient2]) }

    if ((props.drinkState.strIngredient3) && (props.drinkState.strMeasure3)) { recipe.push([...props.drinkState.strIngredient3, " - ", ...props.drinkState.strMeasure3]) }
    else if (props.drinkState.strIngredient3) { recipe.push([props.drinkState.strIngredient3]) }

    if ((props.drinkState.strIngredient4) && (props.drinkState.strMeasure4)) { recipe.push([...props.drinkState.strIngredient4, " - ", ...props.drinkState.strMeasure4]) }
    else if (props.drinkState.strIngredient4) { recipe.push([props.drinkState.strIngredient4]) }

    if ((props.drinkState.strIngredient5) && (props.drinkState.strMeasure5)) { recipe.push([...props.drinkState.strIngredient5, " - ", ...props.drinkState.strMeasure5]) }
    else if (props.drinkState.strIngredient5) { recipe.push([props.drinkState.strIngredient5]) }

    if ((props.drinkState.strIngredient6) && (props.drinkState.strMeasure6)) { recipe.push([...props.drinkState.strIngredient6, " - ", ...props.drinkState.strMeasure6]) }
    else if (props.drinkState.strIngredient6) { recipe.push([props.drinkState.strIngredient6]) }

    if ((props.drinkState.strIngredient7) && (props.drinkState.strMeasure7)) { recipe.push([...props.drinkState.strIngredient7, " - ", ...props.drinkState.strMeasure7]) }
    else if (props.drinkState.strIngredient7) { recipe.push([props.drinkState.strIngredient7]) }

    if ((props.drinkState.strIngredient8) && (props.drinkState.strMeasure8)) { recipe.push([...props.drinkState.strIngredient8, " - ", ...props.drinkState.strMeasure8]) }
    else if (props.drinkState.strIngredient8) { recipe.push([props.drinkState.strIngredient8]) }

    if ((props.drinkState.strIngredient9) && (props.drinkState.strMeasure9)) { recipe.push([...props.drinkState.strIngredient9, " - ", ...props.drinkState.strMeasure9]) }
    else if (props.drinkState.strIngredient9) { recipe.push([props.drinkState.strIngredient9]) }

    if ((props.drinkState.strIngredient10) && (props.drinkState.strMeasure10)) { recipe.push([...props.drinkState.strIngredient10, " - ", ...props.drinkState.strMeasure10]) }
    else if (props.drinkState.strIngredient10) { recipe.push([props.drinkState.strIngredient10]) }

    if ((props.drinkState.strIngredient11) && (props.drinkState.strMeasure11)) { recipe.push([...props.drinkState.strIngredient11, " - ", ...props.drinkState.strMeasure11]) }
    else if (props.drinkState.strIngredient11) { recipe.push([props.drinkState.strIngredient11]) }

    if ((props.drinkState.strIngredient12) && (props.drinkState.strMeasure12)) { recipe.push([...props.drinkState.strIngredient12, " - ", ...props.drinkState.strMeasure12]) }
    else if (props.drinkState.strIngredient12) { recipe.push([props.drinkState.strIngredient12]) }

    if ((props.drinkState.strIngredient13) && (props.drinkState.strMeasure13)) { recipe.push([...props.drinkState.strIngredient13, " - ", ...props.drinkState.strMeasure13]) }
    else if (props.drinkState.strIngredient13) { recipe.push([props.drinkState.strIngredient13]) }

    if ((props.drinkState.strIngredient14) && (props.drinkState.strMeasure14)) { recipe.push([...props.drinkState.strIngredient14, " - ", ...props.drinkState.strMeasure14]) }
    else if (props.drinkState.strIngredient14) { recipe.push([props.drinkState.strIngredient14]) }

    if ((props.drinkState.strIngredient15) && (props.drinkState.strMeasure15)) { recipe.push([...props.drinkState.strIngredient15, " - ", ...props.drinkState.strMeasure15]) }
    else if (props.drinkState.strIngredient15) { recipe.push([props.drinkState.strIngredient15]) }



    return (
        // console.log(props.drinkState),
        
        <div className="cocktailDetail">
          
            {/* end function for finding non-null ingredients */}
            <div className="card mb-3">
                <h3 className="card-header">Drink o' the Day</h3>
                <div className="card-body">
                    <h5 className="card-title">{props.drinkState.strDrink}</h5>
                </div>
                    <img src={props.drinkState.strDrinkThumb} alt="" max-width="600px" height="auto" />
                    <rect width="400px" height="auto" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">{props.drinkState.strDrink}</text>
                <div className="card-body">
                    <h4>Instructions:</h4>
                    <p className="card-text" >{props.drinkState.strInstructions}</p>
                </div>
                <div className="card-body">
                    <h4>Glass Type:</h4>
                    <p className="card-text">{props.drinkState.strGlass}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <h4>Ingredients:</h4>
                    {recipe.map(recipe => (
                    <li>{recipe}</li>
                    ))}
                    
                </ul>
                
                <div className="card-footer text-muted">
                <button onClick={props.newRandomDrink}>Pull a different drink from the sea?</button>
                </div>
            </div>
           

            
            {/* end function for finding non-null ingredients */}


        </div>
    )

}
export default Random;

