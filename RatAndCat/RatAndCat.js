class Rat {
    name
    mass
    speed
    status // Chỉ dead or alive
    voice // phương thức, không phải thuộc tính

    constructor(name, mass, speed, status) {
        this.name = name
        this.mass = mass
        this.speed = speed
        this.status = status
        this.voice = "Chít chít chít chít"
    }


}

class Cat {
    name
    mass
    speed
    status // Auto alive
    voice // phương thức, không phải thuộc tính

    // catchRat // phương thức
    // eatRat // phương thức -> nhớ check khối lượng mèo và chuột

    constructor(name, mass,speed, status) {
        this.name = name
        this.mass = mass
        this.speed = speed
        this.status = status
        this.voice = "Mèo méo meo mèo meo"
    }
    catchRat(rat){
        if (rat.status === "Alive" && rat.speed < this.speed){
            console.log("Bắt được m rồi nhé con, chuẩn bị xơi thôi")
        } else if (rat.status === "Dead"){
            console.log("Chết rồi bắt làm gì")
        } else if (rat.speed > this.speed){
            console.log("Nhanh quá huhu")
        }
    }
    eatRat(rat){
        if (rat.status === "Alive" && rat.speed < this.speed && rat.mass > 0){
            console.log("Đớp thôi")
            this.mass = this.mass + rat.mass
            rat.mass = 0
            rat.status = "Dead"
        } else{
            console.log("Ăn cái gì được bây giờ?")
        }
    }

}


let cat1 = new Cat("cat", 40, 20, "Alive")
let rat1 = new Rat("rat", 10, 14, "Alive")
let rat2 = new Rat("rat", 10, 14, "Dead")
let rat3 = new Rat("rat", 10, 25, "Alive")