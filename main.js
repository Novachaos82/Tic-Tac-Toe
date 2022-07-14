const startBtn = document.getElementById("startGame");
const modeSelectDiv = document.getElementById("modeSelectDiv");
const playerNameForm = document.querySelector(".form");
const gridDiv = document.getElementById("gridDiv");
const playerDetails = document.querySelector(".player-details");
const botBtn = document.getElementById("Bot");
const playerBtn = document.getElementById("Player");
const playerNameSubmit = document.getElementById("playerDivSubmit");
const restartBtn = document.querySelector(".restart");
const boxes = document.querySelectorAll(".boxes");

(function () {
  modeSelectDiv.classList.add("hidden");
  playerNameForm.classList.add("hidden");
  gridDiv.classList.add("hidden");
  playerDetails.classList.add("hidden");
  //playerNameForm.classList.toggle("hidden");
})();

(function hiddenUnhidden() {
  startBtn.addEventListener("click", () => {
    startBtn.classList.toggle("hidden");
    modeSelectDiv.classList.toggle("hidden");
  });

  botBtn.addEventListener("click", () => {
    formClose();
    gridDiv.classList.remove("hidden");
    mark();
  });

  playerBtn.addEventListener("click", () => {
    formOpen();

    gridDiv.classList.remove("hidden");
  });
})();

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function twoPlayer() {
  score = 0;
  let turn = 1;
  boxes.forEach((box) => {
    box.textContent = "";
    box.addEventListener("click", () => {
      if (turn % 2 != 0 && box.textContent === "") {
        console.log("yes x");
        player1Mark(box);
        turn++;
      } else if (turn % 2 === 0 && box.textContent === "") {
        console.log("yes o");
        player2Mark(box);
        turn++;
      }
      //console.log(boxes[2].textContent === "X");
      console.log(wincheck(boxes));
    });
  });

  function wincheck(boxes) {
    return winConditions.some((innerArray) => {
      //console.log(combination);
      return innerArray.every((i) => {
        //console.log(i);
        return boxes[i].textContent === "X";
        //console.log("check");
      });
    });
  }

  function player1Mark(box) {
    box.textContent = "X";
  }

  function player2Mark(box) {
    box.textContent = "O";
  }
  restartBtn.addEventListener("click", () => {
    window.location.reload();
    turn = 1;
  });

  function restart() {
    clearGrid();
  }

  function clearGrid() {
    boxes.forEach((box) => {
      box.textContent = "";
    });

    return { clearGrid, restart };
  }
}

function formClose() {
  playerNameForm.classList.add("hidden");
}

function formOpen() {
  playerNameForm.classList.remove("hidden");
}

(function playerUpdate() {
  playerNameSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    playerDetails.classList.remove("hidden");
    formClose();
    twoPlayer();
    playerUpdate();
  });

  const Player1 = document.getElementById("Player1");
  const leftPlayerName = document.querySelector(".left-text");
  console.log(Player1.value);
  leftPlayerName.textContent = Player1.value;

  //const Player2
  //const rightPlayerName = document.querySelector(".right-text");
  //const leftScore = document.querySelector(".left-score");
  //const rightScore = document.querySelector(".right-score");
})();
