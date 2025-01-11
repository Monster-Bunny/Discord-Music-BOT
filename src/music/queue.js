class Queue {
    constructor() {
        this.songs = [];
    }

    addSong(song) {
        this.songs.push(song);
    }

    getNextSong() {
        return this.songs.shift();
    }

    clearQueue() {
        this.songs = [];
    }

    getQueue() {
        return this.songs;
    }
}

module.exports = Queue;