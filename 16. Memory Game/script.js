
const frontFaceCards = document.querySelectorAll(".front-face");
const backFaceCards = document.querySelectorAll(".back-face");
const cards = document.querySelectorAll(".card");
const tiles = document.querySelectorAll(".tile");
const restartBtn = document.querySelector("#restart");
const pauseBtn = document.querySelector("#pause");
const startBtn = document.querySelector("#start");
const stopwatch = document.querySelector(".stopwatch");
const score = document.querySelector(".score");
const finalScore = document.querySelector("#finalScore");

console.log("YOu working?");

let incorrectGuess = 0;
let correctGuess = 0;
let totalPoints = 0;
let matchedCards = 0;
let clickedCards = [];

// For the watch
let timer = true;
let isPaused = false;
let minute = 0;
let second = 0;
let millisecond = 0;

function togglePause() {
    if (timer) {
        timer = false;
        isPaused = true;
        pauseBtn.innerText = "RESUME";
    } else {
        timer = true;
        isPaused = false;
        pauseBtn.innerText = "PAUSE";
        runTimer();
    }
}



function resetGame() {
    timer = false;
    minute = 0;
    second = 0;
    millisecond = 0;
    correctGuess = 0;
    incorrectGuess = 0;
    totalPoints = 0;
    matchedCards = 0;
    clickedCards = [];

    stopwatch.innerText = `00:00:00`;
    score.innerText = `Score 0`;

    cards.forEach((card) => {
        card.classList.remove("flipped");
    })

    shuffleCards();
}

function runTimer() {
    if (timer) {
        millisecond += 10;
        if (millisecond === 1000) {
            millisecond = 0;
            second++;
        }
        if (second === 60) {
            second = 0;
            minute++;
        }

        let msString = millisecond < 100 ? `0${millisecond}`.slice(-2) :  millisecond.toString().slice(-2);
        let secString = second < 10 ? `0${second}` : second;
        let minString = minute < 10 ? `0${minute}` : minute;

        stopwatch.innerText = `${minString}:${secString}:${msString}`;

        setTimeout(runTimer, 10);
    }
}

function updateScore() {
    totalPoints = correctGuess - incorrectGuess;
    score.innerText = `Score ${totalPoints}`;

    console.log("Points : " + totalPoints);
}

function toggleCard(card) {
    card.classList.toggle("flipped");
}

function checkMatch() {
    let card1 = clickedCards[0];
    let card2 = clickedCards[1];

    let alt1 = card1.firstElementChild.getAttribute("alt");
    let alt2 = card2.firstElementChild.getAttribute("alt");

    if (alt1 === alt2) {
        console.log("Match found!");

        correctGuess += 50;
        matchedCards += 2;
        card1.firstElementChild.style.display = "block";
        card2.firstElementChild.style.display = "block";

        clickedCards = [];
        console.log("Correct guess : " + correctGuess);

        checkGameCompleted();

    } else {
        incorrectGuess += 10;
        console.log("Incorrect : " + incorrectGuess);
        setTimeout(() => {
            clickedCards.forEach((clickedCard) => {
                toggleCard(clickedCard);
            });
            clickedCards = [];
        }, 1000);
    }

    updateScore();
}

function checkGameCompleted() {
    if (matchedCards === cards.length) {
        console.log("Game completed");
        togglePause(); // Pause the game
        
          // Set the final score text
        document.getElementById("finalScore").innerText = `Final Score: ${totalPoints}`;
        
        // Show the modal
        $('#scoreModal').modal('show');
    }
}

function shuffleCards() {
    tiles.forEach(tile => {
        let randomPos = Math.floor(Math.random() * tiles.length);
        tile.style.order = randomPos;
    });

    runTimer();
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (isPaused ||  clickedCards.length === 2) {
            return;
        }

        let firstChild = card.firstElementChild;

        let cardName = firstChild.getAttribute("alt");
        console.log("YOu clicked me", cardName);

        toggleCard(card);

        clickedCards.push(card);

        if (clickedCards.length === 2) {
            checkMatch();
        }
    });
});



window.addEventListener("load", shuffleCards);
window.addEventListener("load", runTimer);


restartBtn.addEventListener("click", () => {
    console.log("You clicked restart btn");
    resetGame();
    timer = true;
    isPaused = false;
    pauseBtn.innerText = "PAUSE";
    runTimer();
});


pauseBtn.addEventListener("click", () => {
    console.log("You clicked PAUSE/RESUME button");
    togglePause();
});
