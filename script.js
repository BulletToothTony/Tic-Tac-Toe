// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them with factories.


// module
const gameBoard = (() => {
    const board = ["X", "O", "X", "O", "X", "X", "X", "X", "O"];
    return {
        board
    }
})();


const player = (name) => {
    const move = () => console.log(`my name is ${name}`)
    return {move}
}

function renderGameBoard() {
    gameBoard()
    for (let i = 0; i< board.length; i++) {
        console.log(i)
    }
}

renderGameBoard()