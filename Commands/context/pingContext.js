const { Client, ContextMenuInteraction, ApplicationCommandType } = require('discord.js');
const { pingBot } = require('../../functions/Commands/general/ping')
module.exports = {
    name: "Ping bot",
    type: ApplicationCommandType.Message,
    /**
     * @param { Client } client
     * @param { ContextMenuInteraction } interaction
     */
    run: async (client, interaction) => {
        pingBot(client, interaction);
    }

}