document.querySelector('.blocks').setAttribute("style","width:100%");

const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

const blocks = [red, blue, green, pink, gray];
let place = [4, 3, 2, 1, 0];
let left = [0, 0, 0, 0, 0];


function shift(ind, dir){
    if (dir == 'right'){
        blocks[ind].style.left = `${left[ind] + 150}px`;
        left[ind] += 150;
        console.log(left[ind]);
    }
    if (dir == 'left'){
        blocks[ind].style.left = 'initial';
        left[ind] = 0;
    }
}

function moveDown(ind){
    place[ind]--;
    blocks[ind].style.top = `${(4 - place[ind]) * 120}px`;
}

function moveUp(i){
    shift(i, 'right');
    for(let a = i+1; a <= 4; i++){
        window.setTimeout(moveDown(place.indexOf(a)), 500);
    }
    place[i] = 0;
    blocks[i].style.top = `${-(index * 120)}px`;
    window.setTimeout(shift(i, 'left'), 500);
}

blocks.forEach((item, index) => {
    item.style.position = 'relative';
    item.addEventListener('click', () => {
        shift(index, 'right');
        for(let a = index+1; a <= 4; a++){
            window.setTimeout((a) =>{
                
            }, 500);
        }
    });
});




