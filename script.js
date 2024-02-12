const displayController = (() =>{
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message;
    }
    return {
        renderMessage
    }
})();

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

    const update = (index, value) => {
        matrix[index] = value;
        render();
    }

    const getMatrix = () => matrix;

    return {
        render,
        update,
        getMatrix
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
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
        cell.addEventListener("click", handleClick)
    });
    };
    
    const handleClick = (event) => {
        if (gameOver) {
            return;
        }
        let index = parseInt(event.target.id.split("-")[1]);
        if (gameBoard.getMatrix()[index] != "")
            return;
        gameBoard.update(index, players[currentPlayerIndex].mark);

        if (checkForWin(gameBoard.getMatrix(), players[currentPlayerIndex].mark)){
            gameOver = true;
            displayController.renderMessage(`${players[currentPlayerIndex].playerName} wins!`)
        } else if (checkForTie(gameBoard.getMatrix())){
            gameOver = true;
            displayController.renderMessage("It's a tie!");
        }

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    const restart = () => {
        for (let i = 0; i < 9; i++){
            gameBoard.update(i, "");
        }
        gameBoard.render();
        gameOver = false;
        document.querySelector("#message").innerHTML = "";
    }

    return {
        startGame,
        handleClick,
        restart
    };
})(); 

function checkForWin(matrix) {
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
    for (let i = 0; i < winCombo.length; i++){
        const [a, b, c] = winCombo[i];
        if (matrix [a] && matrix[a] === matrix[b] && matrix[b] === matrix[c]){
            return true;
        }
    }
    return false;
}

function checkForTie(matrix) {
    return matrix.every(cell => cell != "")
}

const startButton = document.querySelector("#startBtn");
startButton.addEventListener("click", () => {
    gameLogic.startGame();
});

const restartButton = document.querySelector('#restartBtn');
restartButton.addEventListener("click", () => {
    gameLogic.restart();
});





