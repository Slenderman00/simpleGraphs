class simpleGraph {
    constructor(_canvas, xLabel, yLabel) {
        this._canvas = _canvas;
        this.xLabel = xLabel;
        this.yLabel = yLabel;
        this.drawLines()
    }

    drawLines() {
        var ctx = this._canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(60, 0);
        ctx.lineTo(60, this._canvas.height - 60);
        ctx.stroke();
        ctx.moveTo(this._canvas.width + 20, this._canvas.height - 60);
        ctx.lineTo(60, this._canvas.height - 60);
        ctx.stroke();
        ctx.font = "15px Arial";
        ctx.fillText(this.xLabel, this._canvas.width / 2, this._canvas.height - 25);
        ctx.fillText(this.yLabel, 0, this._canvas.height / 2);
    }

    addLines(data, maxValueX, maxValueY) {
        var ctx = this._canvas.getContext("2d");
        ctx.beginPath();

        let xWidth = this._canvas.width - 60;
        let yHeight = this._canvas.height - 60;

        let lastX = data[0][0] / maxValueX * xWidth + 57.5;
        let lastY = this._canvas.height - (data[0][1] / maxValueY * yHeight + 57.5);

        let i = 0;

        data.forEach(point => {
            //converting points to fractions
            let x = point[0] / maxValueX * xWidth + 57.5;
            let y = this._canvas.height - (point[1] / maxValueY * yHeight + 57.5);

            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();

            lastX = x;
            lastY = y;

            console.log(lastX, lastY, x, y)

            ctx.fillRect(x, y, 5, 5);
            i++;
        });

        let o = 0;

        data.forEach(point => {
            //converting points to fractions
            let x = point[0] / maxValueX * xWidth + 57.5;
            let y = this._canvas.height - (point[1] / maxValueY * yHeight + 57.5);

            ctx.font = "15px Arial";
            ctx.fillRect(x, yHeight, 5, 5);
            ctx.fillText(point[0], x - 10, yHeight + 20);

            ctx.fillRect(60, y, 5, 5);
            ctx.fillText(point[1], 60 - 20, y + 10);

            o++;
        });
    }
}