let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let playerTurn = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

function xoxMove(index) {
    if (board[index] !== '' || !gameActive || !playerTurn) return;

    updateCell(index, 'X');
    checkResult();
    
    if (gameActive) {
        playerTurn = false;
        document.getElementById('xoxStatus').innerText = "Bilgisayar...";
        setTimeout(computerMove, 500);
    }
}

function computerMove() {
    if (!gameActive) return;

    let available = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') available.push(i);
    }

    if (available.length > 0) {
        const random = available[Math.floor(Math.random() * available.length)];
        updateCell(random, 'O');
        checkResult();
    }
    
    if (gameActive) {
        playerTurn = true;
        document.getElementById('xoxStatus').innerText = "Sıra Sende: X";
    }
}

function updateCell(index, player) {
    board[index] = player;
    const cell = document.getElementsByClassName('xox-cell')[index];
    cell.innerText = player;
    cell.style.color = player === 'X' ? 'green' : 'red';
}

function checkResult() {
    let roundWon = false;
    
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') continue;
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        const winner = playerTurn ? 'Kazandın!' : 'Kaybettin!';
        document.getElementById('xoxStatus').innerText = winner;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        document.getElementById('xoxStatus').innerText = "Berabere!";
        gameActive = false;
        return;
    }
}

function resetXox() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    playerTurn = true;
    document.getElementById('xoxStatus').innerText = "Sıra Sende: X";
    
    const cells = document.getElementsByClassName('xox-cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}