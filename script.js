// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them with factories.
divs = document.getElementsByClassName('insideDiv');

for (let i = 0; i<divs.length; i++) {
    divs[i].addEventListener('click', markerPlace)
}

function markerPlace(e) {
    console.log(e)
    if (e.target.innerHTML == 'X') {
        e.target.innerHTML = 'O';
    } else {
        e.target.innerHTML = 'X';
    }
}

// module
const gameBoard = (() => {
    const board = ["X", "X", "X", "X", "O", "O", "X", "O", "O"];
    return {board}
})();


const createPlayer = (name, marker) => {
    const move = () => console.log(`my name is ${name}`)
    return {move, marker}
}

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');


const renderGameBoard = (() => {
    const board = {gameBoard};
    for (let i = 0; i< board.gameBoard.board.length; i++) {
        console.log(i)
        console.log(board.gameBoard.board[i])
        divs[i].innerHTML = board.gameBoard.board[i];
    }
    console.log(board)

    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');
    console.log(player1)
    console.log(player2)
})();


/*
Allowing player to click on div for marker
eventlistener on div, input player and marker, if marker already there give error, if not place


*/