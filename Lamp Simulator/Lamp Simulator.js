class Battery {
    energy

    constructor(energy) {
        this.energy = energy
    }

    setEnergy(energy) {
        this.energy = energy
    }

    getEnergy() {
        return this.energy
    }

    decreaseEnergy() {
        this.energy--
    }

}

class Lamp {
    battery
    status

    constructor(battery) {
        this.battery = battery
        this.status = false
    }

    setBattery(battery){
        this.battery = battery
    }

    turnOnOff() {
        this.status = !this.status
    }

    getBatteryInfo(battery) {
        return this.battery.getEnergy()
    }

    lightOnOff(){
        if (this.status == true && this.battery.energy > 0){
            console.log("Light on")
            this.battery.decreaseEnergy()
        } else {
            console.log("light off")
        }
    }
}