const { EmbedBuilder, Collection, PermissionsBitField } = require('discord.js');
const ms = require('ms')
require('dotenv').config();
const cooldown = new Collection();

module.exports = {
    name: 'interactionCreate',
    on: true,
    async execute(interaction, client){
        const Command = client.commands.get(interaction.commandName);
        if(interaction.type == 4){
            if(Command.autocomplete) {
                const choices = []
                await Command.autocomplete(interaction, choices);
            }
        }

        if(!interaction.type == 2) return;

        if(!Command) return client.commands.delete(interaction.commandName)

        try {
            if(Command.cooldown) {
                if(cooldown.has(`slash-${Command.name}${interaction.user.id}`)){

                return interaction.reply({
                    content: `You're now in ${ms(`slash-${Command.name}${interaction.user.id}`) - Date.now()} cooldown!`
                })};

                if(Command.userPerms || Command.botPerms) {
                    if(!interaction.memberPermissions.has(PermissionsBitField.resolve(Command.userPerms || []))) {
                        const userPerms = new EmbedBuilder()
                        .setDescription(`🚫 ${interaction.user}, You don't have \`${Command.userPerms}\` permissions to use this command!`)
                        .setColor('Red')
                        return interaction.reply({embeds: [userPerms]})
                    }
                    if(!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(Command.botPerms || []))) {
                        const botPerms = new EmbedBuilder()
                        .setDescription(`🚫 ${interaction.user}, I don't have \`${slashCommand.botPerms}\` permissions to use this command!`)
                        .setColor('Red')
                        return interaction.reply({embeds: [botPerms]})
                    }
                }

                await Command.run(client, interaction);
                cooldown.set(`slash-${Command.name}${interaction.user.id}`, Date.now() + Command.cooldown);
                setTimeout(() => {
                    cooldown.delete(`slash-${Command.name}${interaction.user.id}`)
                }, Command.cooldown)

            } else {
                if(Command.userPerms || Command.botPerms) {
                    if(!interaction.memberPermissions.has(PermissionsBitField.resolve(Command.userPerms || []))) {
                        const userPerms = new EmbedBuilder()
                        .setDescription(`🚫 ${interaction.user}, You don't have \`${Command.userPerms}\` permissions to use this command!`)
                        .setColor('Red')
                        return interaction.reply({embeds: [userPerms]})
                    }
                    if(!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(Command.botPerms || []))) {
                        const botPerms = new EmbedBuilder()
                        .setDescription(`🚫 ${interaction.user}, I don't have \`${Command.botPerms}\` permissions to use this command!`)
                        .setColor('Red')
                        return interaction.reply({embeds: [botPerms]})
                    }
                }
                await Command.run(client, interaction)
            }

        } catch(err) {
            console.error(err)
        }
        }

    }