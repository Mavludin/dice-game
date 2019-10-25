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
let score = [];

rollDice.onclick = () => {
	let diceImg =  document.getElementById('diceImg');
	// document.getElementById('player2').classList = 'active';
	// document.querySelectorAll('.active h2')[1].appendChild(dotImage);
	let randomNumber = Math.floor(Math.random() * 6)+1;
	diceImg.src = arrayOfImages[randomNumber];

	score.push(randomNumber);
	console.log(score);
}

const holdBtn = document.getElementById('hold');

holdBtn.onclick = () => {

	let scoreHolder = score.reduce((acc,item) => {
		return acc+item;
	}, 0);

	console.log(scoreHolder);

	let totalScore =  document.querySelector('.active > .total-score');

	let temp = parseInt (totalScore.innerHTML);
	totalScore.innerHTML = '';
	totalScore.innerHTML = temp+scoreHolder;


	playerOne.classList.toggle('active');
	playerTwo.classList.toggle('active');


	let activePlayer = document.querySelector('.active h2');
	activePlayer.appendChild(dotImage);



	// let currentScoreHolder = document.querySelector('.active > .current > p');
	// currentScoreHolder.innerHTML+=scoreHolder;

	// if (playerOne.classList.match('active')) totalScore.innerHTML = scoreHolder;
}