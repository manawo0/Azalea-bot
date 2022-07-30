const DB = require("../../../Structures/Schemas/AFKSystem");
const { EmbedBuilder } = require("discord.js");
const {
  detectLang,
} = require("../../../Functions/Commands/Systems/detectLangSystem");

async function afkSystem(message) {
  const LangImport = await detectLang(message.guild.id);
  const Lang = require("../" + LangImport);
  if (message.author.bot) return;

  if (!message.mentions.members.size) {
    await DB.deleteOne({
      GuildID: message.guild.id,
      UserID: message.author.id,
    });
  }

  if (message.mentions.members.size) {
    const Embed = new EmbedBuilder().setColor("#ff1c19");
    message.mentions.members.forEach((m) => {
      DB.findOne(
        { GuildID: message.guild.id, UserID: m.id },
        async (err, data) => {
          if (err) throw err;
          if (data) {
            const mapObj = {
              user: m,
              time: `<t:${data.Time}:R>`,
              status: data.Status,
            };
            // `${m} went afk <t:${data.Time}:R>\n **Status**: ${data.Status}`
            Embed.setDescription(
              Lang.afkSystem.mentionAfk.replace(
                /\b(?:user|time|status)\b/gi,
                (matched) => mapObj[matched]
              )
            ).setThumbnail(m.avatarURL());
            return message.reply({ embeds: [Embed] }).then((msg) => {
              setTimeout(() => msg.delete(), 5000);
            });
          }
        }
      );
    });
  }
}

module.exports = { afkSystem };
