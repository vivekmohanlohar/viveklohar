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

//Hear Pheri Game Seciton starts here
const board = document.getElementById('board');
const cells = [];
let currentPlayer = 'Raju';
let gameOver = false;
let firstClick = true;

// Create cells and add click event
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', () => makeMove(i));
  board.appendChild(cell);
  cells.push(cell);
}

// Winning combinations
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

// Game state
const gameBoard = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
  if (gameBoard[index] === '' && !gameOver) {
    playClickSound();

    gameBoard[index] = currentPlayer === 'Raju' ? '<img src="./assets/game-assets/raju.jpg" alt="Raju">' : '<img src="./assets/game-assets/shyam.jpg" alt="Shyam">';
    cells[index].innerHTML = gameBoard[index];

    if (firstClick) {
      firstClick = false;
      const buttons = document.getElementById('buttons');
      buttons.style.display = 'flex';
    }

    if (checkWinner()) {
      playWinSound();
      displayResult();
    } else if (!gameBoard.includes('')) {
      playDrawSound();
      displayResult('dono ke dono bekar <br> kya gamer banoge re tum');
    } else {
      currentPlayer = currentPlayer === 'Raju' ? 'Shyam' : 'Raju';
    }
  }
}

function checkWinner() {
  for (const combo of winCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function displayResult(message = '') {
  const resultText = document.getElementById('result-text');
  resultText.innerHTML = message !== '' ? message : `${currentPlayer} Jeet Gaya re Baba`;
  const resultPopup = document.getElementById('result-popup');
  resultPopup.style.display = 'block';
  gameOver = true;
}

function resetGame() {
  const resultPopup = document.getElementById('result-popup');
  resultPopup.style.display = 'none';
  const buttons = document.getElementById('buttons');
  buttons.style.display = 'none';
  currentPlayer = 'Raju';
  gameBoard.fill('');
  cells.forEach(cell => cell.innerHTML = '');
  gameOver = false;
  firstClick = true;
}

function playClickSound() {
  const rajuSound = document.getElementById('rajuSound');
  const shyamSound = document.getElementById('shyamSound');
  currentPlayer === 'Raju' ? rajuSound.play() : shyamSound.play();
}

function playWinSound() {
  const winSound = document.getElementById('winSound');
  winSound.play();
}

function playDrawSound() {
  const drawSound = document.getElementById('drawSound');
  drawSound.play();
}

// Javascript for the time greeting starts here
document.addEventListener("DOMContentLoaded", function () {
  let startTime = Date.now();
  let messageBox = document.getElementById("visitor-message");
  let messageText = document.getElementById("visitor-time-message");

  function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    messageText.innerHTML = `Thank you for spending your <span class="highlight">${minutes} min ${seconds} sec</span> on this site. I truly appreciate your time!🫡`;
  }

  setInterval(updateTimer, 1000); // Update every second

  // Show the message smoothly after 10 seconds
  setTimeout(() => {
    messageBox.style.opacity = "1";
    messageBox.style.transform = "translateY(0)";
  }, 10000);

  // Reset timer when user leaves and returns
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("lastVisit", Date.now());
  });

  // Hide message when user scrolls up (optional for cleaner UI)
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition < 50) {
      messageBox.style.opacity = "0";
      messageBox.style.transform = "translateY(20px)";
    } else {
      messageBox.style.opacity = "1";
      messageBox.style.transform = "translateY(0)";
    }
  });
});

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




// BLOG SECTION CAROUSEL SCRIPT STARTS HERE
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds 
    // the carousel boundaries
    if (newScrollLeft <= 0 || newScrollLeft >=
      carousel.scrollWidth - carousel.offsetWidth) {

      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const autoPlay = () => {

    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    timeoutId = setTimeout(() =>
      carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () =>
    clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to 
  // scroll the carousel left and right
  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ?
        -firstCardWidth : firstCardWidth;
    });
  });
});



// Copyright Vivek Lohar 2025