// Set the target date for the countdown (January 1, 2026)
const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate time remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the time remaining
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "We Are LIVE!!!!!";
    }
}

// Update the countdown every second
const x = setInterval(updateCountdown, 1000);

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
