class Television {
    remote
    channel
    volume
    status

    constructor(remote) {
        this.remote = remote;
        this.channel = this.remote.getChannel();
        this.volume = this.remote.getVolume();
        this.status = false;
    }

    setPowerTV(){
        this.status = !this.status
    }

    getPowerRemote(){
        return this.remote.getPower();
    }

    getChannel(){
        if (this.status === true && this.getPowerRemote() > 0){
            this.channel = this.remote.getChannel()
            this.remote.power--
            return this.channel;
        }
    }
    getVolume(){
        if (this.status === true && this.getPowerRemote() > 0){
            this.volume = this.remote.getVolume()
            this.remote.power--
            return this.volume;
        }
    }


    // getChannelIncreaseTV(){
    //     if (this.status === true && this.getPowerRemote() > 0){
    //         this.remote.power--
    //         return this.remote.getChannelIncrease()
    //     }
    // }
    //
    // getChannelDecreaseTV(){
    //     if (this.status === true && this.getPowerRemote() > 0){
    //         this.remote.power--
    //         return this.remote.getChannelDecrease()
    //     }
    // }
    //
    // getVolumeIncreaseTV(){
    //     this.remote.power--
    //     return this.remote.getVolumeIncrease()
    // }
    //
    // getVolumeDecreaseTV(){
    //     this.remote.power--
    //     return this.remote.getVolumeDecrease()
    // }

}