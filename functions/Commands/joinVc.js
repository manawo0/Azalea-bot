const { EmbedBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

function joinVc(client, interaction){
        const guild = client.guilds.cache.get(interaction.guild.id)
        const member = guild.members.cache.get(interaction.member.user.id)
        const vc = member.voice.channel;

        if(!vc) {
            const embedNoVc = new EmbedBuilder()
            .setDescription(`🚫 Couldn't join to the channel, you're not in a voice channel!`)
            .setColor("Red")

            interaction.reply({
                embeds: [embedNoVc],
                ephemeral: true
            })
        } else {
            const connection = joinVoiceChannel({
                channelId: vc.id,
                guildId: guild.id,
                adapterCreator: guild.voiceAdapterCreator
            })
    
            if(!connection) {
                const embedNoVc = new EmbedBuilder()
                .setDescription(`🚫 Couldn't create the connection to the voice channel`)
                .setColor("Red")
    
                interaction.reply({
                    embeds: [embedNoVc],
                    ephemeral: true
                })
            } else {
                const embedVc = new EmbedBuilder()
                .setDescription(`Joining voice channel: ${vc.name}`)
                .setColor("Green")
    
                interaction.reply({
                    embeds: [embedVc],
                    ephemeral: true
                })
            }
        }
}

module.exports = {joinVc};