const { ApplicationCommandType } = require("discord.js");
const { pingBot } = require("../../Functions/Commands/Public/ping");

module.exports = {
  name: "ping",
  description: "Check bot's ping.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    // Make the ping command
    pingBot(client, interaction);
  },
};
