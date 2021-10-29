import { render } from "@testing-library/react";
import React from "react";
import './Header.css';

const Search = (props) => {

    return(
        console.log(props.drinkSearch),

        <div>
            <h1>Search Results</h1>
            <div className="cocktailList">
                {props.drinkSearch.map((drinks) => {
                    return (
                        <div key={drinks.id}
                            style={{ backgroundImage: `url(${drinks.strDrinkThumb})` }}>
                            <p>{drinks.strDrink}</p>
                        </div>
                    )
                })}

                </div>
                        BOB
        </div>

    )
}

export default Search;