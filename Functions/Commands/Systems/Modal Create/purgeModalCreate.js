const { EmbedBuilder, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle, PermissionsBitField } = require('discord.js');

async function purgeModalCreate(client, interaction) {
    const Embed = new EmbedBuilder()
      .setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setFooter({ text: "Azalea." });

    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      Embed.setDescription(
        "You don't have the permission **MANAGE_MESSAGES**."
      ).setColor("#ff1c19");

      return interaction.reply({ embeds: [Embed], ephemeral: true });
    }

    const Modal = new ModalBuilder()
      .setTitle("Amount of Messages")
      .setCustomId("purgeModal");

    const amountMessages = new TextInputBuilder()
      .setCustomId("purgeAmountMessages")
      .setLabel(`How many messages do you want to delete?`)
      .setStyle(TextInputStyle.Short)
      .setMinLength(1)
      .setMaxLength(2)
      .setPlaceholder("Only a number between 1 and 99");

    const firstActionRow = new ActionRowBuilder().addComponents(amountMessages);

    Modal.addComponents(firstActionRow);
    await interaction.showModal(Modal);
}

module.exports = { purgeModalCreate }