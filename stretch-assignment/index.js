const lag = 5; //ms per pixel for animation

class Block {
  constructor(blockName, pos) {
    this.block = document.querySelector(blockName);
    this.position = pos; //position = number of places above bottom of stack
    this.startPosition = pos;
    this.block.style.position = "relative";
    this.block.style.top = this.block.style.left = "0px";
    this.clickHeld = false;
    this.block.addEventListener('mousedown', () => {
      let x = this.getXPos();
      console.log('Ignition!');
      let moving = setInterval(() => {
        let count =
        x ++;
        count++;
        this.block.style.left = x + "px";
        if (count * lag >= 250){
          this.clickHeld = true;
          console.log('held');
        }
      },lag);
      this.block.addEventListener('mouseleave', () => {
        clearInterval(moving);
        if (!this.clickHeld){
          this.moveUp();
          console.log(this, this.clickHeld);
        } else {
          this.clickHeld = false;
        }
        this.returnLeft();
      });
      this.block.addEventListener('mouseup', () => {
        clearInterval(moving);
        if (!this.clickHeld){
          this.moveUp();
        } else {
          this.clickHeld = false;
        }
        this.returnLeft();
      });
    });
  }
  getXPos() {
    return Number(this.block.style.left.slice(0, -2));
  }
  getYPos() {
    return Number(this.block.style.top.slice(0, -2));
  }
  slideTo(toY = this.getYPos()) {
    let y = this.getYPos();
    let dY = setInterval(() => {
      if (y == toY) {
        clearInterval(dY);
      } else {
        y += Math.sign(toY - y);
        this.block.style.top = y + "px";
      }
    }, lag);
  }
  updatePosition() {
    stackArray[this.position] = this;
    this.slideTo(((this.startPosition - this.position) * 120));
  }
  moveDown() {
    this.position--;
    this.updatePosition();
  }
  moveUp() {
    for (let i = this.position + 1; i <= 4; i++) {
      stackArray.find(obj => obj.position == i).moveDown();
    }
    this.position = 4;
    this.updatePosition();
  }
  returnLeft() {
    let x = this.getXPos();
    this.block.addEventListener('mousedown', () => {
      clearInterval(returning);
    })
    let returning = setInterval(() => {
      if (x > 0){
        x--;
        this.block.style.left = x + "px";
      } else {
        clearInterval(returning);
      }
    },lag);
  }
}

const red = new Block(".block--red", 4);
const blue = new Block(".block--blue", 3);
const green = new Block(".block--green", 2);
const pink = new Block(".block--pink", 1);
const gray = new Block(".block--gray", 0);

const stackArray = [gray, pink, green, blue, red];
