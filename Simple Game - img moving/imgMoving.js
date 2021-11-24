class ImgMoving {
    img
    top
    left
    height
    width

    constructor(img, top, left, height, width) {
        this.img = img
        this.top = top
        this.left = left
        this.height = height
        this.width = width
    }

    getImgElement() {
        return '<img src ="' + this.img + '"' +
            ' height="' + this.height + '"' +
            ' width ="' + this.width + '"' +
            ' style="top: ' + this.top + 'px;left: ' + this.left + 'px;position:absolute;" />';

    }

    moveRight(speed) {
        this.left = this.left + speed
    }

    moveLeft(speed) {
        this.left = this.left - speed
    }

    moveUp(speed) {
        this.top = this.top - speed
    }

    moveDown(speed) {
        this.top = this.top + speed
    }

}


let dog = new ImgMoving("animate-four-legged-progress-03.gif", 0, 0, 176, 315);
let a = dog.getImgElement();
// document.getElementById("game").innerHTML = dog.getImgElement()
let speed = +prompt("Nhập tốc độ")


function turnAround() {
    if (dog.left < (window.innerWidth - dog.width) && dog.top === 0) {
        dog.moveRight(speed)
        document.getElementById("game").innerHTML = dog.getImgElement()
    } else if (dog.top < (window.innerHeight - dog.height) && dog.left !== 0) {
        dog.moveDown(speed)
        document.getElementById("game").innerHTML = dog.getImgElement()
    } else if (dog.left > 0) {
        dog.moveLeft(speed)
        document.getElementById("game").innerHTML = dog.getImgElement()
    } else {
        dog.moveUp(speed)
        document.getElementById("game").innerHTML = dog.getImgElement()
    }
    // document.getElementById("game").innerHTML = dog.getImgElement()
    requestAnimationFrame(turnAround)


}

turnAround()