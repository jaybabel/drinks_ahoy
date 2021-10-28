import React from 'react';

function LetterChooser (props) {
    console.log("LetterChooser: ", props) 
    return (
        <div>
            { props.searchLetters.map(searchLetter => (
                <button key={searchLetter.id} onClick={(e) => {props.getLetter(e)}}>{searchLetter}</button> 
            ),)           
            }      
            <br></br><br></br>
        </div>
    )

}

export default LetterChooser;

// onClick={() => {props.setView('random dogs');}}>
