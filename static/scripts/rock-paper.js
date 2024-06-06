let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};

document.querySelector(".rock-button").addEventListener("click", () => {
  playGame("rock");
});

update();

function playGame(playerMove) {
  const comMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (comMove === "rock") {
      result = "You lost";
    } else if (comMove === "paper") {
      result = "You won";
    } else if (comMove === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (comMove === "rock") {
      result = "You won";
    } else if (comMove === "paper") {
      result = "Tie";
    } else if (comMove === "scissors") {
      result = "You lost";
    }
  } else {
    if (comMove === "rock") {
      result = "Tie";
    } else if (comMove === "paper") {
      result = "You lost";
    } else if (comMove === "scissors") {
      result = "You won";
    }
  }

  if (result === "You won") {
    score.wins++;
  } else if (result === "You lost") {
    score.losses++;
  } else {
    score.draws++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  update();

  document.querySelector(".moves").innerHTML = `You 
  <img src="static/images/${playerMove}-emoji.png" class="move-icon">
  <img src="static/images/${comMove}-emoji.png" class="move-icon"> Computer`;

  document.querySelector(".result").innerHTML = result;
}

function update() {
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}

function pickComputerMove() {
  const rand = Math.random();
  let comMove = "";

  if (rand < 0.3) {
    comMove = "rock";
  } else if (rand >= 0.3 && rand < 0.6) {
    comMove = "paper";
  } else if (rand >= 0.6 && rand < 1) {
    comMove = "scissors";
  }

  return comMove;
}

let isPlaying = false,
  intervalId;

function autoPlay() {
  if (!isPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 700);
    isPlaying = true;
  } else {
    clearInterval(intervalId);
    isPlaying = false;
  }
}
