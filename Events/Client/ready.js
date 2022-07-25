const chalk = require('chalk')
const { Client } = require('discord.js');

module.exports = {
    name: "ready",
    on: true,
    /**
     * 
     * @param { Client } client
     * 
     */
    async execute(client) {
        console.log(chalk.green(`Client is now logged in`));
        client.user.setPresence({
            activities: [{
                name: "/aw help",
            }]
        })
    } 
} 