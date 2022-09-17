export function getGameStatus(stateData) {
    //returns an updated clickState based on provided info
    let lastClick = 4; //comes from clickData
    let maxRows = board.length
    let maxCols = board[0].length
    const clickedRow = stateData.position[0], clickedCol = stateData.position[1];

    const create2dArray = (rows, columns) => [...Array(rows).keys()].map(i => Array(columns).fill(null))

    const isGameOver = () => {
        
    }
    

    const main = () => {
        if (isGameOver()) {
            return 'game-over'
        } else if (isWin()) {
            return 'win-game'
        }
        else {
            return 'in-progress'
        }        
    }

    return main()

}


