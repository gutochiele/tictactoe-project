const gameboard = {
    matrix: [
        [0, 0, 0], 
        [0, 0, 0], 
        [0, 0, 0]
    ]
}

function getPlayers(playerOne, playerTwo){
    return{
        playerOne: playerOne,
        playerTwo: playerTwo
    }
}

if (
    // Rows
    ((gameboard.matrix[0][0] === 1) && (gameboard.matrix[0][1] === 1) && (gameboard.matrix[0][2] === 1)) ||
    ((gameboard.matrix[1][0] === 1) && (gameboard.matrix[1][1] === 1) && (gameboard.matrix[1][2] === 1)) ||
    ((gameboard.matrix[2][0] === 1) && (gameboard.matrix[2][1] === 1) && (gameboard.matrix[2][2] === 1)) ||
    // Columns
    ((gameboard.matrix[0][0] === 1) && (gameboard.matrix[1][0] === 1) && (gameboard.matrix[2][0] === 1)) ||
    ((gameboard.matrix[0][1] === 1) && (gameboard.matrix[1][1] === 1) && (gameboard.matrix[2][1] === 1)) ||
    ((gameboard.matrix[0][2] === 1) && (gameboard.matrix[1][2] === 1) && (gameboard.matrix[2][2] === 1)) ||
    // Diagonals
    ((gameboard.matrix[0][0] === 1) && (gameboard.matrix[1][1] === 1) && (gameboard.matrix[2][2] === 1)) ||
    ((gameboard.matrix[0][2] === 1) && (gameboard.matrix[1][1] === 1) && (gameboard.matrix[2][0] === 1))
) {
    console.log("Win X condition met");
}

if (
    // Rows
    ((gameboard.matrix[0][0] === 2) && (gameboard.matrix[0][1] === 2) && (gameboard.matrix[0][2] === 2)) ||
    ((gameboard.matrix[1][0] === 2) && (gameboard.matrix[1][1] === 2) && (gameboard.matrix[1][2] === 2)) ||
    ((gameboard.matrix[2][0] === 2) && (gameboard.matrix[2][1] === 2) && (gameboard.matrix[2][2] === 2)) ||
    // Columns
    ((gameboard.matrix[0][0] === 2) && (gameboard.matrix[1][0] === 2) && (gameboard.matrix[2][0] === 2)) ||
    ((gameboard.matrix[0][1] === 2) && (gameboard.matrix[1][1] === 2) && (gameboard.matrix[2][1] === 2)) ||
    ((gameboard.matrix[0][2] === 2) && (gameboard.matrix[1][2] === 2) && (gameboard.matrix[2][2] === 2)) ||
    // Diagonals
    ((gameboard.matrix[0][0] === 2) && (gameboard.matrix[1][1] === 2) && (gameboard.matrix[2][2] === 2)) ||
    ((gameboard.matrix[0][2] === 2) && (gameboard.matrix[1][1] === 2) && (gameboard.matrix[2][0] === 2))
) {
    console.log("Win O condition met");
}




const players = getPlayers('Gustavo', 'Roberto')

console.log('Player 1: ' + players.playerOne);
console.log('Player 2: ' + players.playerTwo);
console.log(gameboard.matrix.join('\n'))
