const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  PresenceUpdateStatus,
  Presence,
  ReactionManager
} = require("discord.js");

const {
  Guilds,
  GuildMembers,
  GuildVoiceStates,
  GuildMessages,
  GuildMessageReactions,
  GuildPresences,
} = GatewayIntentBits;

const { User, Message, GuildMember, ThreadMember, Channel, Reaction } = Partials;
const slimecmd = require("slimecommands");

const client = new Client({
  intents: [
    Guilds,
    GuildMembers,
    GuildVoiceStates,
    GuildMessages,
    GuildMessageReactions,
    GuildPresences,
    GuildMessageReactions
  ],
  partials: [User, Message, GuildMember, ThreadMember, Channel, PresenceUpdateStatus, Presence, Reaction],
});

client.commands = new Collection();

require("dotenv").config();

module.exports = client;
client
  .login(process.env.DC_TOKEN)
  .then(() => {

    slimecmd.load(client);

  })
  .catch((err) => {
    console.error(err);
  });