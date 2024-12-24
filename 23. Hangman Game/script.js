import { wordList } from "./wordList.js";

// DOM elements
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const restartBtn = document.getElementById("restart-btn");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const timerDisplay = document.getElementById("timer-display");
const wordDisplay = document.getElementById("word-display");
const hint = document.getElementById("hint-text");
const guesses = document.getElementById("guesses-text");
const keyboard = document.getElementById("keyboard");
const closeModalBtn = document.getElementById("close-modal-btn");
const finalScoreEl = document.getElementById("final-score");
const modal = document.getElementById("game-over-modal");

// Variables
let incorrectGuessCount = 1;
let timerInterval;
let totalGuessLimit = 6;
let gameTimeLimit = 30;
let timeRemaining = gameTimeLimit;
let gameOver = false;

const randomIndex = Math.floor(Math.random() * wordList.length);
const correctWord = wordList[randomIndex].word.toUpperCase();
wordDisplay.innerHTML = "";

// Generate keyboard letters
function generateBtns() {
  for (let i = 65; i <= 90; i++) {
    const btn = document.createElement("button");
    btn.innerText = String.fromCharCode(i);

    btn.classList.add("keys");

    btn.onclick = () => {
      if (gameOver) return;

      const clickedLetter = btn.innerText;

      if (correctWord.includes(clickedLetter)) {
        revealLetter(clickedLetter);
      } else {
        guesses.innerText = `${incorrectGuessCount}/${totalGuessLimit}`;
        incorrectGuessCount++;
        drawNextPart();
        checkGameOver();
      }

      btn.disabled = true;
      btn.style.backgroundColor = "#33032f";
    };

    keyboard.appendChild(btn);
  }
}
generateBtns();

// Start Game
startBtn.addEventListener("click", () => {
  if (gameOver) return;
  startTimer();
  setupHangmanBase();
  generateQuestions();
});

// Pause Timer
pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
});

// Restart Game
restartBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  resetCanvas();
  resetGame();
});

// Timer Functions
function startTimer() {
  timeRemaining = gameTimeLimit;
  updateTimer(timeRemaining);

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      gameOver = true;
      handleGameOver("Time is up!");
    }
  }, 1000);
}

function updateTimer(time) {
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  timerDisplay.innerText = `${String(mins).padStart(2, "0")} : ${String(
    secs
  ).padStart(2, "0")}`;
}

// Generate Word and Hint
function generateQuestions() {
  for (const i of correctWord) {
    const letter = document.createElement("li");
    letter.classList.add("letter");
    wordDisplay.appendChild(letter);
  }

  hint.innerText = wordList[randomIndex].hint;
}

function revealLetter(clickedLetter) {
  const letters = document.querySelectorAll(".letter");

  correctWord.split("").forEach((char, index) => {
    if (char === clickedLetter) {
      letters[index].innerText = clickedLetter;
    }
  });

  checkWin();
}

// Check Game Over
function checkGameOver() {
  if (incorrectGuessCount > totalGuessLimit) {
    gameOver = true;
    handleGameOver("Game Over! You lost.");
  }
}

// Check Win
function checkWin() {
  const letters = document.querySelectorAll(".letter");
  const currentWord = Array.from(letters)
    .map((letter) => letter.innerText)
    .join("");

  if (currentWord === correctWord) {
    gameOver = true;
    handleGameOver("Congratulations! You win!");
  }
}

// Handle Game Over
function handleGameOver(message) {
  clearInterval(timerInterval);
  showModal(message);
  console.log(message);
}

// Draw Hangman Parts
context.lineWidth = 2;
context.strokeStyle = "#000";

const drawBase = () => {
  context.moveTo(10, 150);
  context.lineTo(140, 150);
  context.stroke();
};

const drawPole = () => {
  context.moveTo(30, 10);
  context.lineTo(30, 150);
  context.stroke();
};

const drawBeam = () => {
  context.moveTo(30, 10);
  context.lineTo(90, 10);
  context.stroke();
};

const drawRope = () => {
  context.moveTo(90, 10);
  context.lineTo(90, 30);
  context.stroke();
};

const drawHead = () => {
  context.beginPath();
  context.arc(90, 40, 10, 0, Math.PI * 2, true);
  context.stroke();
};

const drawTorso = () => {
  context.moveTo(90, 50);
  context.lineTo(90, 90);
  context.stroke();
};

const drawLeftArm = () => {
  context.moveTo(90, 60);
  context.lineTo(70, 80);
  context.stroke();
};

const drawRightArm = () => {
  context.moveTo(90, 60);
  context.lineTo(110, 80);
  context.stroke();
};

const drawLeftLeg = () => {
  context.moveTo(90, 90);
  context.lineTo(70, 120);
  context.stroke();
};

const drawRightLeg = () => {
  context.moveTo(90, 90);
  context.lineTo(110, 120);
  context.stroke();
};

const hangmanParts = [
  drawHead,
  drawTorso,
  drawLeftArm,
  drawRightArm,
  drawLeftLeg,
  drawRightLeg,
];

let currentPartIndex = 0;

function drawNextPart() {
  if (currentPartIndex < hangmanParts.length) {
    hangmanParts[currentPartIndex]();
    currentPartIndex++;
  } else {
    console.log("Hangman complete!");
  }
}

function setupHangmanBase() {
  drawBase();
  drawPole();
  drawBeam();
  drawRope();
}

function resetCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  currentPartIndex = 0;
}

// Modal Functions
function showModal(message) {
  finalScoreEl.innerText = message;
  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

closeModalBtn.addEventListener("click", hideModal);

// Reset Game
function resetGame() {
  incorrectGuessCount = 1;
  gameOver = false;
  wordDisplay.innerHTML = "";
  guesses.innerText = `0/${totalGuessLimit}`;
  keyboard.innerHTML = "";
  generateBtns();
  generateQuestions();
  startTimer();
}
