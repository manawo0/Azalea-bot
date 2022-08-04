const { CommandInteraction, EmbedBuilder } = require("discord.js");
const DB = require("../../Structures/Schemas/LanguageSystem");
const {
  detectLang,
} = require("../../Functions/Commands/Systems/detectLangSystem");

module.exports = {
  name: "lang",
  description: "Configure the language settings on your server",
  options: [
    {
      name: "set",
      type: 1,
      description: "Sets the language of your server by country code.",
      options: [
        {
          name: "language",
          description: "Language to choose",
          type: 3,
          choices: [
            { name: "Spanish", value: "es" },
            { name: "English", value: "en" },
            {name: "Portuguese", value: "pt"},
            {name: "Russian", value: "ru"},
            {name: "Swedish", value: "se"},
            {name: "Danish", value: "dk"},
            {name: "Arabic", value: "ar"},
			{name: "Polish", value: "pl"}
          ],
        },
      ],
    },
    {
      name: "help",
      type: 1,
      description: "Get help for using the lang command",
    },
  ],
  /**
   * @param { CommandInteraction } interacion
   */
  run: async (client, interacion) => {
    const { guild, options } = interacion;
    const LangImport = await detectLang(guild.id);
    const Lang = require(LangImport);

    const Embed = new EmbedBuilder().setThumbnail(guild.iconURL());

    const setLang = options.getString("language");
    try {
      switch (options._subcommand) {
        case "set": {
          if (setLang == "en" || setLang == "es" || setLang == "pt" || setLang == "dk" || setLang == "ru" || setLang == "se" || setLang == "ar" || setLang == "pl") {
            await DB.findOneAndUpdate(
              {
                GuildID: guild.id,
              },
              {
                LanguageID: setLang,
              },
              {
                upsert: true,
              }
            );

            Embed.setColor("#008000").setDescription(
              `${Lang.LangSystem.botLanguage}**${setLang}**`
            );
          } else {
            Embed.setColor("#ff1c19")
              .setDescription(`${Lang.LangSystem.botLangNotSupported}`)
              .setFields(
                {
                  name: `${Lang.LangSystem.supLangTitle}`,
                  value: `${Lang.LangSystem.supLangs}`,
                },
                {
                  name: `${Lang.LangSystem.howToUseTitle}`,
                  value: `${Lang.LangSystem.howToUseDesc}`,
                }
              );
          }
          return interacion.reply({ embeds: [Embed], ephemeral: true });
        }

        case "help": {
          Embed.setColor("#5dade2")
            .setDescription(`${Lang.LangSystem.howToUseHelp}`)
            .setFields({
              name: `${Lang.LangSystem.howToUseTitle}`,
              value: `${Lang.LangSystem.howToUseDesc}`,
            });
          return interacion.reply({ embeds: [Embed], ephemeral: true });
        }
      }
    } catch (err) {
      console.error(err);
    }
  },
};
