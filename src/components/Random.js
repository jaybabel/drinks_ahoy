import { render } from "@testing-library/react";
import React, {useEffect} from "react";
import './Header.css';

const Random = (props) => {
    // useEffect(() => {
    //     // props.getRandomDrink()

    // }) 


        
    return(
        console.log(props.dataRandom),

        <div>
            <h1>Random Drink</h1>
            <div>{props.drinkState.strDrink}</div>
            <img src={props.drinkState.strDrinkThumb} alt=""/>
            <div>Instructions: {props.drinkState.strInstructions}</div>
            
            <div></div>
            <button onClick={props.newRandomDrink}>New Random Drink</button>

        </div>
    )

    }
export default Random;

