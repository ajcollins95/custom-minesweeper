import React, { useState } from 'react';
import Board from './Board'
import '../styles/Game.css';

const Game = (props) => {
    //const [fieldText, setFieldText] = useState('')
    //const fieldName = props.fieldName

    return (
        <div className="Game">
            <p>Game</p>
            <Board />
        </div>
    )
}

export default Game;
