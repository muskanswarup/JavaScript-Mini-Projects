const board = document.getElementById("game-board");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");
const score = document.getElementById("score");
const highScoreText = document.getElementById("high-score");
const resetBtn = document.getElementById("reset-btn");
const pauseBtn = document.getElementById("pause-btn");

// Game variables:
let snake = [{ x: 10, y: 10 }];
const gridSize = 20;
let food = generateFood();
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let highScore = 0;

function draw() {
  // Clears previous drawings
  board.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
}

// Draw snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

// Create snake
function createGameElement(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

// Set the position of snake and food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

// Create food
function drawFood() {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}

// Generate food
function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
}

// draw();

// Move the snake
function move() {
  const head = { ...snake[0] };

  switch (direction) {
    case "up":
      head.y--;
      break;

    case "left":
      head.x--;
      break;

    case "right":
      head.x++;
      break;

    case "down":
      head.y++;
      break;
  }

  // Add new head at the first position of the snake
  snake.unshift(head);

  // If snake is at the same position as food, i.e. snake eats the food,
  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    increaseSpeed();
    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
      move();
      checkCollision();
      draw();
    }, gameSpeedDelay);
  } else {
    // remove the last part of snake to give the illusion of a snake moving
    snake.pop();
  }
}

// Start game function
function startGame(){
    gameStarted = true;

    instructionText.style.display = 'none';
    logo.style.display = 'none';

    gameInterval = setInterval(()=> {
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}

// Function to handle key presses
function handleKeyPress(event){
    if((!gameStarted && event.code === 'Space') || (!gameStarted && event.key === ' ')){
        startGame();
    }else{
        switch(event.key){
            case 'ArrowUp':
                direction = 'up';
                break;

            case 'ArrowDown':
                direction = 'down';
                break;
            
            case 'ArrowLeft':
                direction = 'left';
                break;

            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }
}

document.addEventListener('keydown' , handleKeyPress);

// Increasing the speed of game
function increaseSpeed(){
    console.log(gameSpeedDelay)
    if(gameSpeedDelay > 150){
        gameSpeedDelay -= 5;
    }else if(gameSpeedDelay > 100){
        gameSpeedDelay -= 3;
    }else if(gameSpeedDelay > 50){
        gameSpeedDelay -= 2;
    }else if(gameInterval > 25){
        gameSpeedDelay -= 1;
    }
}

function checkCollision(){
    const head = snake[0];

    if(head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize){
        resetGame();
    }

    for(let i = 1; i < snake.length; i++){
        if(head.x === snake[i].x && head.y === snake[i].y){
            resetGame();
        }
    }
}

function resetGame(){
    getHighScore();
    stopGame();
    snake = [{x : 10 , y : 10}];
    food = generateFood();
    clearInterval(gameInterval);
    gameSpeedDelay = 200;
    direction = 'right';
    updateScore();
}

function updateScore(){
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart('3' , '0');
}

function getHighScore(){
    let currentScore = snake.length - 1;

    if(currentScore > highScore){
        highScore = currentScore;
    }

    highScoreText.textContent = highScore.toString().padStart(3 , '0');
}

function stopGame(){
    clearInterval(gameInterval);
    gameStarted = false;
    instructionText.style.display = "block";
    logo.style.display = "block";
}