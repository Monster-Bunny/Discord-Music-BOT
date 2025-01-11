const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('../config.json');
const loadCommands = require('./commands/index');
const handleReady = require('./events/ready');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.commands = new Collection();
const commands = loadCommands();
for (const [name, command] of commands) {
    client.commands.set(name, command);
}

client.once('ready', () => {
    handleReady(client);
    console.log('Bot is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ 
            content: 'There was an error executing this command!', 
            ephemeral: true 
        });
    }
});

client.login(token);