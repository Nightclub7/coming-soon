// Countdown Timer
function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("2026-12-31T00:00:00").getTime(); // Set the target date for countdown

    // Display "Loading countdown..." while the countdown is being calculated
    countdownElement.innerHTML = "Loading countdown...";

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "We’ve Launched!";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}

updateCountdown();

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Modal Close when clicking outside of modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};

// Roadmap Progress Bars
document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamic progress bar updates for phases
    const phase1Progress = document.getElementById("phase1Progress");
    const phase2Progress = document.getElementById("phase2Progress");
    const phase3Progress = document.getElementById("phase3Progress");
    const phase4Progress = document.getElementById("phase4Progress");
    const devPhaseProgress = document.getElementById("devPhaseProgress");

    // These values can be dynamically updated based on your platform's progress
    const progressData = {
        devPhase: 0, // Percentage for Development Phase
        phase1: 25,   // Percentage for phase 1
        phase2: 50,   // Percentage for phase 2
        phase3: 75,   // Percentage for phase 3
        phase4: 99    // Percentage for phase 4 
    };

    devPhaseProgress.style.width = `${progressData.devPhase}%`;
    phase1Progress.style.width = `${progressData.phase1}%`;
    phase2Progress.style.width = `${progressData.phase2}%`;
    phase3Progress.style.width = `${progressData.phase3}%`;
    phase4Progress.style.width = `${progressData.phase4}%`;
});
