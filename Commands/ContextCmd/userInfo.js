const { Client, ContextMenuInteraction, ApplicationCommandType } = require('discord.js');
const { execMembersInfo } = require('../../Functions/Commands/Moderation/Members/membersInfo')
module.exports = {
    name: "User Info",
    type: ApplicationCommandType.User,
    /**
     * @param { Client } client
     * @param { ContextMenuInteraction } interaction
     */
    run: async (client, interaction) => {
        execMembersInfo(client, interaction);
    }

}