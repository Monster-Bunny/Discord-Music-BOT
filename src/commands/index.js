const fs = require('fs');
const path = require('path');

function loadCommands() {
    const commands = new Map();
    const commandFiles = fs.readdirSync(__dirname)
        .filter(file => file.endsWith('.js') && file !== 'index.js');

    for (const file of commandFiles) {
        const command = require(path.join(__dirname, file));
        commands.set(command.name, command);
    }

    return commands;
}

module.exports = loadCommands;
