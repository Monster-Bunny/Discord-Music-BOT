const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a song from a URL or name')
        .addStringOption(option =>
            option.setName('song')
                .setDescription('The URL or name of the song to play')
                .setRequired(true)),
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