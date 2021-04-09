// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them with factories.
divs = document.getElementsByClassName('insideDiv');
playerTurn = document.getElementById('playerTurn')






// module
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];


    const reset = () => {
        // for (let i = 0; i < board.length; i++) {
        //     board[i] = '';
        // }
        location.reload();
    };

    return {board, reset};
})();

for (let i = 0; i<divs.length; i++) {
    for (let j = 0; j < gameBoard.board.length; j++) {
    divs[i].addEventListener('click', markerPlace)
    if (divs[i].id == gameBoard.board[j]) {
        gameBoard.board.unshift(divs[i].innerHTML)
        console.log(gameBoard.board)
    }
    // x = divs[i].innerHTML;
    // gameBoard.board.push(x)
    }
}

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
        // gameBoard.board.unshift(e.target.innerHTML)
        // console.log(gameBoard.board)
        console.log(e.target.id)
        gameBoard.board.splice(e.target.id, 1, e.target.innerHTML)
        console.log(gameBoard.board)
        checkCurrentPlayer()
        checkWinner()
    } else if (playerTurn.innerHTML == 'O') {
        e.target.innerHTML = 'O';
        playerTurn.innerHTML = player1.marker
        console.log(e.target.id)
        gameBoard.board.splice(e.target.id, 1, e.target.innerHTML)
        console.log(gameBoard.board)
        checkCurrentPlayer()
        checkWinner()
    }
    checkBoard()
}


function checkCurrentPlayer() {
    console.log(player1.marker)
}

function xWin() {
    xwin = document.createElement('h1')
    xwin.innerHTML = 'X wins!'
    xwin.classList.add('xWinClass')

    span = document.getElementById('playerTurn')

    span.appendChild(xwin)
    
}

function oWin() {
    owin = document.createElement('h1')
    owin.innerHTML = 'O wins!'
    owin.classList.add('xWinClass')

    span = document.getElementById('playerTurn')

    span.appendChild(owin)
}

function checkWinner() {
    if (gameBoard.board[0] == 'X' && gameBoard.board[1] == 'X' && gameBoard.board[2] == 'X') {
        // alert('X Wins')
        xWin()
    }
    else if (gameBoard.board[3] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[5] == 'X')  {
        xWin()
    }
    else if (gameBoard.board[6] == 'X' && gameBoard.board[7] == 'X' && gameBoard.board[8] == 'X')  {
        xWin()
    }
    else if (gameBoard.board[0] == 'X' && gameBoard.board[3] == 'X' && gameBoard.board[6] == 'X')  {
        xWin()
    }
    else if (gameBoard.board[1] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[7] == 'X')  {
        xWin()
    }
    else if (gameBoard.board[2] == 'X' && gameBoard.board[5] == 'X' && gameBoard.board[8] == 'X')  {
        xWin()
    }
    else if (gameBoard.board[2] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[6] == 'X')  {
        xWin()
    }
    else if (gameBoard.board[0] == 'X' && gameBoard.board[4] == 'X' && gameBoard.board[8] == 'X')  {
        xWin()
    }





    // Noughts Wins
    else if (gameBoard.board[0] == 'O' && gameBoard.board[1] == 'O' && gameBoard.board[2] == 'O') {
        // alert('O Wins')
        oWin()
    }
    else if (gameBoard.board[3] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[5] == 'O')  {
        oWin()
    }
    else if (gameBoard.board[6] == 'O' && gameBoard.board[7] == 'O' && gameBoard.board[8] == 'O')  {
        oWin()
    }
    else if (gameBoard.board[0] == 'O' && gameBoard.board[3] == 'O' && gameBoard.board[6] == 'O')  {
        oWin()
    }
    else if (gameBoard.board[1] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[7] == 'O')  {
        oWin()
    }
    else if (gameBoard.board[2] == 'O' && gameBoard.board[5] == 'O' && gameBoard.board[8] == 'O')  {
        oWin()
    }
    else if (gameBoard.board[2] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[6] == 'O')  {
        oWin()
    }
    else if (gameBoard.board[0] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[8] == 'O')  {
        oWin()
    }
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