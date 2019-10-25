let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');

let activePlayer = document.querySelector('.active h2');
let dotImage = document.createElement('img');
dotImage.src = 'dot.png';
dotImage.alt = 'Just a dot';

activePlayer.appendChild(dotImage);

const arrayOfImages = [
	'https://i.imgur.com/m9mb3cx.png',
	'https://i.imgur.com/EA2qvGZ.png',
	'https://i.imgur.com/qaekzKO.png',
	'https://i.imgur.com/qbqvQvB.png',
	'https://i.imgur.com/eeBcrqU.png',
	'https://i.imgur.com/vzksTKQ.png'
];

const rollDice = document.getElementById('roll-dice');
let dicesArray = [];

let totalScoreOfPlayer1 = 0;
let totalScoreOfPlayer2 = 0;

let diceImg =  document.getElementById('diceImg');

rollDice.onclick = () => {
	let currentScore = document.querySelector('.active > .current > p');

	let randomNumber = Math.floor(Math.random() * 6)+1;
	currentScore.innerHTML = randomNumber;

	let randomRotate = [10, 350, 5, 0, 340, 7, 355];
	let chooseRandomRotate = Math.floor(Math.random() * randomRotate.length)+1;

	diceImg.style.transform = `translate(-50%, -50%) rotate(${randomRotate[chooseRandomRotate-1]}deg)`;
	diceImg.src = arrayOfImages[randomNumber-1];

	dicesArray.push(randomNumber);
};

const holdBtn = document.getElementById('hold');

let scoreOfPLayer1 = document.querySelector('#player1 .total-score');
let scoreOfPLayer2 = document.querySelector('#player2 .total-score');
let player1Wins = document.querySelector('#player1 .victory');
let player2Wins = document.querySelector('#player2 .victory');

holdBtn.onclick = () => {

	let scoreHolder = dicesArray.reduce((acc,item) => {
		return acc+item;
	}, 0);

	let currentScore = document.querySelector('.active > .current > p');
	currentScore.innerHTML = 0;

	const player1 = document.querySelector('#player1');
	const player2 = document.querySelector('#player2');


	if (player1.classList.contains('active')) { 
		totalScoreOfPlayer1 += scoreHolder;
		let totalScore = document.querySelector('.active > .total-score');
		totalScore.innerHTML = totalScoreOfPlayer1;

	}
	if (player2.classList.contains('active')) { 
		totalScoreOfPlayer2 += scoreHolder;
		let totalScore = document.querySelector('.active > .total-score');
		totalScore.innerHTML = totalScoreOfPlayer2;
	}

	playerOne.classList.toggle('active');
	playerTwo.classList.toggle('active');

	diceImg.src = "";

	dicesArray = [];

	let activePlayer = document.querySelector('.active h2');
	activePlayer.appendChild(dotImage);

	if (scoreOfPLayer1.innerHTML.length > 0 && scoreOfPLayer1.innerHTML >= 50) {
		player1Wins.style.display = 'block';
	}
	else if (scoreOfPLayer2.innerHTML.length > 0 && scoreOfPLayer2.innerHTML >= 50) {
		player2Wins.style.display = 'block';
	}

};

const newGame = document.getElementById('new-game');

newGame.onclick = () => {
	dicesArray = [];

	scoreOfPLayer1.innerHTML = 0;
	scoreOfPLayer2.innerHTML = 0;

	player1Wins.style.display = 'none';
	player2Wins.style.display = 'none';

	totalScoreOfPlayer1 = 0;
	totalScoreOfPlayer2 = 0;
}
