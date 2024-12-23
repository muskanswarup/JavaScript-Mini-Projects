import { wordList } from "./wordList.js";

const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const timerDisplay = document.getElementById("timer-display");
const wordDisplay = document.getElementById("word-display");
const hint = document.getElementById("hint-text");
const guesses = document.getElementById("guesses-text");
const keyboard = document.getElementById("keyboard");

let incorrectGuessCount = 1;
let timerInterval;
let totalGuessLimit = 6;
let gameTimeLimit = 20;
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
      console.log(clickedLetter, "clicked");

      if (correctWord.includes(clickedLetter)) {
        console.log(clickedLetter, " present");
        revealLetter(clickedLetter);
      } else {
        console.log(clickedLetter, "absent");
        guesses.innerText = `${incorrectGuessCount}/${totalGuessLimit}`;
        incorrectGuessCount += 1;

        checkGameOver();
      }

      btn.disabled = true;
      btn.style.backgroundColor = "#33032f";
    };

    keyboard.appendChild(btn);
  }
}
generateBtns();

startBtn.addEventListener("click", startGame);

function startGame() {
  if (gameOver) {
    return;
  }
  startTimer();
  generateQuestions();

  revealLetter();
}

function startTimer() {
  timeRemaining = gameTimeLimit;

  updateTimer(timeRemaining);

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      gameOver = true;
      console.log("Time is up");
      handleGameOver();
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

function generateQuestions() {
  for (const i of correctWord) {
    const letter = document.createElement("li");
    letter.classList.add("letter");
    wordDisplay.appendChild(letter);
  }

  hint.innerText = wordList[randomIndex].hint;
  console.log("random word ", correctWord);
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

function checkGameOver() {
  if (incorrectGuessCount > totalGuessLimit) {
    gameOver = true;
    console.log("GAME OVER");
    handleGameOver();
  }
}

function checkWin() {
  const letters = document.querySelectorAll(".letter");
  const currentWord = Array.from(letters)
    .map((letter) => letter.innerText)
    .join("");

  if (currentWord === correctWord) {
    gameOver = true;
    console.log("You WIN");
    handleGameOver();
  }
}

function handleGameOver() {
  clearInterval(timerInterval);
  console.log("GAME HAS ENDED");
}
