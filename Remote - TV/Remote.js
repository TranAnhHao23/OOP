class Remote {
    power
    channel
    volume


    constructor(power, channel, volume) {
        this.power = power
        this.channel = channel
        this.volume = volume
    }

    turnOnOffTV(tv) {
        tv.setPowerTV()
    }

    getPower() {
        return this.power
    }

    setChannel(channel) {
        this.channel = channel
    }

    getChannel() {
        return this.channel
    }

    getVolume() {
        return this.volume
    }

    getChannelIncrease() {
        this.channel = this.channel + 1
        return this.channel
    }

    getChannelDecrease() {
        this.channel = this.channel - 1
        return this.channel
    }

    getVolumeIncrease() {
        this.volume = this.volume + 1
        return this.volume
    }

    getVolumeDecrease() {
        this.volume = this.volume - 1
        return this.volume
    }
}