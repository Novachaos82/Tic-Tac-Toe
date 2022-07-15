const startBtn = document.getElementById("startGame");
const modeSelectDiv = document.getElementById("modeSelectDiv");
const playerNameForm = document.querySelector(".form");
const form = document.getElementById("playerNames");
const gridDiv = document.getElementById("gridDiv");
const playerDetails = document.querySelector(".player-details");
const botBtn = document.getElementById("Bot");
const playerBtn = document.getElementById("Player");
const playerNameSubmit = document.getElementById("playerDivSubmit");
const restartBtn = document.querySelector(".restart");
const boxes = document.querySelectorAll(".boxes");
const playAgainBtn = document.querySelector(".playAgain");
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
    //formClose();
    //gridDiv.classList.remove("hidden");
    //mark();
    alert("woking on it");
  });

  playerBtn.addEventListener("click", () => {
    formOpen();
    form.reset();

    gridDiv.classList.remove("hidden");
    playerBtn.disabled = true;
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
  let scoreXscore = 0;
  let scoreOscore = 0;
  let turn = 1;
  tie = false;
  clearGrid();
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
      checks(boxes);
    });
  });

  function checks(boxes) {
    console.log(turn + "turna");
    if (wincheckX(boxes)) {
      scoreX();
      scoreWinCheckX(scoreXscore);
      //if (scoreXscore < 5) {
      //  clearGrid();
      //}
    } else if (wincheckO(boxes)) {
      scoreO();
      scoreWinCheckO(scoreOscore);

      //if (scoreOscore < 5) {
      //  clearGrid();
      //}

      console.log("yes win y");
    } else if (turn >= 10) {
      console.log("yes  tie");
      scoreWinCheckTie();
    }
  }

  function wincheckX(boxes) {
    let score = 0;
    return winConditions.some((innerArray) => {
      //console.log(combination);
      return innerArray.every((i) => {
        //console.log(i);
        return boxes[i].textContent === "X";
        //console.log("check");
      });
    });
    //const leftScore = document.querySelector(".left-score");
    //leftScore.textContent = ++score;
  }

  function wincheckO(boxes) {
    let score = 0;
    return winConditions.some((innerArray) => {
      //console.log(combination);
      return innerArray.every((i) => {
        //console.log(i);

        return boxes[i].textContent === "O";
        //console.log("check");
      });
    });
  }

  function tieCheck(squares) {
    if (turn === 10 || (scoreOscore === 5 && scoreXscore === 5)) {
      squares.forEach((square) => {
        if (square.textContent === "X" || square.textContent === "O") {
          console.log("true ticchek");
          tie = true;
        }
      });
    }
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

  function scoreX() {
    const leftScore = document.querySelector(".left-score");
    leftScore.textContent = scoreXscore;
    {
      leftScore.textContent = ++scoreXscore;
    }
  }

  function scoreO() {
    const rightScore = document.querySelector(".right-score");
    rightScore.textContent = scoreOscore;
    {
      rightScore.textContent = ++scoreOscore;
    }
  }

  function clearGrid() {
    boxes.forEach((box) => {
      box.textContent = "";
    });
    turn = 1;
  }
  function pointerEventToNone() {
    boxes.forEach((box) => {
      box.style.pointerEvents = "none";
    });
  }

  function scoreWinCheckX(score) {
    if (score === 5) {
      playAgainBtn.classList.add("hidden");
    }
    document.getElementById("theGridText").textContent = `${
      document.getElementById("Player1").value
    } won`;
    pointerEventToNone();
  }

  function scoreWinCheckO(score) {
    if (score === 5) {
      playAgainBtn.classList.add("hidden");
    }
    document.getElementById("theGridText").textContent = `${
      document.getElementById("Player2").value
    } won`;
    pointerEventToNone();
  }

  if (scoreOscore > 5 || scoreXscore > 5) {
    playAgainBtn.classList.add("hidden");
  }
  playAgainBtn.addEventListener("click", () => {
    document.getElementById("theGridText").textContent = "";
    clearGrid();
    boxes.forEach((box) => {
      box.style.pointerEvents = "auto";
    });
  });
}

function scoreWinCheckTie() {
  console.log("called score win check tie");
  document.getElementById("theGridText").textContent = "tie";

  boxes.forEach((box) => {
    box.style.pointerEvents = "none";
  });
}
function formClose() {
  playerNameForm.classList.add("hidden");
  //playerNameForm.reset();
}

function formOpen() {
  playerNameForm.classList.remove("hidden");
}

(function playerUpdate() {
  const Player1 = document.getElementById("Player1");
  const Player2 = document.getElementById("Player2");
  {
    playerNameSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (Player1.value !== "" && Player2.value !== "") {
        playerDetails.classList.remove("hidden");
        formClose();

        playerUpdate();
        twoPlayer();
      }
    });
  }

  const leftPlayerName = document.querySelector(".left-text");
  console.log(Player1.value);
  leftPlayerName.textContent = Player1.value;

  const rightPlayerName = document.querySelector(".right-text");
  rightPlayerName.textContent = Player2.value;
})();
