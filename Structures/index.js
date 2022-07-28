const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const {
  Guilds,
  GuildMembers,
  GuildVoiceStates,
  GuildMessages,
  GuildMessageReactions,
  GuildPresences,
} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;
const slimecmd = require("slimecommands");
const mongoose = require("mongoose");

const client = new Client({
  intents: [
    Guilds,
    GuildMembers,
    GuildVoiceStates,
    GuildMessages,
    GuildMessageReactions,
    GuildPresences,
  ],
  partials: [User, Message, GuildMember, ThreadMember, Channel],
});

client.commands = new Collection();

require("dotenv").config();

module.exports = client;

client
  .login(process.env.DC_TOKEN)
  .then(() => {
    slimecmd.load(client);

    // Set user presence
    client.user.setPresence({
      activities: [
        {
          name: "/help, all my guilds.",
        },
      ],
    });

    // Connect to db
    if (!process.env.DATABASE_URL) return;
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Client is now connected to the database");
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });
