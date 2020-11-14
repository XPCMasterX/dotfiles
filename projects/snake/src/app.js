export class App {
    constructor() {
        this.snakePath = [];
        this.snakeBlocks = [{
            x: 0,
            y: 0,
            width: 50,
            height: 50,
            position: 0,
        }];

        this.directions = {
            up: {
                direction: "Up",
                moveBy: 10,
                vertical: true
            },
            down: {
                direction: "Down",
                moveBy: -10,
                vertical: true
            },
            left: {
                direction: "Left",
                moveBy: 10,
                vertical: false
            },
            right: {
                direction: "Right",
                moveBy: -10,
                vertical: false
            }
        }

        this.handleKeyPress = event => {
            switch (event.key) {
                case 'w':
                    this.changeDirection({ "direction": "Up", "moveBy": 10, "vertical": true });
                    break;
                case 'a':
                    this.changeDirection({ "direction": "Left", "moveBy": 10, "vertical": false });
                    break;
                case 's':
                    this.changeDirection({ "direction": "Down", "moveBy": -10, "vertical": true });
                    break;
                case 'd':
                    this.changeDirection({ "direction": "Right", "moveBy": -10, "vertical": false });
                    break;
                default:
                    console.log(event.key)
            }
        }
    }
    attached() {
        // Set canvas to cover entire screen
        this.myCanvas.setAttribute('width', window.innerWidth);
        this.myCanvas.setAttribute('height', window.innerHeight);

        this.canvas = this.myCanvas.getContext("2d");

        this.data = {
            x: 0,
            y: 0,
            width: 50,
            height: 50,
            vertical: false,
            moveBy: -10
        }

        setInterval(() => this.moveFrontRect(this.canvas, this.data), 350)

        setTimeout(() => this.moveRect(this.canvas, this.snakeBlocks[0]), 350)

        document.addEventListener('keypress', this.handleKeyPress);
    }

    detached() {
        document.removeEventListener('keypress', this.handleKeyPress);
    }

    removeElement(ctx, rectObject) {
        let oldFillStyle = ctx.fillStyle;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(rectObject.x, rectObject.y, rectObject.width, rectObject.height);

        ctx.fillStyle = oldFillStyle;
    }


    moveFrontRect(ctx, rectObject) {
        this.removeElement(ctx, rectObject);

        if (rectObject.vertical === true) {
            ctx.fillRect(rectObject.x, eval(`rectObject.y - ${rectObject.moveBy}`), rectObject.width, rectObject.height);
            this.data.y = rectObject.y - rectObject.moveBy;
        } else if (rectObject.vertical !== true) {
            ctx.fillRect(eval(`rectObject.x - ${rectObject.moveBy}`), rectObject.y, rectObject.width, rectObject.height);
            this.data.x = rectObject.x - rectObject.moveBy;
        }

        this.snakePath.push(this.data)
    }

    moveRect(ctx, snakeBlock) {
        this.removeElement(ctx, snakeBlock);

        if (snakeBlock.vertical === true) {
            ctx.fillRect(snakeBlock.x, this.snakePath[snakeBlock.position].y, snakeBlock.width, snakeBlock.height);
            this.snakeBlock.y = snakeBlock.y - this.snakePath[snakeBlock.position].moveBy;
        } else if (snakeBlock.vertical !== true) {
            ctx.fillRect(this.snakePath[this.snakeBlocks[0].position].x, snakeBlock.y, snakeBlock.width, snakeBlock.height);
            this.snakeBlock.x = this.snakeBlocks[0].x - this.snakePath[this.snakeBlocks[0].position].moveBy;
        }

        snakeBlock.position += 1;
    }

    changeDirection(data) {
        this.data.vertical = data.vertical;
        this.data.moveBy = data.moveBy;
    }
}
