let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");
let displayBoard = document.querySelector("#msg");

let uScore = 0;
let cScore = 0;

const choices = document.querySelectorAll(".choice");

const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = (userChoice, compChoice) => {
    console.log("Game was a draw");
    displayBoard.innerText = `It's a draw! You both chose ${userChoice}.`;
    displayBoard.style.backgroundColor = "gray";
    displayBoard.style.color = "white";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        uScore++;
        console.log("You won!");
        displayBoard.innerText = `You win! You chose ${userChoice}, Computer chose ${compChoice}.`;
        displayBoard.style.backgroundColor = "green";
        displayBoard.style.color = "blanchedalmond";
        displayBoard.style.fontSize = "1rem";

        userScore.innerText = uScore;
    } else {
        cScore++;
        console.log("You lost!");
        displayBoard.innerText = `You lose! You chose ${userChoice}, Computer chose ${compChoice}.`;
        displayBoard.style.backgroundColor = "#CA054D";
        displayBoard.style.color = "blanchedalmond";
        displayBoard.style.fontSize = "1rem";


        compScore.innerText = cScore;
    }
};

const playGames = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = computerChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").getAttribute("id");
        playGames(userChoice);
    });
});
