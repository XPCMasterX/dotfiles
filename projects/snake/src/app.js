import anime from 'animejs/lib/anime.es.js';
export class App {
    constructor() {
        console.log("hey");

        this.moveBy = 30;

        this.direction = "right"

        this.snakePath = [];
        this.snakeBlocks = [{
            position: 0,
            ref: "follow1"
        }]

        this.snakeHead = {};
        this.snakeHead.translateX = 0;
    }

    attached() {
        setInterval(() => this.move(this.myButton), 500)
    }

    changeDirection() {
        this.direction = this.direction === "right" ? "left" : "right";
        console.log(this.direction)
    }

    move2(snakeBlock, index) {
        console.log(this.snakeBlocks[index].ref)

        anime({
            targets: ref,
            translateX: this.snakePath[snakeBlock.position].translateX,
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
