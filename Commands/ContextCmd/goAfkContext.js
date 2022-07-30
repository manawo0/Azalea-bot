const {
  Client,
  ContextMenuInteraction,
  ApplicationCommandType
} = require("discord.js");
const { afkModalCreate } = require('../../Functions/Commands/Systems/Modal Create/afkSystemModalCreate')
module.exports = {
  name: "Go AFK",
  type: ApplicationCommandType.User,
  /**
   * @param { Client } client
   * @param { ContextMenuInteraction } interaction
   */
  run: async (client, interaction) => {
    afkModalCreate(client, interaction);
  },
};
