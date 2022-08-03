const chalk = require("chalk");
const { Client, ActivityType } = require("discord.js");
require("dotenv").config();
const mongoose = require('mongoose');

module.exports = {
  name: "ready",
  on: true,
  /**
   *
   * @param { Client } client
   *
   */
  async execute(client) {
    console.log(chalk.green(`Client is now logged in`));

    client.user.setActivity({
      name: "/help | Azalea-v0.2.0-alpha", 
      type: ActivityType.Watching,
      url: "https://slimy.gitbook.io/azalea/"
    })

    // Connect to db
    if (!process.env.DATABASE_URL) return;
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(chalk.green("✅ Client is now connected to the database"));
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
