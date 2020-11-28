import anime from 'animejs/lib/anime.es.js';
export class App {
    constructor() {
        console.log("hey");

        this.moveBy = 30;

        this.direction = "right"

        this.snakePath = [];
        this.snakeBlocks = [{
            position: 0,
            refer: "follow1"
        }, {
            position: 0,
            refer: "follow2"
        }]

        this.snakeHead = {};
        this.snakeHead.translateX = 0;

        /* Styles */
        this.snakeBlockStyle = {
            height: "20px",
            width: "20px",
            "background-color": "black",
            border: "none"
        }

        this.snakeHeadStyle = JSON.parse(JSON.stringify(this.snakeBlockStyle));
        this.snakeHeadStyle["background-color"] = "red";
    }

    attached() {
        setInterval(() => this.move(this.myButton), 500)
        setInterval(() => this.move2(0, this.snakeBlocks[0].refer), 500)
    }

    changeDirection() {
        this.direction = this.direction === "right" ? "left" : "right";
        console.log(this.direction)
    }

    move2(index, ref) {
        anime({
            targets: ref,
            translateX: this.snakePath[this.snakeBlocks[index].position].translateX,
            easing: "steps(1)"
        });

        this.snakeBlocks[0].position += 1;
    }

    move(objectRef) {
        switch (this.direction) {
            case "right":
                anime({
                    targets: objectRef,
                    translateX: this.snakeHead.translateX + this.moveBy,
                    easing: "steps(1)"
                })
                this.snakeHead.translateX = this.snakeHead.translateX + this.moveBy
                break;
            case "left":
                anime({
                    targets: objectRef,
                    translateX: this.snakeHead.translateX - this.moveBy,
                    easing: "steps(1)"
                })
                this.snakeHead.translateX = this.snakeHead.translateX - this.moveBy
                break;
            default:
                console.log("WRONG DIRECTION :)")
                break;
        }

        this.snakePath.push({
            translateX: this.snakeHead.translateX
        })
    }
}
