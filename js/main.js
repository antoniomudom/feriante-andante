//GLOBAL VARIABLES
const startButtonNode = document.querySelector("#start-btn");
const playAgainButtonNode = document.querySelector("#restart-btn");
const winnerButtonNode = document.querySelector("#winner-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxeNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const winScreenNode = document.querySelector("#win-screen");
const timerScreenNode = document.querySelector("#timer-screen");
winScreenNode.style.display = "none";
timerScreenNode.style.display = "none";

let gameObj = null;
let timeInSeconds = 60;

function updateTimer() {
  const timerElement = document.getElementById("timer");
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  // Añado un cero delante de los números menores a 10 para que se vea 01:05 en lugar de 1:5
  const formattedTime =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  // Actualo el contenido del elemento del contador
  timerElement.textContent = formattedTime;
}

// Función que se ejecutará cada segundo para actualizar el contador
function countdown() {
  if (gameObj.isGameOn === true) {
    if (timeInSeconds > 0) {
      timeInSeconds--;
      updateTimer();
    } else {
      gameObj.gameWin();
    }
  }
}

//STATE MANAGEMENT FUNCTIONS

function startGame() {
  // Aquí comienza el contador cuando se presiona el botón de iniciar juego
  const countdownInterval = setInterval(countdown, 1000);

  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  timerScreenNode.style.display = "flex";
  winScreenNode.style.display = "none";

  gameObj = new Game();
  gameObj.gameLoop();
  gameObj.musicGame.play();
}

function playAgain() {
  // Reiniciamos el contador y actualizamos la visualización del tiempo
  timeInSeconds = 60;
  updateTimer();

  gameoverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  timerScreenNode.style.display = "flex";
  winScreenNode.style.display = "none";

  gameObj = new Game();
  gameObj.gameLoop();
  gameObj.musicGame.play();
}

//ADD EVENT LISTENER
startButtonNode.addEventListener("click", startGame);
playAgainButtonNode.addEventListener("click", playAgain);
winnerButtonNode.addEventListener("click", playAgain);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    gameObj.personaje.y -= 20;
  } else if (event.key === "ArrowDown") {
    gameObj.personaje.y += 20;
  }
});
