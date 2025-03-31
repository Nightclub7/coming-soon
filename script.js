// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Countdown Timer
const endDate = new Date("2025-05-01T00:00:00Z");

function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("countdown").innerHTML = "The wait is over!";
        return;
    }

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);

// Roadmap Progress Bar
function updateProgress() {
    document.getElementById("phase1Progress").style.width = "50%";
    document.getElementById("phase2Progress").style.width = "30%";
    document.getElementById("phase3Progress").style.width = "10%";
    document.getElementById("phase4Progress").style.width = "0%";
    document.getElementById("phase5Progress").style.width = "0%";
    document.getElementById("phase6Progress").style.width = "0%";
}

window.onload = updateProgress;
