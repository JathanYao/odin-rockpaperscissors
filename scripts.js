const displayComputerScore = document.querySelector("#cScore")
const displayHumanScore = document.querySelector("#hScore")
const displayResult = document.querySelector("#result")

let humanScore = 0
let computerScore = 0;

function getComputerChoice(){
    let randOnetoThree = parseInt(Math.random() * 3)
    switch(randOnetoThree){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

displayHumanScore.textContent = "Human Score: " + humanScore;
displayComputerScore.textContent = "Computer Score: " + computerScore;

function humanWin(h, c){
    displayResult.textContent = "You win! " + h + " beats " + c;
    humanScore++
    displayHumanScore.textContent = "Human Score: " + humanScore;
    displayComputerScore.textContent = "Computer Score: " + computerScore;
    if(humanScore == 5)return winner("You");
}

function humanLose(h, c){
    displayResult.textContent = "You Lose! " + c + " beats " + h;
    computerScore++
    displayHumanScore.textContent = "Human Score: " + humanScore;
    displayComputerScore.textContent = "Computer Score: " + computerScore;
    if(computerScore == 5)return winner("Computer");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    console.log("You played " + humanChoice)
    console.log("Computer played " + computerChoice)
    
    if(humanChoice === computerChoice){
        return console.log("Its a draw!") 
    }else{
        if(humanChoice === ("rock")){
            if(computerChoice === ("scissors")){
                return humanWin(humanChoice, computerChoice)
            }
            else return humanLose(humanChoice, computerChoice)
        }
        if(humanChoice === ("paper")){
            if(computerChoice === ("rock"))return humanWin(humanChoice, computerChoice)
            else return humanLose(humanChoice, computerChoice)
        }
        if(humanChoice === ("scissors")){
            if(computerChoice === ("paper"))return humanWin(humanChoice, computerChoice)
            else return humanLose(humanChoice, computerChoice)
        }
    }
}
function winner(won){
    alert(won + " reached 5 wins!")
}
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
  });

