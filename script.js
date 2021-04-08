// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them with factories.
divs = document.getElementsByClassName('insideDiv');
playerTurn = document.getElementById('playerTurn')


for (let i = 0; i<divs.length; i++) {
    divs[i].addEventListener('click', markerPlace)
}


// module
const gameBoard = (() => {
    const board = ["", "", "", "X", "O", "O", "X", "O", "O"];


    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    };

    return {board, reset};
})();


const createPlayer = (name, marker) => {
    const move = () => console.log(`${name}`)
    return {move, marker}
}

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');

console.log('playeersss')
console.log(player1.marker)
console.log(player2.marker)
player1.move()
x = player1.move()

playerTurn.innerHTML = player1.marker

function markerPlace(e) {
    console.log(e)
    if (playerTurn.innerHTML == 'X') {
        e.target.innerHTML = 'X';
        playerTurn.innerHTML = player2.marker
        checkCurrentPlayer()
    } else if (playerTurn.innerHTML == 'O') {
        e.target.innerHTML = 'O';
        playerTurn.innerHTML = player1.marker
        checkCurrentPlayer()
    }
    checkBoard()
}


function checkCurrentPlayer() {
    console.log(player1.marker)
}


const playGame = (() => {
    const board = {gameBoard}

    let marker = '';
    let winner = '';

    const divs = document.getElementsByClassName('insideDiv');

    function addClick() {
        divs.forEach((div) => div.addEventListener('click', markPlace));
    }

    const markPlace = (e) => {
        console.log(e + 'burrrrrrrrrrrrrr')
    }


})();

const checkBoard = (() => {
    if (gameBoard.board[0] == 'X' && gameBoard.board[1] == 'X' && gameBoard.board[2] == 'X') {
        console.log('X WINS')
    }
})



const renderGameBoard = (() => {
    const board = {gameBoard};

    const resetBtn = document.getElementById('resetBtn')

    const updateBoard = () => {
        for (let i = 0; i< board.gameBoard.board.length; i++) {
            console.log(i)
            console.log(board.gameBoard.board[i])
            divs[i].innerHTML = board.gameBoard.board[i];
        }
    }
    // for (let i = 0; i< board.gameBoard.board.length; i++) {
    //     console.log(i)
    //     console.log(board.gameBoard.board[i])
    //     divs[i].innerHTML = board.gameBoard.board[i];
    // }
    updateBoard()
    console.log(board)

    resetBtn.addEventListener('click', (e) => {
        console.log(e)
        gameBoard.reset();
        updateBoard();
    });

    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');
    console.log(player1)
    console.log(player2)
})();


/*
Allowing player to click on div for marker
eventlistener on div, input player and marker, if marker already there give error, if not place


*/

checkBoard()