const { EmbedBuilder } = require('discord.js');
const DB = require("../../../Structures/Schemas/AFKSystem");
const { detectLang } = require('../../../Functions/Commands/Systems/detectLangSystem');

async function submitModalAfkSystem(client, interaction) {
    const LangImport = await detectLang(interaction.guild.id);
    const Lang = require("../"+LangImport);

    const Embed = new EmbedBuilder()
    .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
    .setAuthor({ name: interaction.user.tag });


    await interaction.deferReply();
    const afkReason = interaction.fields.getTextInputValue("afkReason");

    if(afkReason) {
        await DB.findOneAndUpdate(
            {
                GuildID: interaction.guild.id,
                UserID: interaction.user.id
            }, {
                Status: afkReason,
                Time: parseInt(interaction.createdTimestamp / 1000)
            }, {
                upsert: true
            }
        )

        Embed.setColor("#008000")
        .setDescription(`${Lang.afkSystem.setAfkStatus}`)
        .setFields({
          name: `${Lang.afkSystem.setStatusAfk}`,
          value: afkReason,
        })
        .setFooter({ text: `${Lang.afkSystem.setBotDoUserMentionAfk}` });
    }

    return interaction.followUp({
        embeds: [Embed]
    })

}

module.exports = { submitModalAfkSystem }