module.exports = {
    name: 'stop',
    description: 'Stops the music playback and clears the queue.',
    async execute(interaction) {
        const player = interaction.client.player; // Assuming you have a player instance in your client
        player.stop();
        player.queue.clear();
        await interaction.reply('Music playback has been stopped and the queue has been cleared.');
    },
};