import anime from "animejs/lib/anime.es.js";

export class App {
  constructor() {
    this.snakeBlocks = ["", ""];

    this.snakeBlockStyle = {
      margin: "2px 2px 2px 2px",
      border: "none",
      "background-color": "black",
      width: "20px",
      height: "20px",
      position: "relative",
    };
    this.top = 0;
  }
  move() {
    this.top += 20;

    this.snakeBlockStyle = {
      margin: "2px 2px 2px 2px",
      border: "none",
      "background-color": "black",
      width: "20px",
      height: "20px",
      position: "relative",
      top: this.top + "px",
    };
  }
}
