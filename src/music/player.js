const { Manager } = require("erela.js");
const { lavalink } = require("../../config.json");

class Player {
    constructor(queue, client) {
        this.queue = queue;
        this.client = client;
        this.currentSong = null;
        this.isPlaying = false;

        this.manager = new Manager({
            nodes: lavalink.nodes,
            send(id, payload) {
                const guild = client.guilds.cache.get(id);
                if (guild) guild.shard.send(payload);
            }
        });

        this.manager.on("nodeConnect", node => console.log(`Node ${node.options.identifier} connected`));
        this.manager.on("nodeError", (node, error) => console.log(`Node ${node.options.identifier} had an error: ${error.message}`));
        this.manager.on("trackStart", (player, track) => {
            this.currentSong = track;
            this.isPlaying = true;
            console.log(`Now playing: ${track.title}`);
        });
        this.manager.on("queueEnd", player => {
            this.isPlaying = false;
            this.currentSong = null;
            console.log("Queue has ended.");
        });

        this.manager.init(client.user.id);
    }

    async play(song) {
        const player = this.manager.create({
            guild: song.guild.id,
            voiceChannel: song.voiceChannel.id,
            textChannel: song.textChannel.id,
            selfDeaf: true
        });

        player.connect();
        player.queue.add(song.track);
        if (!player.playing && !player.paused && player.queue.totalSize === 1) player.play();
    }

    pause() {
        const player = this.manager.players.get(this.queue.guild.id);
        if (player && player.playing) {
            player.pause(true);
            this.isPlaying = false;
        }
    }

    resume() {
        const player = this.manager.players.get(this.queue.guild.id);
        if (player && player.paused) {
            player.pause(false);
            this.isPlaying = true;
        }
    }

    stop() {
        const player = this.manager.players.get(this.queue.guild.id);
        if (player) {
            player.destroy();
            this.isPlaying = false;
            this.currentSong = null;
        }
    }
}

module.exports = Player;