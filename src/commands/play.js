module.exports = {
    name: 'play',
    description: 'Play a song from a URL or name',
    async execute(interaction) {
        const song = interaction.options.getString('song');
        const queue = interaction.client.musicQueue.get(interaction.guild.id);

        if (!song) {
            return interaction.reply('Please provide a song URL or name.');
        }

        // Add song to the queue
        queue.addSong(song);
        interaction.reply(`Added ${song} to the queue.`);
        
        // If no song is currently playing, start playback
        if (!queue.isPlaying) {
            queue.play();
        }
    },
};