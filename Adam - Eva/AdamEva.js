class Human {
    name
    gender
    weight

    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
    }

    say() {
        console.log("Hello, I'm Adam")
    }

    eat(apple) {

        if (apple.weight > 0){
            console.log("Ăn thôi đói lắm rồi")
            this.weight = this.weight + apple.weight
            apple.weight = apple.weight - 10
        } else {
            console.log("Hết táo dồiii")
        }

    }

    getWeight(){
        return this.weight
    }
}


class Apple {
    weight

    constructor(weight) {
        this.weight = weight
    }
}

let human1 = new Human("Adam","male",75)
let human2 = new Human("Eva","female",50)

let apple = new Apple(10)
