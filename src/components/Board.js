import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import BoardHeader from './BoardHeader';
import {createBoard} from '../utils/CreateBoard';
import {zeroClick} from '../utils/ZeroClick';
import '../styles/Board.css';
import { render } from '@testing-library/react';

//import '../styles/App.css';

const Board = (props) => {

    let maxRows = props.proxedBoard.length
    let maxCols = props.proxedBoard[0].length

    const create2dArray = (rows, columns, fill=0) => [...Array(rows).keys()].map(i => Array(columns).fill(fill))
    
    //let proxedBoard = [[-1]];
    const [clickStates, setClickStates] = useState(create2dArray(maxRows, maxCols, 0))
    let renderBoard;

    const generateBoard = (proxedBoard) => {
        //generates a visible 
        console.log('Generating new Board...')

        let renderBoard = []
        for (let r = 0; r < maxRows; r++) {
            let cellsRow = []
            for (let c = 0; c < maxCols; c++) {
                
                cellsRow.push(<Cell 
                                clickState={clickStates[r][c]}
                                status={proxedBoard[r][c]}
                                position={[r,c]}
                                onClick={handleCellClick}
                                getAdj={null}  
                                key={`(${r},${c})`}
                            />)
            }
            renderBoard.push(<div className='cell-row' key={`row-${r}`}>{cellsRow}</div>)
        }
        return <div className='cell-table'>{renderBoard}</div>
    }

    const handleZeroClick = (clickData) => {
        //returns an updated clickState array based on the zero propagation
        //alert('zero')
        clickData.board = props.proxedBoard
        return zeroClick(clickData)
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
            if (props.proxedBoard[r][c] == 0){
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

    return (
        <div className="board">
            <BoardHeader />
            {generateBoard(props.proxedBoard)}
        </div>
    )
}

export default Board;
