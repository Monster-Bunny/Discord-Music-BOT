module.exports = {
    name: 'pause',
    description: 'Pauses the currently playing music.',
    execute(interaction) {
        const player = interaction.client.player; // Assuming player is attached to the client
        if (player.isPlaying) {
            player.pause();
            interaction.reply('Music has been paused.');
        } else {
            interaction.reply('No music is currently playing.');
        }
    },
};