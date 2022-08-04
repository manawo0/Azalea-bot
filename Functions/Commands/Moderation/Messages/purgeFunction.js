const { EmbedBuilder, PermissionsBitField } = require('discord.js')

async function execPurgeFunction(client, interaction) {
    const Embed = new EmbedBuilder()
        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({dynamic: true})})
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setFooter({text: "Azalea."})

        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)){
            Embed
            .setDescription("You don't have the permission (MANAGE_MESSAGES).")
            .setColor("#ff1c19")

            return interaction.reply({embeds: [Embed], ephemeral: true});
        }
        

        let amount = interaction.options.getInteger("amount");

        if(isNaN(amount)){
            Embed
            .setDescription('**Please specify a valid amount between 1 and 100!**')
            .setColor("#ff1c19")

            return interaction.reply({embeds: [Embed], ephemeral: true})
        } 

        if(parseInt(amount) > 99) {
            Embed
            .setDescription('**I can only delete 99 messages at once!**')
            .setColor("#ff1c19")

            return interaction.reply({embeds: [Embed], ephemeral: true})
        }  else {
            try {
                let { size } = await interaction.channel.bulkDelete(amount);

                Embed
                .setDescription(`Deleted ${size} messages.`)
                .setColor("#008000")

                await interaction.reply({embeds: [Embed], ephemeral: true})
            } catch(err) {
                Embed
                .setDescription("I can't delete messages older than 14 days.")
                .setColor("#ff1c19")

                console.error(err);
                interaction.reply({embeds: [Embed], ephemeral: true})
            }
        }
}

module.exports = { execPurgeFunction }