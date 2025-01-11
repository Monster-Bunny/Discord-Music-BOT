module.exports = {
    name: 'skip',
    description: 'Skips the currently playing song.',
    async execute(interaction) {
        const queue = interaction.client.music.getQueue(interaction.guild.id);
        if (!queue || !queue.playing) {
            return interaction.reply('There is no music playing!');
        }

        const skipped = queue.skip();
        return interaction.reply(skipped ? 'Skipped the song!' : 'There was an error skipping the song.');
    },
};