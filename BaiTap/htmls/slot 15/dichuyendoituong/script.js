/**
 * Created by nhatnk on 4/26/17.
 */
const game = document.getElementById("game");

class Hero{
  constructor(image, top, left, size, speed){

    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
  }
  getHeroElement() {
    return (
      '<img width="' +
      this.size +
      '"' +
      ' height="' +
      this.size +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  };

  moveRight() {
    this.left += this.speed;
  };
  moveLeft() {
    this.left -= this.speed;
  };
  moveUp() {
    this.top -= this.speed;
  };
  moveDown() {
    this.top += this.speed;
  };
  render() {
    game.innerHTML = this.getHeroElement();
  };
}

var hero = new Hero("q22.png", 20, 30, 200, 40);

function start() {
  hero.render();
  window.onkeydown = (e) => {
    console.log(e.keyCode)
    if (e.keyCode == 37) {
      hero.moveLeft();
      hero.render();
    } else if (e.keyCode == 38) {
      hero.moveUp();
      hero.render();
    } else if (e.keyCode == 39) {
      hero.moveRight();
      hero.render();
    } else if (e.keyCode == 40) {
      hero.moveDown();
      hero.render();
    }
  };
}

start();
