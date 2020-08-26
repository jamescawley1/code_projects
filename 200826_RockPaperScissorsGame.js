//user input:
//added secret input: bomb//
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
}   else  {
    console.log('Error, please input a valid value: rock paper, or scissors.');
  }
}
//end user input//

//TEST PRINT:
//console.log(getUserChoice('scissors'));
//should print: rock, paper, or scissors
//END TEST PRINT//

//computer input:
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
//end computer input//

//TEST PRINT: *remove '//'*
//console.log(getComputerChoice());
//should print: rock, paper, or scissors
//END TEST PRINT//

//begin determineWinner input:
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, the computer has won.';
    } else {
      return 'Congratulations! You\'ve won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, the computer has won.';
    } else {
      return 'Congratulations! You\'ve won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, the computer has won.';
    } else {
      return 'Congratulations! You\'ve won!';
    }
  }

//SECRET CHEAT CODE//
 if (userChoice === 'bomb') {
    if (computerChoice === 'rock' || 'scissors' || 'paper') {
      return 'Congratulations! You\'ve won!';
    }
  }
};
//end determineWinner input//

//TEST PRINT//
//console.log(determineWinner('scissors', 'scissors'));
//should print 'The game is a tie!'//
//END TEST PRINT//

//ACTUAL GAME CODE//
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: '+ computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
//END ACTUAL GAME CODE//

//print above function (determines winner)//
playGame();
