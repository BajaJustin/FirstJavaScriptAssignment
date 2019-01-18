/*
* Script for index.html, used for "The Mouse Game"
*
* Justin Baja, 000356032, November 26, 2018
*/


/*
* Determines which platers turn it is
*
* @type Number
*/
var playersTurn = 0;
/*
* Player One's total score
*
* @type Number
*/		
var playerOneScore = 0;
/*
* Unique roll's player one rolled
*
* Array of:
* @type Number
*/
var playerOneRolls = [];
/*
* Player Two's total score
*
* @type Number
*/
var playerTwoScore = 0;
/*
* Unique roll's player two rolled
*
* Array of:
* @type Number
*/
var playerTwoRolls = [];




/**
* Displays the instructions on how to play the game
*/
function howTo() {
	document.getElementById("howTo").style.visibility = "visible";
}

/**
* Player 1's dice roll,  displays certain mouse part if unique number is rolled
*/
function playerOneRoll() {
	document.getElementById("resetButton").style.visibility = "hidden";
	document.getElementById("howTo").style.visibility = "hidden";
	// Generates a random number between 1 to 6
	var p1 = Math.floor(Math.random() * 6) + 1;
	if(playerOneRolls.length != 6){
		switch(p1){
			case 1:
				// Displays player one's mouse tail to the screen
				document.getElementById("p1Tail").style.visibility = "visible";
				if(!playerOneRolls.includes(1))
					playerOneRolls.push(1);
				break;
			case 2:
				// Displays player one's mouse ears to the screen
				document.getElementById("p1Ears").style.visibility = "visible";
				if(!playerOneRolls.includes(2))
					playerOneRolls.push(2);
				break;
			case 3:
				// Displays player one's mouse eyes to the screen
				document.getElementById("p1Eyes").style.visibility = "visible";
				if(!playerOneRolls.includes(3))
					playerOneRolls.push(3);
				break;
			case 4:
				// Displays player one's mouse whiskers to the screen
				document.getElementById("p1Whiskers").style.visibility = "visible";
				if(!playerOneRolls.includes(4))
					playerOneRolls.push(4);
				break;
			case 5:
				// Displays player one's mouse nose to the screen
				document.getElementById("p1Nose").style.visibility = "visible";
				if(!playerOneRolls.includes(5))
					playerOneRolls.push(5);
				break;
			case 6:
				// Displays player one's mouse body to the screen
				document.getElementById("p1Body").style.visibility = "visible";
				if(!playerOneRolls.includes(6))
					playerOneRolls.push(6);
				break;
		}
		playersTurn += 1;
		if(playersTurn % 2 == 1){
			document.getElementById("playerOneRoll").style.visibility = "hidden";
			document.getElementById("p1Turn").style.visibility = "hidden";
			document.getElementById("playerTwoRoll").style.visibility = "visible";
			document.getElementById("p2Turn").style.visibility = "visible";
		}
	}
	else {
		playerOneScore++;
		document.getElementById("playerOneScore").innerHTML = playerOneScore;
		document.getElementById("playerOneRoll").style.visibility = "hidden";
		document.getElementById("playerTwoRoll").style.visibility = "hidden";
		document.getElementById("message").innerHTML = "Player One Wins!";
		document.getElementById("message").style.visibility = "visible";
		document.getElementById("resetButton").style.visibility = "visible";
	}
}

/**
* Player 2's dice roll,  displays certain mouse part when rolled
*/
function playerTwoRoll() {
	document.getElementById("howTo").style.visibility = "hidden";
	// Generates a random number from 1 to 6
	var p2 = Math.floor(Math.random() * 6) + 1;
	if(playerTwoRolls.length != 6){
		switch(p2){
			case 1:
				// Displays player two's mouse tail to the screen
				document.getElementById("p2Tail").style.visibility = "visible";
				if(!playerTwoRolls.includes(1))
					playerTwoRolls.push(1);
				break;
			case 2:
				// Displays player two's mouse ears to the screen
				document.getElementById("p2Ears").style.visibility = "visible";
				if(!playerTwoRolls.includes(2))
					playerTwoRolls.push(2);
				break;
			case 3:
				// Displays player two's mouse eyes to the screen
				document.getElementById("p2Eyes").style.visibility = "visible";
				if(!playerTwoRolls.includes(3))
					playerTwoRolls.push(3);
				break;
			case 4:
				// Displays player two's mouse whiskers to the screen
				document.getElementById("p2Whiskers").style.visibility = "visible";
				if(!playerTwoRolls.includes(4))
					playerTwoRolls.push(4);
				break;
			case 5:
				// Displays player two's mouse nose to the screen
				document.getElementById("p2Nose").style.visibility = "visible";
				if(!playerTwoRolls.includes(5))
					playerTwoRolls.push(5);
				break;
			case 6:
				// Displays player two's mouse body to the screen
				document.getElementById("p2Body").style.visibility = "visible";
				if(!playerTwoRolls.includes(6))
					playerTwoRolls.push(6);
				break;
		}
		playersTurn += 1;
		if(playersTurn % 2 == 0){
			document.getElementById("playerOneRoll").style.visibility = "visible";
			document.getElementById("p1Turn").style.visibility = "visible";
			document.getElementById("playerTwoRoll").style.visibility = "hidden";
			document.getElementById("p2Turn").style.visibility = "hidden";
		}
	}
	else {
		playerTwoScore++;
		playersTurn++;
		document.getElementById("playerTwoScore").innerHTML = playerTwoScore;
		document.getElementById("playerOneRoll").style.visibility = "hidden";
		document.getElementById("playerTwoRoll").style.visibility = "hidden";
		document.getElementById("message").innerHTML = "Player Two Wins!";
		document.getElementById("message").style.visibility = "visible";
		document.getElementById("resetButton").style.visibility = "visible";
	}
}

/**
* When a player wins the game, they have the option to reset and start again
*
* Clears both players boards, but keeps the score
*/
function resetGame() {
	document.getElementById("playerOneRoll").style.visibility = "visible";
	document.getElementById("playerTwoRoll").style.visibility = "hidden";
	document.getElementById("message").innerHTML = "";
	document.getElementById("p1Body").style.visibility = "hidden";
	document.getElementById("p1Tail").style.visibility = "hidden";
	document.getElementById("p1Ears").style.visibility = "hidden";
	document.getElementById("p1Eyes").style.visibility = "hidden";
	document.getElementById("p1Nose").style.visibility = "hidden";
	document.getElementById("p1Whiskers").style.visibility = "hidden";
	document.getElementById("p2Body").style.visibility = "hidden";
	document.getElementById("p2Tail").style.visibility = "hidden";
	document.getElementById("p2Ears").style.visibility = "hidden";
	document.getElementById("p2Eyes").style.visibility = "hidden";
	document.getElementById("p2Nose").style.visibility = "hidden";
	document.getElementById("p2Whiskers").style.visibility = "hidden";
	document.getElementById("p1Turn").style.visibility = "visible";
	document.getElementById("p2Turn").style.visibility = "hidden";
	playerOneRolls = [];
	playerTwoRolls = [];
}