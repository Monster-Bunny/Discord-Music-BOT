const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, guildIds } = require('../config.json');
const loadCommands = require('./commands/index');

const commands = [];
const commandsMap = loadCommands();

for (const command of commandsMap.values()) {
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        for (const guildId of guildIds) {
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, guildId),
                { body: commands },
            );
        }

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
