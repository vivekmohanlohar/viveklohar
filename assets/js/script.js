// Program to change navigation bar background on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Loading animation for the page
var loaderImg = document.querySelector(".img");
var loader = document.querySelector(".loader");

window.addEventListener('load', hides);
function hides() {
  loader.classList.add("hide");
  loaderImg.classList.add("ImgNone");
}

// Navigation menu Button toggle for small devices
const Menu = document.querySelector(".nav__navigation");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("menu-active");
  Menu.classList.toggle("active");
});

// Program to switch the content when button is clicked
document.addEventListener("DOMContentLoaded", function() {
  const menuButtons = document.querySelectorAll(".menu-button");
  const companies = document.querySelectorAll(".tab-content");

  menuButtons.forEach((button, index) => {
    button.addEventListener("click", function(event) {
      event.preventDefault();

      // Remove "active" class from all buttons
      menuButtons.forEach((btn) => {
        btn.classList.remove("spa--active");
      });

      // Add "active" class to the clicked button
      this.classList.add("spa--active");

      // Remove "active" class from all companies
      companies.forEach((company) => {
        company.classList.remove("spa--active");
      });

      // Add "active" class to the target company
      companies[index].classList.add("spa--active");
    });
  });
});

// Program to crack a Joke When button is clicked
const jokes = [
  "A priest, an imam, and a rabbit walk into a clinic to donate blood. The rabbit turns to the nurse and says, 'I think I'm a Type-O'.",
  "Give a man a fish and he will eat for a day. Teach a man to fish and he will sit in a boat and drink beer all day.",
  "What do you call a blind dinosaur? A do-you-think-he-saw-us.",
  "What did one hat say to the other? You wait here — I'll go on ahead!.",
  // Add more jokes as needed
];

function generateJoke() {
  const jokeElement = document.getElementById("joke");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeElement.textContent = jokes[randomIndex];
}

const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down, hide the navigation
    nav.classList.add('hidden');
    nav.classList.remove('visible');
  } else {
    // Scrolling up, show the navigation
    nav.classList.add('visible');
    nav.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});

// Tic Tac Toe Game
const board = document.getElementById('board');
const message = document.getElementById('message');
const popup = document.getElementById('popup');
const winnerName = document.getElementById('winnerName');
const cells = document.querySelectorAll('.cell');
const winnerIcon = document.getElementById('winnerIcon');
let currentPlayer = '😄';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

board.addEventListener('click', handleCellClick);

function handleCellClick(event) {
  const clickedCell = event.target;
  const cellIndex = clickedCell.dataset.index;
  playSound('o_turn');

  if (gameBoard[cellIndex] === '' && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    playSound(currentPlayer);

    if (checkWinner()) {
      winnerIcon.innerHTML = `<img src="./assets/game-images/raju.gif" alt="raju">`;
      winnerName.textContent = `Player ${currentPlayer} wins!`;
      popup.style.display = 'flex';
      playSound('win');
      gameActive = false;
    } else if (gameBoard.every(cell => cell !== '')) {
      winnerIcon.innerHTML = '<img src="./assets/game-images/shyam.gif" alt="shyam">'
      winnerName.textContent = "It's a draw!";
      popup.style.display = 'flex';
      gameActive = false;
      playSound('draw');
    } else {
      currentPlayer = currentPlayer === '😄' ? '😛' : '😄';
      message.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function playSound(type) {
  const sound = new Audio(`./assets/audio/${type}_sound.mp3`);
  sound.play();
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = '😄';
  gameActive = true;
  message.textContent = 'Player 😄\'s turn';

  cells.forEach(cell => {
    cell.textContent = '';
  });

  popup.style.display = 'none';
}
