import React, { useState } from 'react';
import '../styles/Header.css';

//import '../styles/App.css';

const Tile = (props) => {
    const [fieldText, setFieldText] = useState('')
    const fieldName = props.fieldName

    return (
        <div className="header">
            <div className="info">
                <h1>Mixed Ultimate Memory Game</h1>
                <h3>Get points by clicking on a team, but don't click on any more than once!</h3>
            </div>
            <div className="scoreboard">
                <p>Current Score: {props.score} </p>
                <p>High Score: {props.highScore} </p>
            </div>
           
        </div>
    )
}

export default Tile;
