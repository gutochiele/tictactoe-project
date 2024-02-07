const gameboard = {
    matrix: [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]
    ]
}

function getPlayers(playerOne, playerTwo){
    return{
        playerOne: playerOne,
        playerTwo: playerTwo
    }
}

if (
    (gameboard.matrix[0][0] === gameboard.matrix[0][1] && gameboard.matrix[0][1] === gameboard.matrix[0][2]) ||
    (gameboard.matrix[1][0] === gameboard.matrix[1][1] && gameboard.matrix[1][1] === gameboard.matrix[1][2]) ||
    (gameboard.matrix[2][0] === gameboard.matrix[2][1] && gameboard.matrix[2][1] === gameboard.matrix[2][2]) ||
    (gameboard.matrix[0][0] === gameboard.matrix[1][0] && gameboard.matrix[1][0] === gameboard.matrix[2][0]) ||
    (gameboard.matrix[0][1] === gameboard.matrix[1][1] && gameboard.matrix[1][1] === gameboard.matrix[2][1]) ||
    (gameboard.matrix[0][2] === gameboard.matrix[1][2] && gameboard.matrix[1][2] === gameboard.matrix[2][2]) ||
    (gameboard.matrix[0][0] === gameboard.matrix[1][1] && gameboard.matrix[1][1] === gameboard.matrix[2][2]) ||
    (gameboard.matrix[0][2] === gameboard.matrix[1][1] && gameboard.matrix[1][1] === gameboard.matrix[2][0])
) {
    console.log("Win condition met");
}




const players = getPlayers('Gustavo', 'Roberto')

console.log('Player 1: ' + players.playerOne);
console.log('Player 2: ' + players.playerTwo);
console.log(gameboard.matrix.join('\n'))
