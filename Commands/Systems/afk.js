const { CommandInteraction, EmbedBuilder } = require("discord.js");
const DB = require("../../Structures/Schemas/AFKSystem");
const {
  detectLang,
} = require("../../Functions/Commands/Systems/detectLangSystem");

module.exports = {
  name: "afk",
  description: "A multi-guilded afk",
  options: [
    {
      name: "set",
      type: 1,
      description: "Sets your afk status.",
      options: [
        {
          name: "status",
          description: "Set your status.",
          type: 3,
        },
      ],
    },
    {
      name: "return",
      type: 1,
      description: "Return from being AFK.",
    },
  ],
  /**
   *
   * @param { CommandInteraction } interaction
   */
  run: async (client, interaction) => {
    const { guild, options, user, createdTimestamp } = interaction;

    // Detect Language and import the things needed
    const LangImport = await detectLang(guild.id);
    const Lang = require(LangImport);

    const embed = new EmbedBuilder()
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setAuthor({ name: user.tag });

    const afkStatus = options.getString("status");

    try {
      switch (options._subcommand) {
        case "set": {
          await DB.findOneAndUpdate(
            {
              GuildID: guild.id,
              UserID: user.id,
            },
            {
              Status: afkStatus,
              Time: parseInt(createdTimestamp / 1000),
            },
            {
              upsert: true,
            }
          );

          embed
            .setColor("#008000")
            .setDescription(`${Lang.afkSystem.setAfkStatus}`)
            .setFields({
              name: `${Lang.afkSystem.setStatusAfk}`,
              value: afkStatus,
            })
            .setFooter({ text: `${Lang.afkSystem.setBotDoUserMentionAfk}` });

          return interaction.reply({
            embeds: [embed],
          });
        }
        case "return": {
          await DB.deleteOne({ GuildID: guild.id, UserID: user.id });
          embed
            .setColor("#ff1c19")
            .setDescription(`${Lang.afkSystem.removeAfkStatus}`);

          return interaction.reply({
            embeds: [embed],
            ephemeral: true,
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  },
};
