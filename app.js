
// Score of round, total score, and the active player
var scores, roundScore, activePlayer, gamePlaying;

// Start game fresh
init();

// Rolling the dice function
function btn() {
  if(gamePlaying) {
    // Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // Display result on Die
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // Update round score If rolled number is not 1
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
  }
}

// Hold score function
function hold() {
  if(gamePlaying) {
    // Add current score to GLOBAL
    scores[activePlayer] += roundScore;
    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  }

    if (scores[activePlayer] >= 15) {
      document.querySelector('#name-' + activePlayer).textContent = "Winner!";
      document.querySelector('.dice').style.display = "none";
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
}

// New game function
function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.dice').style.display = "none";
  document.querySelector('#name-0').textContent = "Player 1";
  document.querySelector('#name-1').textContent = "Player 2";

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = "none";
}



document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', init);
