// Countdown Timer
const countdownElement = document.getElementById("countdown");
const countdownDate = new Date("2026-12-31T00:00:00").getTime();

const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "We Are Live!";
    } else {
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
}, 1000);

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to update progress bars dynamically
function updateProgressBars() {
    // Update progress bars for different phases
    document.getElementById('phase1Progress').style.width = "25%";
    document.getElementById('phase2Progress').style.width = "50%";
    document.getElementById('phase3Progress').style.width = "75%";
    document.getElementById('phase4Progress').style.width = "99%";
}

// Call updateProgressBars function when the page loads
window.onload = updateProgressBars;
