class MobilePhone {
    name
    battery
    status
    inbox
    send
    draft

    constructor(name, battery) {
        this.name = name
        this.battery = battery
        this.status = false
        this.draft = []
    }

    getMobileStatus() {
        return this.status
    }

    batteryStatus() {
        if (this.status === true) {
            return this.battery
        } else {
            console.log("Chưa mở đth rồi")
        }

    }

    turnOnOff() {
        this.status = !this.status
    }

    charge(battery) {
        this.battery = battery
    }


    setMessage(message) {
        if (this.status === true && this.battery > 0) {
            this.draft = this.draft.concat(message)
            this.battery--
            return this.draft
        }
    }

    sendMessage(mobile) {
        if (this.status === true && this.battery > 0 && mobile.battery > 0) {
            this.send = this.draft
            mobile.inbox = this.send
            this.draft = []
            this.battery--
        }
    }

    checkInbox() {
        if (this.status === true && this.battery > 0) {
            this.battery--
            return this.inbox
        }
    }

}

let nokia = new MobilePhone("Nokia",100)
let iphone = new MobilePhone("Iphone", 100)