import { render } from "@testing-library/react";
import React, {Component} from "react";
import './Header.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state ={
            drinkSearch: props.drinkSearch
        }
        this.setState({
            drinkSearch: props.drinkSearch,
          })
    }

render () {
    return(
        // console.log(this.state.drinkSearch),

        <div>
            <h1>Search Results</h1>
            <div className="cocktailList">
                 {this.state.drinkSearch.map((drinks) => {
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
}
export default Search;