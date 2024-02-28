let board = ['', '', '', '', '', '', '', '', '']; // Represents the board
let currentPlayer = 'X'; // X starts the game
let gameOver = false;

// Winning combinations
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

// Function to make a move
function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        render();
        checkWin();
        checkDraw();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
    }
}

// Function to check for a win
function checkWin() {
    for (let combo of winningCombos) {
        if (board[combo[0]] !== '' &&
            board[combo[0]] === board[combo[1]] &&
            board[combo[0]] === board[combo[2]]) {
            gameOver = true;
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        }
    }
}

// Function to check for a draw
function checkDraw() {
    if (!board.includes('') && !gameOver) {
        gameOver = true;
        document.getElementById('status').innerText = "It's a draw!";
    }
}

// Function to reset the board
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('status').innerText = "Player X's turn";
    render();
}

// Function to render the board
function render() {
    for (let i = 0; i < board.length; i++) {
        document.getElementsByClassName('cell')[i].innerText = board[i];
    }
}
