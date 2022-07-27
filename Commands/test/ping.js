const { ApplicationCommandType } = require('discord.js');
const { pingBot } = require('../../functions/Commands/general/ping')

module.exports = {
	name: 'ping',
	description: "Check bot's ping.",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
		// Make the ping command
		pingBot(client, interaction);
	}
};