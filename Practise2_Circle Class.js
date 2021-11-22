class Circle {
    radius

    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radiusSet) {
        this.radius = radiusSet;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    toString(){
        alert("Radius = " + this.getRadius() + ", Area = " + this.getArea())
    }
}

let cir2 = new Circle(2);
let radius2 = cir2.getRadius();
let area2 = cir2.getArea();
console.log(radius2)
console.log(area2)
cir2.toString()