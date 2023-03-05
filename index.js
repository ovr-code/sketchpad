// Making a Color = Black as default
let color = 'black';

// Making a click = true as default to show the Current mode
let click = true;

// Making a function to populate the board
const populateBoard = (size) => {
  const board = document.getElementById('board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
  }
};

// Calling the function to populate the board of 16 x 16 by default.
populateBoard(16);

// Making a function to change the size of the board
const changeSize = (input) => {
  //  Making a condition to check if the input is between 2 and 100
  if (input >= 2 || input <= 100) {
    populateBoard(input);
  } else {
    // If the input is not between 2 and 100, it will alert the user
    alert('Please enter a number between 2 and 100');
  }
};

//  Making a function to change the color of the square
function colorSquare(e) {
  if (click) {
    // Color to Random using Math.random() method to Genrate a random number between 0 and 255 for each color
    if (color === 'random') {
      this.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )})`;
      // Color to Black or Gray as per the user choice
    } else {
      this.style.backgroundColor = color;
    }
  }
}
// Function to Change the Color
function changeColor(choice) {
  color = choice;
}

// Function to Reset the Board
function resetBoard() {
  let squares = document.querySelectorAll('div');
  squares.forEach((div) => (div.style.backgroundColor = 'white'));
}

// Function to Change the Mode to guide the User
document.querySelector('body').addEventListener('click', (e) => {
  // To work properly
  if (e.target.tagName != 'BUTTON') {
    click = !click;
    if (click) {
      document.querySelector('.mode').textContent = 'Mode: Coloring';
    } else {
      document.querySelector('.mode').textContent = 'Mode: Not Coloring';
    }
  }
});
