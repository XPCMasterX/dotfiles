// import anime from "animejs/lib/anime.es.js";

export class App {
    constructor() {
        this.snakeBlocks = [];

        this.directions = [{
            direction: "Up",
            moveBy: 10,
            vertical: true
        },
        {
            direction: "Down",
            moveBy: -10,
            vertical: true
        },
        {
            direction: "Left",
            moveBy: -10,
            vertical: false
        },
        {
            direction: "Right",
            moveBy: 10,
            vertical: false
        }]

    }
    attached() {
        this.canvas = this.myCanvas.getContext("2d");
        this.canvas.fillStyle = '#FF0000';

        this.canvas.fillRect(0, 0, 50, 50)

        this.data = {
            x: 0,
            y: 200,
            width: 50,
            height: 50,
            vertical: true,
            moveBy: 10
        }

        setInterval(() => this.moveRect(this.canvas, this.data), 1000)
    }
    removeElement(ctx, rectObject) {
        let oldFillStyle = ctx.fillStyle;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(rectObject.x, rectObject.y, rectObject.width, rectObject.height);

        ctx.fillStyle = oldFillStyle;
    }


    moveRect(ctx, rectObject) {
        let oldFillStyle = ctx.fillStyle;

        this.removeElement(ctx, rectObject);

        ctx.fillStyle = '#FF9999';

        if (rectObject.vertical === true) {
            ctx.fillRect(rectObject.x, eval(`rectObject.y - ${rectObject.moveBy}`), rectObject.width, rectObject.height);
            this.data.y = rectObject.y - rectObject.moveBy;
        } else if (rectObject.vertical !== true) {
            ctx.fillRect(eval(`rectObject.x - ${rectObject.moveBy}`), rectObject.y, rectObject.width, rectObject.height);
            this.data.x = rectObject.x - rectObject.moveBy;
        }

        ctx.fillStyle = oldFillStyle;
    }

    changeDirection(data) {
        this.data.vertical = data.vertical;
        this.data.moveBy = data.moveBy;
    }
}
