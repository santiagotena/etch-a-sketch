let color = 'black';
let size = 16;
let click = true;
function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}
function changeSize(input) {
    let error = document.querySelector('.error');
    if (input >= 2 && input <= 100) {
        error.style.display = 'none';
        populateBoard(input);
        size = input;
    }
    else {
        error.style.display = 'flex';
        console.log('Invalid number of squares');
    }
}
function colorSquare() {
    if (click) {
        if (color === 'random')
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        else
            this.style.backgroundColor = color;
    }
}
function changeColor(choice) {
    color = choice;
}
function resetBoard(size) {
    populateBoard(size);
}
document.querySelector('body').addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName != 'BUTTON' && target.tagName != 'INPUT') {
        click = !click;
        if (click)
            document.querySelector('.mode').textContent = 'Mode: Coloring';
        else
            document.querySelector('.mode').textContent = 'Mode: Not Coloring';
    }
});
populateBoard(size);
