const {
  Client,
  ContextMenuInteraction,
  ApplicationCommandType
} = require("discord.js");

const {purgeModalCreate} = require('../../Functions/Commands/Systems/Modal Create/purgeModalCreate')
module.exports = {
  name: "Purge Messages",
  type: ApplicationCommandType.Message,
  /**
   * @param { Client } client
   * @param { ContextMenuInteraction } interaction
   */
  run: async (client, interaction) => {
    purgeModalCreate(client, interaction)
  },
};
