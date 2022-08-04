const {
  EmbedBuilder,
  Client,
  ContextMenuCommandInteraction,
} = require("discord.js");
/**
 *
 * @param { Client } client
 * @param { ContextMenuCommandInteraction } interaction
 *
 */
async function submitPurgeModal(client, interaction) {
  const Embed = new EmbedBuilder()
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
    });

  const msgAmount = interaction.fields.getTextInputValue("purgeAmountMessages");

  let { size } = await interaction.channel.bulkDelete(msgAmount);

  Embed.setColor("#008000")
    .setDescription(`Deleted ${size} messages`)
    .setFooter({ text: `Azalea.` });

  return interaction.reply({
    embeds: [Embed],
    ephemeral: true,
  });
}

module.exports = { submitPurgeModal };
