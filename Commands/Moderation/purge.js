const {Client, CommandInteraction } = require('discord.js');
const { execPurgeFunction } = require('../../Functions/Commands/Moderation/Messages/purgeFunction')
module.exports = {
    name: "purge",
    description: "Purges an amount of messages",
    options: [
        {
            name: "amount",
            type: 4,
            description: "Number of messages to purge"
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * 
     */
    run: async (client, interaction) => {
         execPurgeFunction(client, interaction);
    } 
} 

