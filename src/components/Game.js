import React, { useState } from 'react';
import Board from './Board'
import {createBoard} from '../utils/CreateBoard'
import '../styles/Game.css';

const Game = (props) => {
    //const [fieldText, setFieldText] = useState('')
    //const fieldName = props.fieldName
    const difficulties = {
        easy: {
            rows: 6
        },

    }

    const resetBoard = (clickData) => {
        //returns an updated clickState array based on the zero propagation
        return
    
    }

    const difficulty = 'easy'
    const proxedBoard = createBoard(8,10,10)
    
    return (
        <div className="Game" onContextMenu={(e) => e.preventDefault()}>
            <p>Game</p>
            <Board difficulty={difficulty} proxedBoard={proxedBoard}/>
        </div>
    )
}

export default Game;
