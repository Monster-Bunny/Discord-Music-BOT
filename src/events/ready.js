const { ActivityType } = require('discord.js');
const { status } = require('../../config.json');

module.exports = (client) => {
    console.log(`Bot is online! Logged in as ${client.user.tag}`);
    
    client.user.setPresence({
        activities: [
            {
                name: status.text,
                type: ActivityType[status.type]
            }
        ],
        status: status.status
    });
};