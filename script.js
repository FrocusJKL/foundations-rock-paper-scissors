function CPUChoice() {
	let choice = Math.floor(Math.random() * 3) + 1;
	let answer = '';
	if (choice === 1) {
		answer = 'rock';
		console.log('CPU Rock');
	} else if (choice === 2) {
		answer = 'paper';
		console.log('CPU Paper');
	} else if (choice === 3) {
		answer = 'scissors';
		console.log('CPU scissors');
	}
	return answer;
}

function playerChoice() {
	let salida = true;
	while (salida === true) {
		let selection = prompt(
			`Please write your choice
	- Rock
	- Paper
	- Scissors`
		);
		selection = selection.toLowerCase();
		if (selection === 'rock') {
			salida = false;

			console.log('Player Rock');
			return selection;
		} else if (selection === 'paper') {
			salida = false;
			console.log('Player Paper');
			return selection;
		} else if (selection === 'scissors') {
			salida = false;

			console.log('Player Scissors');
			return selection;
		} else {
			console.log('wrong value');
		}
	}
}

function cpuGame() {
	let turnos = prompt('How many round do you want to CPU game');
	let cpuScore = 0;
	let cpu2Score = 0;

	for (let i = 1; i <= turnos; i++) {
		let cpu = CPUChoice();
		let cpu2 = CPUChoice();

		if (cpu === cpu2) {
			console.log('%cTIE', 'color:Orange');
		} else if (cpu === 'rock' && cpu2 === 'scissors') {
			cpuScore++;
			console.log('%cWIN', 'color:Green');
		} else if (cpu === 'paper' && cpu2 === 'rock') {
			cpuScore++;
			console.log('%cWIN', 'color:Green');
		} else if (cpu === 'scissors' && cpu2 === 'paper') {
			cpuScore++;
			console.log('%cWIN', 'color:Green');
		} else if (cpu === 'rock' && cpu2 === 'paper') {
			cpu2Score++;
			console.log('%cLOSE', 'color:red');
		} else if (cpu === 'paper' && cpu2 === 'scissors') {
			cpu2Score++;
			console.log('%cLOSE', 'color:red');
		} else if (cpu === 'scissors' && cpu2 === 'rock') {
			cpu2Score++;
			console.log('%cLOSE', 'color:red');
		}
		console.log('-----------------------------');
	}

	console.log('CPU 1: ', cpuScore);
	console.log('CPU 2: ', cpu2Score);

	if (cpuScore === cpu2Score) {
		console.log('%cTIE', 'color:Orange');
	} else if (cpuScore > cpu2Score) {
		console.log('%cCPU 1 WIN', 'color:Green');
	} else {
		console.log('%cCPU 1 LOSE', 'color:Red');
	}
}

function playerGame() {
	let turnos = prompt('How many rounds do you want to your game');
	let playerScore = 0;
	let cpuScore = 0;

	for (let i = 1; i <= turnos; i++) {
		let player = playerChoice();
		let cpu = CPUChoice();

		if (player === cpu) {
			console.log('%cTIE', 'color:Orange');
		} else if (player === 'rock' && cpu === 'scissors') {
			playerScore++;
			console.log('%cWIN', 'color:Green');
		} else if (player === 'paper' && cpu === 'rock') {
			playerScore++;
			console.log('%cWIN', 'color:Green');
		} else if (player === 'scissors' && cpu === 'paper') {
			playerScore++;
			console.log('%cWIN', 'color:Green');
		} else if (player === 'rock' && cpu === 'paper') {
			cpuScore++;
			console.log('%cLOSE', 'color:red');
		} else if (player === 'paper' && cpu === 'scissors') {
			cpuScore++;
			console.log('%cLOSE', 'color:red');
		} else if (player === 'scissors' && cpu === 'rock') {
			cpuScore++;
			console.log('%cLOSE', 'color:red');
		}
		console.log('-----------------------------');
	}
	console.log('Player: ', playerScore);
	console.log('CPU: ', cpuScore);

	if (playerScore === cpuScore) {
		console.log('%cTIE', 'color:Orange');
	} else if (playerScore > cpuScore) {
		console.log('%cPlayer WIN', 'color:Green');
	} else {
		console.log('%cPlayer LOSE', 'color:Red');
	}
}
function Game() {
	let choice = true;
	let repeat = '';

	while (choice === true) {
		let repChoice = true;
		let game = prompt(`
What's your choice?
	- Player VS CPU    (VS)
	- CPU VS CPU       (CPU)`);
		if (game.toLowerCase() === 'vs') {
			while (repChoice === true) {
				console.log('Cpu game');
				playerGame();
				repeat = prompt(`¿Quieres Repetir?
			- Yes
			- No`);
				if (repeat.toLowerCase() === 'yes') {
					console.clear();
				} else if (repeat.toLowerCase() === 'no') {
					repChoice = false;
				} else {
					console.log('wrong value');
				}
			}
		} else if (game.toLowerCase() === 'cpu') {
			while (repChoice === true) {
				console.log('Cpu game');
				cpuGame();
				repeat = prompt(`¿Quieres Repetir?
			- Yes
			- No`);
				if (repeat.toLowerCase() === 'yes') {
					console.clear();
				} else if (repeat.toLowerCase() === 'no') {
					repChoice = false;
				} else {
					console.log('wrong value');
				}
			}
		} else {
			console.log('wrong value');
		}
	}
}

Game();
/* console.clear(); */
