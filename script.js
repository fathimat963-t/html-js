let cells = document.querySelectorAll(".cell");
let result = document.getElementById("result");
let restart = document.getElementById("restart");

let player = "X";
let gameover = false;

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell, index) => {
  cell.addEventListener("click", function () {
    if (cell.innerText !== "" || gameover) {
      return;
    }

    cell.innerText = player;

    let winner = false;

    win.forEach((condition) => {
      let a = cells[condition[0]].innerText;
      let b = cells[condition[1]].innerText;
      let c = cells[condition[2]].innerText;

      if (a !== "" && a === b && b === c) {
        winner = true;
      }
    });

    if (winner) {
      result.innerText = player + " Wins!";
      gameOver = true;
    } else if ([...cells].every((cell) => cell.innerText !== "")) {
      result.innerText = "Draw!";
      gameOver = true;
    } else {
      player = player === "X" ? "O" : "X";
      result.innerText = player + "'s Turn";
    }
  });
});

restart.addEventListener("click", function () {
  cells.forEach((cell) => {
    cell.innerText = "";
  });

  player = "X";
  gameOver = false;
  result.innerText = "X's Turn";
});
