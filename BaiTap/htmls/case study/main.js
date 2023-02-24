const $ =document.querySelector.bind(document);

const boardBox = $('.broadGame');
const ballBox = $('.ball');
const barBox = $('.barGame');

let board = new BoardGame(500,500);
let ballGame = new Ball(0,0,0,1);
let barGame = new Bar(100,0);

function BoardGame(width, height){
    this.width = width;
    this.height = height;
}
function Ball(x,y,conner,rate){
    this.x = x;
    this.y = y;
    this.conner = conner;
    this.rate = rate;
    this.remove = function(){

    }
    this.changeDirectory = function(){};
}
function Bar(width,x){
    this.width = width;
    this.x = x;
    this.turnLeft = function(){};
    this.turnRight = function(){};
}
function drawBall(){
    ballBox.style.left = `${ballGame.x}px`;
    ballBox.style.top = `${ballGame.y}px`;
    ballBox.style.width = `20px`;
    ballBox.style.height = `20px`;
}
function drawBar(){
    barBox.style.left = `${barGame.x}px`;
    barBox.style.width = `${barGame.width}px`;
}
function onloadGame(){
    boardBox.style.width = `${board.width}px`;
    boardBox.style.height = `${board.height}px`;
    drawBall()
    drawBar()
}
onloadGame();
boardBox.onmousemove = function(e){
    if(e.target != barBox){
        if (e.layerX>=0&&e.layerX<=400) {
            barGame.x = e.layerX;
            
        }

    }else if(e.target == barBox){
        if (barGame.x>=0&& (barGame.x+ e.offsetX)<=400) {
            barGame.x =barGame.x+ e.offsetX;
            
        }

    }
    drawBar()
}

console.log([barBox])