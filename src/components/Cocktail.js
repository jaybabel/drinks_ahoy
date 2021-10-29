import React from 'react'
// import { Redirect } from "react-router-dom"

function Cocktail(props) {

    // if (!props.dataRandom.length) {
    //     return <Redirect to="/"/>
    //   }
   
    console.log("============== Cocktail detail: ", props)
    return (
        <div className="cocktailDetail">
            <h1>Drink Detail</h1>
            <h1>{props.strDrink}</h1>
        </div>
    )

}

export default Cocktail