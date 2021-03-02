// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them with factories.


// module
const gameBoard = (() => {
    const board = ["X", "O", "X", "O", "X", "X", "X", "X", "O"];
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
    }
    console.log(board)
})();
