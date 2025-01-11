const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Lists all available commands.',
    async execute(interaction) {
        const commands = interaction.client.commands;
        
        const helpEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('📜 Available Commands')
            .setDescription('Here are all the commands you can use:')
            .setTimestamp();

        commands.forEach(cmd => {
            helpEmbed.addFields({
                name: `/${cmd.name}`,
                value: cmd.description || 'No description available',
                inline: true
            });
        });

        await interaction.reply({ embeds: [helpEmbed] });
    },
};
