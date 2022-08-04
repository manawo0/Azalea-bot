const { Client, CommandInteraction } = require('discord.js');
const { execMembersInfo } = require('../../Functions/Commands/Moderation/Members/membersInfo');

module.exports = {
    name: "member",
    description: "Global command for information or actions with members.",
    options: [
        {
            name: "info",
            type: 1,
            description: "Take information about an user.",
            options: [
                {name: "user", description: "Define which user you want to take", type: 6}
            ]
        }
    ],
    /**
     * 
     * @param { Client } client 
     * @param { CommandInteraction } interaction 
     */
    run: async (client, interaction) => {
        const { options } = interaction
        switch(options._subcommand) {
            case "info":
                await execMembersInfo(client, interaction);
                break;
        }
    }
}