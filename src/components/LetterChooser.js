import React from 'react';

function LetterChooser (props) {
    return (
        <div>
            { props.searchLetters.map(searchLetter => (
                <button className="charBtn" key={searchLetter.id} onClick={(e) => {props.getLetter(e)}}>{searchLetter}</button> 
            ),)           
            }      
            <br></br><br></br>
        </div>
    )

}

export default LetterChooser;

