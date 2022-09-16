import React, {useState} from 'react';
import Board from './Board'
import {createBoard} from '../utils/CreateBoard'
import { zeroClick } from '../utils/ZeroClick';
import '../styles/Game.css';

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

    const handleCellClick = (clickData) => {
        //handles anytype of click and adjust state accordingly
        //set shorthand for variables
        let r = clickData.position[0], c = clickData.position[1];
        let clickType = clickData.type;
        let clickState = clickStates[r][c]

        //create deep copy of state array
        let copy = clickStates.map(function(arr) {
            return arr.slice();
        });
        
        //make adjustments to state based on variables
        if (clickType == 'left' && clickState == 0) {
            copy[r][c] = -1
            if (proxedBoard[r][c] == 0){
                //checks to see if a zero status was clicked
                copy[r][c] = 0
                clickData.clickStateCopy = copy
                copy = handleZeroClick(clickData)
            }
        } else if (clickType == 'right' && clickState != -1) {
            copy[r][c] = ! copy[r][c]      
        }

        setClickStates(copy)

    }

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

    const handleZeroClick = (clickData) => {
        //returns an updated clickState array based on the zero propagation
        clickData.board = proxedBoard
        return zeroClick(clickData)
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
