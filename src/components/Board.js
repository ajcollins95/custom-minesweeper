import React, { useState, useEffect } from 'react';
import '../styles/Board.css';
import Cell from './Cell'

//import '../styles/App.css';

const Board = (props) => {
    const cols = 18;
    const rows = 14;
    const mines = 40;
    
    const seedMines = (r, c, m) => {
        const placedMines = []
        while (placedMines.length < m) {
            let randRow = Math.floor(Math.random() * r)
            let randCol = Math.floor(Math.random() * c)
            let coord = [randRow,randCol]
            if (! placedMines.includes(coord)) {
                placedMines.push(coord)
            }
        }
        
        console.log(placedMines)
        //console.log(`Length = ${placedMines.length}`)
        console.log('hi')
        return placedMines
    }

    const generateRow = (row, cols) => {
        var columns = [];
        for (var col = 0; col < cols; col++) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            columns.push(<Cell key={`${col}-${row}`} />);
        }
        //return <div className='cell-row'>{columns}</div>;
        return <div className='row'>{columns}</div>;
    }

    const generateBoard = (rows, cols, placedMines) => {
        const cellBoard = []
        for (var row = 0; row < rows; row++) {
            cellBoard.push(<div className='row' key={row}>{generateRow(row, cols)}</div>)
        }
        return <div className='cell-table'>{cellBoard}</div>
    }

    const init = (rows, cols, mines) => {
        const placedMines = seedMines(rows, cols, mines)
        return generateBoard(rows, cols, placedMines)
    }


    const boardRender = init(rows,cols,mines)

    

    return (
        <div className="heade">
            <p>Board</p>
            {boardRender}
        </div>
    )
}

export default Board;
