document.querySelector('.blocks').setAttribute("style","width:100%");

class Block {
    constructor(blockName, pos){
        this.block = document.querySelector(blockName);
        this.position = pos; //position = number of places above bottom of stack
        this.startPosition = pos;
        this.block.style.position = 'relative';
        // this.block.addEventListener('click', () => {
        //     this.moveUp();
        // })
    }
    updatePosition(){
        stackArray[this.position] = this;
        this.block.style.top = `${(this.startPosition - this.position) * 120}px`;
    }
    shift(dir){
        if(dir == 'r'){
            this.block.style.left = '150px';
        }
        if(dir == 'l'){
            this.block.style.left = 'initial';
        }
    }
    moveDown(){
        this.position--;
        this.updatePosition();
    }
    moveUp(){
        this.shift('r');
        for(let i = this.position + 1; i <= 4; i++){
            stackArray.find((obj)=>obj.position === i).moveDown();
        }
        this.position = 4;
        this.updatePosition();
        this.shift('l');
    }
}

const red = new Block('.block--red', 4);
const blue = new Block('.block--blue', 3);
const green = new Block('.block--green', 2);
const pink = new Block('.block--pink', 1);
const gray = new Block('.block--gray', 0);

const stackArray = [gray, pink, green, blue, red];

// const red = document.querySelector('.block--red');
// const blue = document.querySelector('.block--blue');
// const green = document.querySelector('.block--green');
// const pink = document.querySelector('.block--pink');
// const gray = document.querySelector('.block--gray');

// const blocks = [red, blue, green, pink, gray];
// let place = [4, 3, 2, 1, 0];
// let left = [0, 0, 0, 0, 0];


// function shift(ind, dir){ //moves block with absolute index <ind> to the right or left (per <dir>)
//     if (dir == 'right'){
//         blocks[place.indexOf(ind)].style.left = `${left[ind] + 150}px`;
//         left[ind] += 150;
//     }
//     if (dir == 'left'){
//         blocks[place.indexOf(ind)].style.left = 'initial';
//         left[ind] = 0;
//     }
// }

// function moveDown(ind){ //moves block <ind> spaces from bottom down one space
//     place[ind]--;
//     blocks[ind].style.top = `${(4 - ind - place[ind])*120}px`;
// }

// function moveUp(i){ // moves up the block <i> spaces from bottom, calles moveDown on all blocks above !!!FIX INDICES
//     shift(i, 'right');
//     for(let a = i+1; a <= 4; a++){
//         window.setTimeout(moveDown(place.indexOf(a)), 500);
//     }
//     place[place.indexOf[i]] = 0;
//     console.log(i);
//     blocks[place.indexOf(i)].style.top = `${((4 - i - place.indexOf(i)) * 120)}px`;
//     window.setTimeout(shift(i, 'left'), 500);
// }

// blocks.forEach((item, index) => {
//     item.style.position = 'relative';
//     item.addEventListener('click', () => {
//         moveUp(place[index]); // calls moveUp using current position of clicked block
//     });
// });




