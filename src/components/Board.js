import React, { useState, useEffect } from 'react';
import Cell from './Cell'
import {createBoard} from '../utils/CreateBoard'
import '../styles/Board.css';
import { render } from '@testing-library/react';

//import '../styles/App.css';

const Board = (props) => {

    let maxRows = props.proxedBoard.length
    let maxCols = props.proxedBoard[0].length

    const create2dArray = (rows, columns) => [...Array(rows).keys()].map(i => Array(columns).fill(0))

    //let proxedBoard = [[-1]];
    const [isClicked, setIsClicked] = useState(create2dArray(maxRows,maxCols))
    let renderBoard;

    const generateBoard = (proxedBoard) => {
        //create JSX to actually render Cells
        //let maxRows = proxedBoard.length
        //let maxCols = proxedBoard[0].length
        console.log('Generating new Board...')

        let renderBoard = []
        for (let r = 0; r < maxRows; r++) {
            let cellsRow = []
            for (let c = 0; c < maxCols; c++) {
                
                cellsRow.push(<Cell 
                                isClicked={isClicked[r][c]}
                                status={proxedBoard[r][c]}
                                position={[r,c]}
                                onClick={handleClick}
                                onRClick={handleRClick}
                                getAdj={null}  
                                key={`(${r},${c})`}
                            />)
            }
            renderBoard.push(<div className='cell-row' key={`row-${r}`}>{cellsRow}</div>)
        }
        return <div className='cell-table'>{renderBoard}</div>
    }

    const handleClick = (e,position) => {
        //console.log(e)
        //Changes isClicked array to handle click
        //deep copy state
        console.log(e)
        let row = position[0]
        let col = position[1]

        let copy = isClicked.map(function(arr) {
            return arr.slice();
        });

        copy[row][col] = ! copy[row][col]
        setIsClicked(copy)
        console.log(position)
    }

    const handleRClick = (e,position) => {
        console.log(position)
    }

    const getSize = (diff) => {
        //gets the size of the board based on the difficulty of the game
        let rows, cols, mines;
        switch (diff) {
            case 'easy':
                rows = 8
                cols = 10
                mines = 10
        }
        return [rows, cols, mines]
    }

    return (
        <div className="heade">
            <p>Board</p>
            {generateBoard(props.proxedBoard)}
        </div>
    )
}

export default Board;
