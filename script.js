// Countdown Timer Setup
const countdownDate = new Date("January 1, 2026 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "We are live!";
    }
}, 1000);
