// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// Intersection Observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Tic Zack Toe Game

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("gameStatus");
const resetButton = document.getElementById("resetGame");

let currentPlayer = "X";
let gameState = Array(12).fill("");

// Z pattern positions
const winPattern = [0,1,2,4,6,7,8];

cells.forEach(cell => {
    cell.addEventListener("click", () => {

        const index = cell.getAttribute("data-index");

        if(gameState[index] !== "") return;

        gameState[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWin();

        currentPlayer = currentPlayer === "X" ? "O" : "X";

    });
});

function checkWin(){

    const first = gameState[winPattern[0]];

    if(first === "") return;

    const win = winPattern.every(i => gameState[i] === first);

    if(win){

        statusText.textContent = first + " wins with the Z pattern!";

        winPattern.forEach(i => {
            cells[i].classList.add("win");
        });

        cells.forEach(cell => cell.style.pointerEvents = "none");
    }
}

resetButton.addEventListener("click", () => {

    gameState = Array(12).fill("");
    currentPlayer = "X";
    statusText.textContent = "";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("win");
        cell.style.pointerEvents = "auto";
    });

});