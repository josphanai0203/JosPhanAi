const $ = document.querySelector.bind(document);

const boardBox = $(".broadGame");
const ballBox = $(".ball");
const barBox = $(".gameBar");

let boardGame = new Board(500, 500);
let ballGame = new Ball(0, 50, 0, 2);
let gameBar = new Bar(100, 0);
let velocityX = 1;
let velocityY = 1;
let speedIncrease = 0.5;
//Create  BoardGame object
function Board(width, height) {
  this.width = width;
  this.height = height;
}
//Create  BallGame object
function Ball(x, y, conner, rate) {
  this.x = x;
  this.y = y;
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
    if (this.x >= gameBar.x && this.x <= gameBar.x + 80) {
      if (this.y >= 360 && this.y < 380) {
        velocityY = -velocityY;
      }
    }

    drawBall();
  };
}
//Create  GameBar object
function Bar(width, x) {
  this.width = width;
  this.x = x;
  this.turnLeft = function () {
    this.x -= 10;
    if (this.x >= 0 && this.x <= 400) {
      drawGameBar();
    } else if (this.x < 0) {
      this.x = 0;
      drawGameBar();
    }
  };
  this.turnRight = function () {
    this.x += 10;
    if (this.x >= 0 && this.x <= 400) {
      drawGameBar();
    }
  };
}
//create position X of ball random when game start
function positionBallRandomX() {
  ballGame.x = Math.floor(Math.random() * 400 + 10);
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
function CreateBtnPlay(){
    boardBox.innerHTML = `
    <div class="ball"></div>
    <button class="btn">Play</button>
    <div class="barGame"></div>
    `;
}
//start game when press play button
function startGame() {
  let id = setInterval(() => {
    gameBar.idGame = id;
    ballGame.changeDirectory();
    ballGame.remove();
    if (ballGame.y > 480) {
      alert("Game Over!");
      clearInterval(id);
    }
  }, 10);
}
//load game
function onloadGame() {
  createBoardGame();
  positionBallRandomX();
  drawBall();
  drawGameBar();
  CreateBtnPlay();
  startGame();
}
onloadGame();
