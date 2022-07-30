const {
    Client,
    ContextMenuInteraction,
    ApplicationCommandType,
    EmbedBuilder,
  } = require("discord.js");
  const DB = require("../../Structures/Schemas/AFKSystem");
  const {
    detectLang,
  } = require("../../Functions/Commands/Systems/detectLangSystem");
  
  module.exports = {
    name: "Return being AFK",
    type: ApplicationCommandType.User,
    /**
     * @param { Client } client
     * @param { ContextMenuInteraction } interaction
     */
    run: async (client, interaction) => {
        const LangImport = await detectLang(interaction.guild.id);
        const Lang = require(LangImport);

        await DB.deleteOne({ GuildID: interaction.guild.id, UserID: interaction.user.id });

        const Embed = new EmbedBuilder()
        .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
        .setAuthor({ name: interaction.user.tag })
        .setColor("#ff1c19")
        .setDescription(`${Lang.afkSystem.removeAfkStatus}`);

        return interaction.reply({
            embeds: [Embed],
            ephemeral: true,
          });
    }
  };
  