const { Client, ContextMenuInteraction, ApplicationCommandType } = require('discord.js');
const { pingBot } = require('../../Functions/Commands/Public/ping')

module.exports = {
    name: "Ping bot",
    type: ApplicationCommandType.User,
    /**
     * @param { Client } client
     * @param { ContextMenuInteraction } interaction
     */
    run: async (client, interaction) => {
        pingBot(client, interaction);
    }

}