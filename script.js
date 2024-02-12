const gameBoard = (() => {
    let matrix = [];
    for (let i = 0; i < 9; i++) {
        matrix[i] = [''];        
    }
    const render = () => {
        let boardHTML = "";
        matrix.forEach((cell, index) => {
            boardHTML += `<div class="cell" id=cell-${index}">${cell}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
       
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
        cell.addEventListener("click", gameLogic.handleClick)
    });

    }

    return {
        render
    }
        
})()


const createPlayer = (playerName, mark) => ({
    playerName,
    mark
});


const gameLogic = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const startGame = () => {
        players = [
            createPlayer(document.querySelector("#playerOne").value, "X"),
            createPlayer(document.querySelector("#playerTwo").value, "O")
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        gameBoard.render(); 
    };
    
    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("-")[1]);
        alert(index)
    }

    return {
        startGame,
        handleClick
    };
})(); 


const startButton = document.querySelector("#startBtn");
startButton.addEventListener("click", () => {
    gameLogic.startGame();
});







// const winCombo = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]