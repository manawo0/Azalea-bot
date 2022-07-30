const {InteractionType} = require('discord.js');
const { submitModalAfkSystem } = require('./modalAfkSystem');
const { submitPurgeModal } = require('./purgeModal');

async function setModals(client, interaction) {
    if(interaction.type === InteractionType.ModalSubmit){
        if(interaction.customId == "afkReasonModal") {
          await submitModalAfkSystem(client, interaction);
        }
        if(interaction.customId == "purgeModal") {
          await submitPurgeModal(client, interaction);
        }
      }
}
module.exports = { setModals }