class Rectangle {
    width
    height
    color

    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(400, 400, this.width, this.height)
    }
}