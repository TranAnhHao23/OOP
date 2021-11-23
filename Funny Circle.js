let xRandom, yRandom;

class Circle {
    x
    y
    radius

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    // creatCircle(){
    //     let ctx = document.getElementById("myCanvas").getContext("2d");
    //
    // }
}

function getRandomColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    return "rgb(" + red + "," + blue + "," + green + ")";
}




function creatCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let x = Math.round(Math.random()*window.innerWidth);
    let y = Math.round(Math.random()*window.innerHeight);
    let radius = Math.round(Math.random() * 80)
    let color = getRandomColor();

    let xRandom = x;
    let yRandom = y;


    let circle = new Circle(x, y, radius);
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill()
    ctx.closePath()
}

function creatMultiCircle(){
    for (let i = 0; i < 30; i++) {
        creatCircle();
    }
    // setTimeout(creatMultiCircle,1000)
}
creatMultiCircle()
