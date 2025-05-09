// Defina aqui a data e hora de término (no formato ISO 8601)
const endDate = new Date("2025-06-30T10:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    document.querySelectorAll(".number").forEach(el => el.textContent = "00");
    return;
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.querySelector("#days .number").textContent = String(days).padStart(2, "0");
  document.querySelector("#hours .number").textContent = String(hours).padStart(2, "0");
  document.querySelector("#minutes .number").textContent = String(minutes).padStart(2, "0");
  document.querySelector("#seconds .number").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
