import {zeroClick} from './ZeroClick';

const handleZeroClick = (clickData, proxedBoard) => {
    //returns an updated clickState array based on the zero propagation
    clickData.board = proxedBoard
    return zeroClick(clickData)
}

export function updateClickStates(clickData, clickStates, proxedBoard) {
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
                copy = handleZeroClick(clickData, proxedBoard)
            }
        } else if (clickType == 'right' && clickState != -1) {
            copy[r][c] = ! copy[r][c]      
        }

        return copy
}