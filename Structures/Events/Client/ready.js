const chalk = require("chalk");
const { Client } = require("discord.js");
require("dotenv").config();

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
  },
};
