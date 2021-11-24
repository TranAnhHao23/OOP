class ElectricLamp {
    connectButton
    lightOn

    constructor() {
        this.connectButton = undefined
        this.lightOn = false
    }



}


class SwitchButton {
    lamp
    constructor(lamp) {
        this.lamp = lamp
    }
    getConnectToTheLamp(lamp){
        lamp.connectButton = true
    }
    switchStatus(){
        if (this.lamp.connectButton === true){
            this.lamp.lightOn = !this.lamp.lightOn
            if (this.lamp.lightOn){
                console.log("light on")
            } else {
                console.log("light off")
            }
        } else {
            console.log("Not connect to the lamp")
        }
    }
}

let lamp1 = new ElectricLamp();
let button1 = new SwitchButton(lamp1)