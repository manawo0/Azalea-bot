const {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
    EmbedBuilder,
} = require('discord.js')
const { detectLang } = require('../../Systems/detectLangSystem')

async function afkModalCreate(client, interaction) {
  const LangImport = await detectLang(interaction.guild.id);
  const Lang = require("../../"+LangImport);
  
  if (interaction.targetId == interaction.user.id) {
    const Modal = new ModalBuilder()
      .setTitle("AFK Reason")
      .setCustomId("afkReasonModal");

    const afkReason = new TextInputBuilder()
      .setCustomId("afkReason")
      .setLabel(`${Lang.LangSystem.modalAfkReason}`)
      .setStyle(TextInputStyle.Short);

    const firstActionRow = new ActionRowBuilder().addComponents(afkReason);

    Modal.addComponents(firstActionRow);
    await interaction.showModal(Modal);
  } else {
    const Embed = new EmbedBuilder().setTitle(
      `${Lang.LangSystem.conextModalAfkToOtherPerson}`
    );

    return interaction.reply({ embeds: [Embed] });
  }
}

module.exports = {afkModalCreate}