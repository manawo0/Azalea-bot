const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

const { Guilds, GuildMembers, GuildVoiceStates, GuildMessages, GuildMessageReactions, GuildPresences} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;
const { loadEvents } = require("./Handlers/event");
const { loadCommands } = require('./Handlers/command');

const client = new Client({
    intents: [
        Guilds,
        GuildMembers,
        GuildVoiceStates,
        GuildMessages,
        GuildMessageReactions,
        GuildPresences
    ],
    partials: [
        User,
        Message,
        GuildMember,
        ThreadMember,
        Channel
    ]
});

client.commands = new Collection()

require("dotenv").config();

module.exports = client;

client.login(process.env.DC_TOKEN).then(() => {
    loadEvents(client);
    loadCommands(client);
}).catch((err) => {
    console.error(err)
});
