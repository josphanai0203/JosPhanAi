const $ = document.querySelector.bind(document);

const boardBox = $(".broadGame");
const ballBox = $(".ball");
const barBox = $(".barGame");
const btn = $(".btn");

let boardGame = new Board(500, 500);
let ballGame = new Ball(0, 50,0, 0, 1);
let gameBar = new Bar(100, 0);
let velocityX = 1;
let velocityY = 1;
let gameOver = false;
//Create  BoardGame object
function Board(width, height) {
  this.width = width;
  this.height = height;
}
//Create  BallGame object
function Ball(x, y,hit, conner, rate) {
  this.x = x;
  this.y = y;
  this.hit = hit;
  this.lever = 1;
  this.conner = conner;
  this.rate = rate;
  //remove function from position X and Y
  this.remove = function () {
    this.x += velocityX;
    this.y += velocityY;
  };
  this.changeDirectory = function () {
    //handle ball when ball touch border left or border right
    if (this.x < 0 || this.x > boardGame.width - 20) {
      velocityX = -velocityX;
    }
    //handle ball when ball touch border top
    if (this.y < 0) {
      velocityY = -velocityY;
    }
    //handle ball when ball touch game bar
    if (this.x >= gameBar.x - 20 && this.x <= gameBar.x + 100) {
      if (this.y >= 360 && this.y < 365) {
        velocityY = -velocityY;
        this.hit += 1;
        if(!(this.hit%3)){
          this.velocity();
        }
      }
    }
    drawBall();
  };
  //increase velocity
  this.velocity = function() {
      velocityX = velocityX>0?velocityX+=0.5:velocityX-=0.5;
      velocityY = velocityY>0?velocityY+=0.5:velocityY-=0.5;
      this.lever += 1;
  }
  // check game over
  this.isGameOver = function (idSetInterval) {
    if (this.y > 480) {
      boardBox.style.cursor = "auto";
      clearInterval(idSetInterval);
      alert(`Game Over! \n ${this.lever}`);
      return true;
    }
    return false;
  };
}
//Create  GameBar object
function Bar(width, x) {
  this.width = width;
  this.x = x;
  this.turnLeft = function () {
    this.x -= 15;
    if (this.x >= 0 && this.x <= 400) {
      drawGameBar();
    } else if (this.x < 0) {
      this.x = 0;
      drawGameBar();
    }
  };
  this.turnRight = function () {
    this.x += 15;
    if (this.x >= 0 && this.x <= 400) {
      drawGameBar();
    }
  };
}
//create position X of ball random when game start
function positionBallRandomX() {
  ballGame.x = Math.floor(Math.random() * 400 + 10);
  drawBall();
}
//draw ball from position X,Y
function drawBall() {
  ballBox.style.left = `${ballGame.x}px`;
  ballBox.style.top = `${ballGame.y}px`;
}
//draw game bar form width and position X
function drawGameBar() {
  barBox.style.left = `${gameBar.x}px`;
  barBox.style.width = `${gameBar.width}px`;
}
//create board game
function createBoardGame() {
  boardBox.style.width = `${boardGame.width}px`;
  boardBox.style.height = `${boardGame.height}px`;
}
//Reset game when game over
function resetGame() {
  btn.classList.add("btn");
  btn.innerText = "Play";
  btn.style.opacity = "1";
  ballGame.y = 50;
  velocityX =1;
  velocityY =1;
  positionBallRandomX();
}
//handle all events in game
function handleEventGame() {
  //event mouse move in board game and game bar move
  window.onmousemove = function (e) {
    if (e.target == boardBox && e.layerX <= 400) {
      gameBar.x = e.layerX;
      drawGameBar(gameBar);
    }
  };
  //mouse move in bar
  barBox.onmousemove = function (e) {
    if (gameBar.x + e.layerX <= 400) {
      gameBar.x += e.layerX;
      drawGameBar(gameBar);
    }
  };

  //turn left and right
  window.onkeydown = function (e) {
    if (e.keyCode == 37) {
      gameBar.turnLeft();
    } else if (e.keyCode == 39) {
      gameBar.turnRight();
    }
  };

  //click button play
  btn.onclick = function (e) {
    btn.classList.remove("btn");
    btn.innerText = "";
    btn.style.opacity = "0";
    boardBox.style.cursor = "none";
    startGame();
  };
}

//start game when press play button
function startGame() {
  let id = setInterval(() => {
    ballGame.changeDirectory();
    ballGame.remove();
    let isGameOvered = ballGame.isGameOver(id);
    if (isGameOvered) {
      resetGame();
    }
  }, 10);
}
//load game
function onloadGame() {
  createBoardGame();
  positionBallRandomX();
  drawGameBar();
  handleEventGame();
}

onloadGame();

var time = new Date().getTime();
console.log(time)
min = time /60;
hours = min /60;
console.log(hours,min,time%60)