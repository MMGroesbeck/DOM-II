const lag = 5; //ms per pixel for animation

class Block {
  constructor(blockName, pos) {
    this.block = document.querySelector(blockName);
    this.position = pos; //position = number of places above bottom of stack
    this.startPosition = pos;
    this.block.style.position = "relative";
    this.block.style.top = this.block.style.left = "0px";
    // this.block.addEventListener('click', () => {
    //     this.moveUp();
    // })
  }
  getXPos() {
    return Number(this.block.style.left.slice(0, -2));
  }
  getYPos() {
    return Number(this.block.style.top.slice(0, -2));
  }
  slideTo(toX = this.getXPos(), toY = this.getYPos()) {
    let x = this.getXPos();
    let y = this.getYPos();
    console.log(this.startPosition, toX, toY);
    let dY = setInterval(() => {
      if (y == toY) {
        clearInterval(dY);
      } else {
        y += Math.sign(toY - y);
        this.block.style.top = y + "px";
      }
    }, lag);
    let dX = setInterval(() => {
      if (x == toX) {
        clearInterval(dX);
      } else {
        x += Math.sign(toX - x);
        this.block.style.left = x + "px";
      }
    }, lag);
  }
  updatePosition() {
    stackArray[this.position] = this;
    console.log(this.startPosition,this.position);
    this.slideTo(0,((this.startPosition - this.position) * 120));
  }
  // shift(dir) {
  //   if (dir == "r") {
  //     this.slideTo(150, undefined);
  //     console.log('Shifting right');
  //   }
  //   if (dir == "l") {
  //     this.slideTo(0, undefined);
  //   }
  // }
  moveDown() {
    this.position--;
    this.updatePosition();
  }
  moveUp() {
    // this.shift("r");
    for (let i = this.position + 1; i <= 4; i++) {
      stackArray.find(obj => obj.position == i).moveDown();
    }
    this.position = 4;
    this.updatePosition();
  }
}

const red = new Block(".block--red", 4);
const blue = new Block(".block--blue", 3);
const green = new Block(".block--green", 2);
const pink = new Block(".block--pink", 1);
const gray = new Block(".block--gray", 0);

const stackArray = [gray, pink, green, blue, red];
