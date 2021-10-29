import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import './Header.css';

const Random = (props) => {

    const drink = props.drinkRandom;

    return (
        // console.log(props.drinkState),

        <div>
            <h1>Random Drink</h1>
            <div>{props.drinkState.strDrink}</div>
            <img src={props.drinkState.strDrinkThumb} alt="" />
            <div>Instructions: {props.drinkState.strInstructions}</div>

            {/* begin function for finding non-null ingredients */}
            <div>
                {(() => {
                    props.drinkState.filter(ingredient => ingredient.includes(!"null")).map(filteredIngredient =>
                        filteredIngredient => (
                            // console.log(filteredIngredient),
                            <li key={filteredIngredient.id}>ingredient {filteredIngredient.id}</li>
                        ))
                }
                )}
                <li>{props.drinkState.strMeasure1} - {props.drinkState.strIngredient1}</li>
                <li>{props.drinkState.strMeasure2} - {props.drinkState.strIngredient2}</li>
                <li>{props.drinkState.strMeasure3} - {props.drinkState.strIngredient3}</li>
                <li>{props.drinkState.strMeasure4} - {props.drinkState.strIngredient4}</li>
                <li>{props.drinkState.strMeasure5} - {props.drinkState.strIngredient5}</li>
                <li>{props.drinkState.strMeasure6} - {props.drinkState.strIngredient6}</li>
                <li>{props.drinkState.strMeasure7} - {props.drinkState.strIngredient7}</li>
                <li>{props.drinkState.strMeasure8} - {props.drinkState.strIngredient8}</li>
                <li>{props.drinkState.strMeasure9} - {props.drinkState.strIngredient9}</li>
                <li>{props.drinkState.strMeasure10} - {props.drinkState.strIngredient10}</li>
                <li>{props.drinkState.strMeasure11} - {props.drinkState.strIngredient11}</li>
                <li>{props.drinkState.strMeasure12} - {props.drinkState.strIngredient12}</li>
                <li>{props.drinkState.strMeasure13} - {props.drinkState.strIngredient13}</li>
                <li>{props.drinkState.strMeasure14} - {props.drinkState.strIngredient14}</li>
                <li>{props.drinkState.strMeasure15} - {props.drinkState.strIngredient15}</li>
            </div>
            {/* end function for finding non-null ingredients */}

            <div></div>
            <button onClick={props.newRandomDrink}>New Random Drink</button>

        </div>
    )

}
export default Random;

