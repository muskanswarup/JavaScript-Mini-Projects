const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const restartBtn = document.getElementById("restart-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("game-over-modal");
const finalScoreEl = document.getElementById("final-score");
const board = document.getElementById("board");
const timerEl = document.getElementById("countdown-timer");
const scoreEl = document.getElementById("score");

let currentMoleTile;
let currentPotatoTile;
let score = 0;
let gameOver = false;
let gameIntervalMole;
let gameIntervalPotato;
let timer;
let timeLeft = 30;

function setGame() {
    board.innerHTML = ""; // Clear board

    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        board.appendChild(tile);
    }
}

function startGame() {
    if (gameOver) resetGame();

    gameOver = false;
    gameIntervalMole = setInterval(setMole, 2000);
    gameIntervalPotato = setInterval(setPotato, 3000);
    startTimer();
}

function pauseGame() {
    clearInterval(gameIntervalMole);
    clearInterval(gameIntervalPotato);
    clearInterval(timer);
}

function resetGame() {
    pauseGame();
    timeLeft = 30;
    timerEl.innerText = "00 : 30";
    score = 0;
    scoreEl.innerText = "Score: 0";
    gameOver = false;
    setGame();
    hideModal();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        } else {
            timeLeft--;
            timerEl.innerText = `00 : ${timeLeft.toString().padStart(2, "0")}`;
        }
    }, 1000);
}

function getRandomTile() {
    return Math.floor(Math.random() * 9).toString();
}

function setMole() {
    if (gameOver) return;

    if (currentMoleTile) currentMoleTile.innerHTML = ""; // Clear previous mole

    const num = getRandomTile();

    if (currentPotatoTile && currentPotatoTile.id === num) return; // Avoid overlap

    currentMoleTile = document.getElementById(num);
    const mole = document.createElement("img");
    mole.src = "./Images/mole2.png";
    mole.alt = "Mole";
    currentMoleTile.appendChild(mole);
}

function setPotato() {
    if (gameOver) return;

    if (currentPotatoTile) currentPotatoTile.innerHTML = ""; // Clear previous potato

    const num = getRandomTile();

    if (currentMoleTile && currentMoleTile.id === num) return; // Avoid overlap

    currentPotatoTile = document.getElementById(num);
    const potato = document.createElement("img");
    potato.src = "./Images/potato.png";
    potato.alt = "Potato";
    currentPotatoTile.appendChild(potato);
}

function selectTile() {
    if (gameOver) return;

    if (this === currentMoleTile) {
        score += 10;
        scoreEl.innerText = `Score: ${score}`;
        currentMoleTile.innerHTML = "";
        currentMoleTile = null;
    } else if (this === currentPotatoTile) {
        endGame();
    }
}

function endGame() {
    gameOver = true;
    pauseGame();
    showModal();
}

function showModal() {
    finalScoreEl.innerText = `Your Score: ${score}`;
    modal.classList.remove("hidden");
}

function hideModal() {
    modal.classList.add("hidden");
}

startBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", pauseGame);
restartBtn.addEventListener("click", resetGame);
closeModalBtn.addEventListener("click", hideModal);

window.onload = setGame;
