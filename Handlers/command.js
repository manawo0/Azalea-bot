const fs = require('fs');
const chalk = require('chalk');
const { PermissionsBitField } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest')

const AsciiTable = require('ascii-table');
const table = new AsciiTable().setHeading("Command", "Status");

require('dotenv').config();

const token = process.env.DC_TOKEN;
const clientId = process.env.CLIENT_ID;
const rest = new REST({version: '9'}).setToken(token);

function loadCommands(client){
    const Commands = [];

    fs.readdirSync('./Commands/').forEach(async dir => {
        const files = fs.readdirSync(`./Commands/${dir}`).filter(file => file.endsWith('.js'));

        for(const file of files){
            const command = require(`../Commands/${dir}/${file}`);
            Commands.push({
                name: command.name,
                description: command.description,
                type: command.type,
                options: command.options ? command.options : null,
                default_permission: command.default_permission ? command.default_permission : null,
                default_member_permissions: command.default_member_permissions ? PermissionsBitField.resolve(command.default_member_permissions).toString() : null
            });

            if(command.name) {
                client.commands.set(command.name, command);
                table.addRow(file, '✅ Command Loaded')
            } else {
                table.addRow(file, '❌ Couldn\'t load command');
            }
        }
    });

    console.log(chalk.red(table.toString()));

    // Register SlashCommand in the guild //
    (async () => {
        try {
            await rest.put(
                process.env.GUILD_ID ?
                Routes.applicationGuildCommands(clientId, process.env.GUILD_ID) :
                Routes.applicationCommands(clientId), 
                { body: Commands }
            );
            console.log(chalk.yellow('Slash Commands • Registered'))
        } catch (error) {
            console.log(error);
        }
    })();
}

module.exports = { loadCommands };