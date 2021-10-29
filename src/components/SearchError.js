import React from 'react'
import { Link } from "react-router-dom";

// import { Redirect } from "react-router-dom"

const SearchError = (props) => {
    return (
        <div className="searchError">
            <h1>There are no drinks that contain the term </h1>
            {/* <h1>{props.strDrink}</h1> */}
        </div>
    )

}

export default SearchError;