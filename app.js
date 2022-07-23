function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.ceil(Math.random() * 3);
  return choices[randomNumber];
}

function computerChoice() {
    const computerChoice = getComputerChoice();
    console.log(`The computer chose ${computerChoice}`);
}

function rockPaperScissors(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The result is a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins!';
    } else {
      return 'You win!';
    }
  }
}

function getUserChoice(userInput) {
    userInput = prompt('Do you choose rock, paper or scissors?');
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Please enter rock, paper or scissors.');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`);
        console.log(rockPaperScissors(userChoice, computerChoice));
}
}

function points() {
    let userPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        if (rockPaperScissors(userChoice, computerChoice) === 'You win!') {
            userPoints++;
        } else if (rockPaperScissors(userChoice, computerChoice) === 'The computer wins!') {
            computerPoints++;
        }
    }
    if (userPoints > computerPoints) {
        console.log(`You won ${userPoints} to ${computerPoints}`);
    } else if (userPoints < computerPoints) {
        console.log(`The computer won ${computerPoints} to ${userPoints}`);
    } else {
        console.log('The game was a tie!');
    }
}

game();
