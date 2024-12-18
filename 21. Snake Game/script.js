const board = document.getElementById("game-board");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");

// Game variables:
let snake = [{ x: 10, y: 10 }];
const gridSize = 20;
let food = generateFood();
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

function draw() {
  // Clears previous drawings
  board.innerHTML = "";
  drawSnake();
  drawFood();
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
    clearInterval();

    gameInterval = setInterval(() => {
      move();
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
        // checkCollision();
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