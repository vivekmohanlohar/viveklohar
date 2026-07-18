/* ==========================================================================
   Global Site Transitions, Scrolling, & Loader Logic
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  // Wait exactly for the stroke and shrink transitions to finish, then lift the veil
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 2100);
});

// fade animations in house
document.addEventListener('DOMContentLoaded', () => {
  // Create a highly performant viewport intersection monitor
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element crosses into the screen view area...
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Stop watching this specific item so the animation only fires once
        scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,         // Triggers exactly when 12% of the component is visible
    rootMargin: "0px 0px -40px 0px" // Triggers slightly before hitting the absolute edge for a smooth flow
  });

  // Automatically find and track every item using the custom reveal class
  document.querySelectorAll('.scroll-reveal').forEach(element => {
    scrollObserver.observe(element);
  });
});

// Handle dynamic navigation layout changes on scroll safely 
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 1. Toggle background color backdrop on initial slide
  if (window.scrollY > 0) {
    nav.classList.add('window-scroll');
  } else {
    nav.classList.remove('window-scroll');
  }

  // 2. Control slide-to-hide up/down navigation rules
  if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
    // Scrolling down - hide navigation
    nav.classList.add('hidden');
    nav.classList.remove('visible');
  } else {
    // Scrolling up - display navigation
    nav.classList.add('visible');
    nav.classList.remove('hidden');
  }
  lastScrollTop = currentScrollTop;
});

/* ==========================================================================
   Mobile Nav Menu Drawer Rules
   ========================================================================== */
const menuBtn = document.querySelector(".menuBtn");
const menuNav = document.querySelector(".nav__navigation");

if (menuBtn && menuNav) {
  const closeMenu = () => {
    menuBtn.classList.remove("menu-active");
    menuNav.classList.remove("active");
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuBtn.classList.toggle("menu-active");
    menuNav.classList.toggle("active");
  });

  // Tap background container to close active menus
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.menuBtn') && !event.target.closest('.nav__navigation')) {
      closeMenu();
    }
  });

  document.addEventListener('scroll', closeMenu);
}

/* ==========================================================================
   Work Experience Section Interactive Multi-Tab Switching
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  const companies = document.querySelectorAll(".tab-content");

  menuButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      menuButtons.forEach((btn) => btn.classList.remove("spa--active"));
      button.classList.add("spa--active");

      companies.forEach((company) => company.classList.remove("spa--active"));
      if (companies[index]) {
        companies[index].classList.add("spa--active");
      }
    });
  });
});

/* ==========================================================================
   Education Timeline Animation Triggers on viewport entry
   ========================================================================== */
const eduBox = document.querySelector('.edu-box');

if (eduBox) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        eduBox.classList.add('animate');
      } else {
        eduBox.classList.remove('animate');
      }
    });
  });
  observer.observe(eduBox);
}

/* ==========================================================================
   Hera Pheri Tic Tac Toe Engine
   ========================================================================== */
const gameBoardContainer = document.getElementById('board');
const cells = [];
let currentPlayer = 'Raju';
let gameOver = false;
let firstClick = true;

const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

const gameBoard = ['', '', '', '', '', '', '', '', ''];

if (gameBoardContainer) {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => makeMove(i));
    gameBoardContainer.appendChild(cell);
    cells.push(cell);
  }
}

function makeMove(index) {
  if (gameBoard[index] === '' && !gameOver) {
    playClickSound();

    gameBoard[index] = currentPlayer === 'Raju'
      ? '<img src="./assets/game-assets/raju.jpg" alt="Raju">'
      : '<img src="./assets/game-assets/shyam.jpg" alt="Shyam">';

    cells[index].innerHTML = gameBoard[index];

    if (firstClick) {
      firstClick = false;
      const buttons = document.getElementById('buttons');
      if (buttons) buttons.style.display = 'flex';
    }

    if (checkWinner()) {
      playWinSound();
      displayResult();
    } else if (!gameBoard.includes('')) {
      playDrawSound();
      displayResult('Dono ke dono bekaar! <br> Kya gamer banoge re tum!');
    } else {
      currentPlayer = currentPlayer === 'Raju' ? 'Shyam' : 'Raju';
    }
  }
}

function checkWinner() {
  return winCombos.some(combo => {
    const [a, b, c] = combo;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function displayResult(message = '') {
  const resultText = document.getElementById('result-text');
  if (resultText) {
    resultText.innerHTML = message !== '' ? message : `${currentPlayer} Jeet Gaya re Baba!`;
  }
  const resultPopup = document.getElementById('result-popup');
  if (resultPopup) resultPopup.style.display = 'block';
  gameOver = true;
}

function resetGame() {
  const resultPopup = document.getElementById('result-popup');
  const buttons = document.getElementById('buttons');
  if (resultPopup) resultPopup.style.display = 'none';
  if (buttons) buttons.style.display = 'none';

  currentPlayer = 'Raju';
  gameBoard.fill('');
  cells.forEach(cell => cell.innerHTML = '');
  gameOver = false;
  firstClick = true;
}

function playClickSound() {
  const rajuSound = document.getElementById('rajuSound');
  const shyamSound = document.getElementById('shyamSound');
  if (currentPlayer === 'Raju' && rajuSound) rajuSound.play();
  if (currentPlayer === 'Shyam' && shyamSound) shyamSound.play();
}

function playWinSound() {
  const winSound = document.getElementById('winSound');
  if (winSound) winSound.play();
}

function playDrawSound() {
  const drawSound = document.getElementById('drawSound');
  if (drawSound) drawSound.play();
}

/* ==========================================================================
   Visitor Active Timer Setup
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const startTime = Date.now();
  const messageBox = document.getElementById("visitor-message");
  const messageText = document.getElementById("visitor-time-message");

  if (messageBox && messageText) {
    function updateTimer() {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime % 60;
      messageText.innerHTML = `Thank you for spending your <span class="highlight">${minutes} min ${seconds} sec</span> on this site. I truly appreciate your time! 🫡`;
    }

    setInterval(updateTimer, 1000);

    // Fade in running timer after 10 seconds of active visit
    setTimeout(() => {
      messageBox.style.opacity = "1";
      messageBox.style.transform = "translateY(0)";
    }, 10000);

    // Sync window scrolls smoothly
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        messageBox.style.opacity = "0";
        messageBox.style.transform = "translateY(20px)";
      } else if (window.scrollY >= 50 && (Date.now() - startTime) >= 10000) {
        messageBox.style.opacity = "1";
        messageBox.style.transform = "translateY(0)";
      }
    });
  }
});