let currentPlayer;
let player1CurrentRoll = 0;
let player2CurrentRole = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;

function newGame() {
    currentPlayer = 'player1';
    player1CurrentRoll = 0;
    player1CurrentRoll = 0;
    player1TotalScore = 0;
    player2TotalScore =0;

    document.getElementById('player1CurrentRoll').textContent = player1CurrentRoll;
    document.getElementById('player2CurrentRoll').textContent = player1CurrentRoll;
    document.getElementById('player1TotalScore').textContent = player1TotalScore;
    document.getElementById('player2TotalScore').textContent =  player2TotalScore;
    alert('New Game! Player 1 goes first.');
}
function rollDice(player) {
    const currentRollElement = document.getElementById(`${player}CurrentRole`);
    const currentRoll = Math.floor(Math.random() * 6) + 1;
    currentRollElement.textContent = currentRoll;
    if (currentRoll !==1) {
        if (player ==='player1') {
            player1CurrentRoll += currentRoll;
        } else {
            player1CurrentRoll  += currentRoll;

        }
        } else {
            alert(`Oops! ${player}rolled a '1'.Switching to the next player.`);
            switchPlayer();
        }
    }
function holdScore(player) {
    if (player === 'player1') {
        player1TotalScore += player1CurrentRoll;
        document.getElementById('playerTotalScore').textContent = player1TotalScore;
    } else {
        player2TotalScore += player2CurrentRoll;
        document.getElementById('player2TotalScore').textContent = Player2TotalScore;
    }
if (player1TotalScore >=20 || playerTotalScore >=20) {
    alert( `${player}wins.Game over.`);
    newGame();
} else {
    switchPlayer();

}

}
function switchPlayer() {
    currentPlayer = currentPlayer === 'player1'? 'player2' : 'player1';
    player1CurrentRoll = 0;
    player2CurrentRole = 0;
    document.getElementById('player1CurrentRoll'). textContent = 0;
    document.getElementById('player2Currentrole').textContent =0;
    alert(`Switching to ${currentPlayer}'s turn.`);


}