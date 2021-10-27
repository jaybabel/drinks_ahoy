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
            <div>{props.dataRandom.drinks[0].strDrink}</div>
            <button onClick={props.componentDidMount}>New Random</button>

        </div>
    )

    }
export default Random;

