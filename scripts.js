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

function getHumanChoice(){
    let input = prompt("Rock, Paper, Scissors, Shoot!")
    return input
}

function humanWin(h, c){
    console.log("You win! " + h + " beats " + c)
    humanScore++
    console.log("Your score is now " + humanScore)
    console.log("The computer's score is " + computerScore)
}

function humanLose(h, c){
    console.log("You Lose! " + c + " beats " + h)
    computerScore++
    console.log("Your score is " + humanScore)
    console.log("The computer's score is now " + computerScore)
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
            if(computerChoice === ("rock"))return humanWin()
            else return humanLose(humanChoice, computerChoice)
        }
        if(humanChoice === ("scissors")){
            if(computerChoice === ("paper"))return humanWin()
            else return humanLose(humanChoice, computerChoice)
        }
    }
}

function playGame(){
    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }
}