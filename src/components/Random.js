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

           {/* begin function for finding non-null ingredients */}
            <div>
                {(() => {
                    for (let i=1; i<16; i++){
                      if ({props.drinkState.strIngredient[i]} != "null"
                    ? <ul><li>{props.drinkState.strIngredient[i]}</li></ul>
                    : }  
                    }
                }
                    
                )}

            </div>
           {/* end function for finding non-null ingredients */}



            
            <div></div>
            <button onClick={props.newRandomDrink}>New Random Drink</button>

        </div>
    )

    }
export default Random;

