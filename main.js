const startBtn = document.getElementById("startGame");
const modeSelectDiv = document.getElementById("modeSelectDiv");
const playerNameForm = document.querySelector(".form");
const gridDiv = document.getElementById("gridDiv");
const playerDetails = document.querySelector(".player-details");
const botBtn = document.getElementById("Bot");
const playerBtn = document.getElementById("Player");
const playerNameSubmit = document.getElementById("playerDivSubmit");

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
    playerNameForm.classList.add("hidden");
    gridDiv.classList.remove("hidden");
    mark();
  });

  playerBtn.addEventListener("click", () => {
    playerNameForm.classList.remove("hidden");

    gridDiv.classList.remove("hidden");
  });

  playerNameSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    playerDetails.classList.remove("hidden");
    mark();
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

function mark() {
  let turn = 1;
  boxes.forEach((box) => {
    box.textContent = "";
    box.addEventListener("click", () => {
      if (turn % 2 != 0 && box.textContent === "") {
        console.log("yes x");
        player1Mark(box);
      } else if (turn % 2 === 0 && box.textContent === "") {
        console.log("yes o");
        player2Mark(box);
      }
      turn++;
      //console.log(boxes[2].textContent === "X");
      console.log(wincheck(boxes));
    });
  });
}
//function wincheck(box) {
//  let count = 0;
//  for (let i = 0; i < winConditions.length; i++) {
//    for (let j = 0; j < 3; j++) {
//      if (box.dataset.index === winConditions[i][j]) {
//        console.log(winConditions[i][j]);
//        count++;
//      }
//    }
//  }
//  if (count === 3) {
//    console.log("won");
//  }
//  count = 0;
//}

function wincheck(boxes) {
  return winConditions.some((combination) => {
    //console.log(combination);
    return combination.every((i) => {
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
