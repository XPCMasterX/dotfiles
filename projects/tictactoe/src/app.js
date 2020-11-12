export class App { 
  constructor() {
    /* Setting up the squares */
    this.squares = [];
    for (var i = 0; i < 9; i++) {
      this.squares[i] = {};
      this.squares[i].value = " ";
      this.squares[i].alreadyFilled = false;
    }
    this.currentTurn = "O";

    /* Styles For Elements */
    this.style = {
      width: "70px",
      height: "50px",
      "background-color": "white",
      border: "solid black 1px",
      "margin-bottom": "4px",
    };

    this.clearStyle = {
      width: "70px",
      height: "50px",
      "background-color": "red",
      border: "none",
      color: "white",
    };
    this.undoStyle = {
      width: "70px",
      height: "50px",
      "background-color": "green", 
      border: "none",
      color: "white",
      "margin-left": "74px",
    };

    /* Defining Moves */
    this.moves = [];
  }

  fillIn(squareNum) {
    if (!this.squares[squareNum].alreadyFilled) {
      this.squares[squareNum].value = this.currentTurn;
      this.moves.push(squareNum);
      this.squares[squareNum].alreadyFilled = true;
      this.currentTurn = this.currentTurn === "O" ? "X" : "O";
    }

    this.checkWin();
  }

  undo() {
    this.squares[this.moves[this.moves.length - 1]].value = " ";
    this.squares[this.moves[this.moves.length - 1]].alreadyFilled = false;
    this.moves.splice(this.moves.length - 1, 1);
    this.currentTurn = this.currentTurn === "O" ? "X" : "O";
    this.winner = "";
  }

  checkWin() {
    this.possibleCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.hasMatched = false;
    this.winner = "";

    for (var i = 0; i < this.possibleCombinations.length; i++) {
      if (
        this.squares[this.possibleCombinations[i][0]].value === "O" &&
        this.squares[this.possibleCombinations[i][1]].value === "O" &&
        this.squares[this.possibleCombinations[i][2]].value === "O"
      ) {
        this.winner = "Noughts";
        this.hasMatched = true;
        this.clearBoard();
      }
      if (
        this.squares[this.possibleCombinations[i][0]].value === "X" &&
        this.squares[this.possibleCombinations[i][1]].value === "X" &&
        this.squares[this.possibleCombinations[i][2]].value === "X"
      ) {
        this.winner = "Crosses";
        this.hasMatched = true;
        this.clearBoard();
      }
    }
  }
  clearBoard() {
    for (var i = 0; i < 9; i++) {
      this.squares[i].value = " ";
      this.squares[i].alreadyFilled = false;
    }
    this.winner = "";
  }
}
