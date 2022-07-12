import React, { useState, useEffect } from 'react';
import '../styles/Board.css';
import Cell from './Cell'

//import '../styles/App.css';

const Board = (props) => {
    const cols = 10;
    const rows = 10;
    const mines = 5;
    /*
    const seedMines = (r, c, m) => {
        //seeds mines in a 2d array
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
        return placedMines
    }
    */
    const seedMines = (r, c, m) => {
        //seeds mines as a single number
        const placedMines = []
        while (placedMines.length < m) {
            let location = Math.floor(Math.random() * r * c)
            if (! placedMines.includes(location)) {
                placedMines.push(location)
            }
        }
        console.log(placedMines)
        return placedMines
    }

    const convertRC = (row, col) => {
        return row * 10 + col
    }

    const generateRow = (row, cols, placedMines) => {
        var columns = [];
        let isMine = false;
        for (var col = 0; col < cols; col++) {
            //console.log(placedMines.includes(convertRC(row, col)))
            if (placedMines.includes(convertRC(row, col))) {
                //checks if there is a mine here based on the random seed
                
                isMine = true
            }
            columns.push(<Cell isMine={isMine} key={`${col}-${row}`} />);
            isMine = false
        }
        //return <div className='cell-row'>{columns}</div>;
        return <div className='row'>{columns}</div>;
    }



    const generateBoard = (rows, cols, placedMines) => {
        const cellBoard = []
        for (var row = 0; row < rows; row++) {
            cellBoard.push(<div className='row' key={row}>{generateRow(row, cols, placedMines)}</div>)
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
