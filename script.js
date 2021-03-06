'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');


const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');


const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame  = document.querySelector('.btn--new');
const dice  = document.querySelector('.dice');

let valueScore0, valueScore1, valueCurrent;

const init = function () {
  dice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  valueScore0 = 0;
  valueScore1 = 0;
  valueCurrent = 0;
  rollDice.disabled = false;
  hold.disabled = false;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

newGame.addEventListener('click', init);

rollDice.addEventListener('click', function () {
  let diceNumber = Math.floor(Math.random() * 6 ) + 1;
  dice.src = `dice-${diceNumber}.png`;
  dice.classList.remove('hidden');

  if (diceNumber === 1) {
    switchPlayer();
  } else {
    valueCurrent += diceNumber;
    player0.classList.contains('player--active') ? current0.textContent = valueCurrent : current1.textContent = valueCurrent;
  };

});

hold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    valueScore0 += valueCurrent;
    score0.textContent = valueScore0;
    valueScore0 >= 100 ? winner(player0) : switchPlayer(player1, player0);
  } else {
    valueScore1 += valueCurrent;
    score1.textContent = valueScore1;
    valueScore1 >= 100 ? winner(player1) : switchPlayer(player0, player1);
  };
});

function switchPlayer() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  valueCurrent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
};

function winner(player) {
  rollDice.disabled = true;
  hold.disabled = true;
  console.log(player); 
  player.classList.add('player--winner');
};

init();