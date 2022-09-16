import React, {useState} from 'react';
import Board from './Board'
import {createBoard} from '../utils/CreateBoard'
import { zeroClick } from '../utils/ZeroClick';
import '../styles/Game.css';
import { updateClickStates } from '../utils/UpdateClickStates';

const Game = (props) => {
    const difficulties = {
        easy: {
            rows: 8,
            columns: 10,
            mines: 10
        },
        medium: {
            rows: 14,
            columns: 18,
            mines: 40
        },
        hard: {
            rows: 20,
            columns: 24,
            mines: 99
        }
    }
    
    const createProxedBoard = (difficulty) => {
        //makes a proxed Board based on the given difficulty
        //hardcoded difficulty parameters since there's only three types
        let diffData = difficulties[difficulty]
        return createBoard(diffData.rows, diffData.columns, diffData.mines);
    }

    const handleCellClick = (clickData) => setClickStates(updateClickStates(clickData, clickStates, proxedBoard))

    const handleDiffChange = (difficulty) => setDifficulty(difficulty)
    const create2dArray = (rows, columns, fill=0) => [...Array(rows).keys()].map(i => Array(columns).fill(fill))
    const [difficulty, setDifficulty ] = useState('medium');
    const [proxedBoard, setProxedBoard ] = useState(createProxedBoard(difficulty));
    const [clickStates, setClickStates] = useState(create2dArray(
                                            difficulties[difficulty].rows,
                                            difficulties[difficulty].columns,
                                            0)
                                        )


    console.log(`game proxed boar: ${proxedBoard}`)
    React.useEffect(() => {
        //resets the board if the properties in the following are changed
        console.log('------------------------')
        console.log(difficulty)
        console.log('----------------------')
        resetBoard()
    }, [difficulty]);

    const resetBoard = () => {
        setProxedBoard(createProxedBoard(difficulty))
        setClickStates(create2dArray(
            difficulties[difficulty].rows,
            difficulties[difficulty].columns,
            0))
        
    }   
    
    return (
        <div className="Game" onContextMenu={(e) => e.preventDefault()}>
            <p>Game</p>
            <Board 
                difficulty={difficulty}
                proxedBoard={proxedBoard}
                clickStates={clickStates}
                handleDiffChange={handleDiffChange}
                handleCellClick={handleCellClick}/>
        </div>
    )
}

export default Game;
