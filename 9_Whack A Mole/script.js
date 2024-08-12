let currentMoleTile;
let currentPotatoTile;
let score = 0;
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
    // Set yp 9X9 grid.
    for(let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click" , selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 2000);
    setInterval(setPotato, 3000);
}


function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){

    if(gameOver)    return;

    if(currentMoleTile){
        currentMoleTile.innerHTML ="";
    }

    let mole = document.createElement("img");
    mole.src = "./Images/mole2.png";

    let num = getRandomTile();

   if(currentPotatoTile && (currentPotatoTile.id) == num){
    return;
   }

    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPotato(){

    if(gameOver) return;

    if(currentPotatoTile){
        currentPotatoTile.innerHTML = "";
    }

    let potato = document.createElement("img");
    potato.src = "./Images/potato.png";

    let num = getRandomTile();

    if(currentMoleTile && currentMoleTile.id == num){
        return;
    }

    currentPotatoTile = document.getElementById(num);
    currentPotatoTile.appendChild(potato);
}

function selectTile(){

    if(gameOver) return;

    if(this == currentMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }else if(this == currentPotatoTile){
        document.getElementById("score").innerText = "GAME OVER! " + score.toString();
        gameOver = true;
    }
}