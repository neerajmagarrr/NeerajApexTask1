const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const resetButton = document.getElementById("reset-btn");

// Game logic
document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    updateUI(userChoice, computerChoice, result);
  });
});

resetButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  updateScores();
  userChoiceText.textContent = "You chose: -";
  computerChoiceText.textContent = "Computer chose: -";
  resultText.textContent = "Make your move!";
});

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function getResult(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
}

function updateUI(user, computer, result) {
  userChoiceText.textContent = `You chose: ${user}`;
  computerChoiceText.textContent = `Computer chose: ${computer}`;

  if (result === "win") {
    userScore++;
    resultText.textContent = "You Win!";
    resultText.style.color = "green";
  } else if (result === "lose") {
    computerScore++;
    resultText.textContent = "You Lose!";
    resultText.style.color = "red";
  } else {
    resultText.textContent = "It's a Draw!";
    resultText.style.color = "gray";
  }

  updateScores();
}

function updateScores() {
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}

// Theme switcher logic
const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedTheme = btn.dataset.theme;
    document.body.className = ""; 
    document.body.classList.add(selectedTheme);
    localStorage.setItem("theme", selectedTheme); 
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "original";
  document.body.classList.add(savedTheme);
});
