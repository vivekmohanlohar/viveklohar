// Program to change navigation bar background on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Program to change navigation bar background on scroll
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
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

// Close menu when clicked outside of it or when the page is scrolled
document.addEventListener('click', (event) => {
  const target = event.target;
  const isMenuBtn = target.closest('.menuBtn');
  const isMenu = target.closest('.nav__navigation');

  if (!isMenuBtn && !isMenu) {
    menuBtn.classList.remove("menu-active");
    Menu.classList.remove("active");
  }
});

document.addEventListener('scroll', () => {
  menuBtn.classList.remove("menu-active");
  Menu.classList.remove("active");
});

// Program to switch the content when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.querySelectorAll(".menu-button");
  const companies = document.querySelectorAll(".tab-content");

  menuButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
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

// Education section timeline trigger on scroll
const eduBox = document.querySelector('.edu-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      eduBox.classList.add('animate'); 
    } else { 
      eduBox.classList.remove('animate'); // Remove the class when the element leaves the viewport
    }
  });
});

observer.observe(eduBox);

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

// Feedback section starts here

document.addEventListener('DOMContentLoaded', () => {
  const emojiButtons = document.querySelectorAll('.emoji-btn');
  const feedbackInput = document.querySelector('.feedback-input');
  const emojiFeedbackInput = document.getElementById('emoji-feedback');
  const emojiExpressions = document.querySelectorAll('.emoji-expression');
  const form = document.querySelector('.feedback-input');
  const feedbackPopup = document.querySelector('.feedback-popup');
  const closePopupBtn = document.querySelector('.close-popup-btn');
  const errorPopup = document.querySelector('.error-popup'); // Error popup

  // Emoji button click event
  emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Set selected emoji value to hidden input
      const selectedValue = button.getAttribute('data-value');
      emojiFeedbackInput.value = selectedValue;

      // Highlight selected emoji button
      emojiButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Hide all emoji expressions and reset opacity
      emojiExpressions.forEach(expression => {
        expression.style.display = 'none';
        expression.style.opacity = 0;
      });

      // Show the clicked emoji's expression smoothly
      const expression = button.querySelector('.emoji-expression');
      expression.style.display = 'inline';
      setTimeout(() => {
        expression.style.opacity = 1;
      }, 10); // Small delay to trigger opacity transition

      // Show feedback input with smooth fade-in effect
      feedbackInput.style.display = 'block';
      setTimeout(() => {
        feedbackInput.style.opacity = 1;
      }, 10); // Small delay to trigger opacity transition
    });
  });

  // Form submission handling
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const feedbackText = document.getElementById('feedback').value.trim();
    const emoji = emojiFeedbackInput.value;

    if (!emoji || !feedbackText) {
      alert('Please write a feedback');
      return;
    }

    // Construct the FormData object to send to Formspree
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });

      // Check if the response from Formspree is OK
      if (response.ok) {
        // Form submission successful, show the feedback success popup
        feedbackPopup.style.display = 'flex';
      } else {
        // If response status is not OK, show the error popup
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show the error popup if there is an issue with submission
      errorPopup.style.display = 'flex';
    }
  });

  // Close the success popup
  closePopupBtn.addEventListener('click', () => {
    feedbackPopup.style.display = 'none';
  });

  // Close the error popup
  const closeErrorPopupBtn = document.querySelector('.close-error-popup-btn');
  closeErrorPopupBtn.addEventListener('click', () => {
    errorPopup.style.display = 'none';
  });
});