const player1 = {
    points: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1ScoreDisplay')
}
const player2 = {
    points: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2ScoreDisplay')
}

const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.points += 1;
        if (player.points === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('looser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.points;
    }
}

//Player 1 button
player1.button.addEventListener('click', () => {
    updateScores(player1, player2);
})

//Player 2 button
player2.button.addEventListener('click', () => {
    updateScores(player2, player1);
})

// Winning score
winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

// Reset button
resetButton.addEventListener('click', reset)

// Reset function
function reset() {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.points = 0;
        player.display.textContent = player.points;
        player.display.classList.remove('winner', 'looser');
        player.button.disabled = false;
    }
};