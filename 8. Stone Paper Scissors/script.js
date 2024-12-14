let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");
let displayBoard = document.querySelector("#msg");

let uScore = 0;
let cScore = 0;

const choices = document.querySelectorAll(".choice");

const computerChoice = () =>{
    const options = ["rock" , "paper", "scissors"];
    const randomIndex =  Math.floor(Math.random() * 3);   
    return options[randomIndex];
}

const drawGame = ()=>{
    console.log("Game was draw");
}

const showWinner = (userWin) =>{
    if(userWin){
        uScore++;
        console.log("You won!");
        displayBoard.innerText = `You win!`;
        displayBoard.style.backgroundColor = "green";
        displayBoard.style.color = "blanchedalmond";


        userScore.innerText = uScore;
    }else{
        cScore++;
        console.log("You lost!");
        displayBoard.innerText = "You lose!";
        displayBoard.style.backgroundColor = "red";
        displayBoard.style.color = "blanchedalmond";
        compScore.innerText = cScore;
    }
}

const playGames = (userChoice) =>{
    console.log("User choice:", userChoice);
    const compChoice = computerChoice();
    console.log("Computer choice :" , compChoice)

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice == "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice == "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").getAttribute("id");
        playGames(userChoice);
    });
});
