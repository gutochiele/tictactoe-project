const createBoard = function(){
    return function(){
        let matrix = [''];
        for (let i = 0; i < 9; i++) {
            matrix[i] = ['']
        }
        return matrix;  //remember a function must return something
    }
}();
const gameboard = createBoard();


const winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]