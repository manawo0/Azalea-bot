const { Message } = require("discord.js");
const { afkSystem } = require("../../../Functions/Commands/Systems/afkSystem");
module.exports = {
  name: "messageCreate",
  on: true,
  /**
   *
   * @param {Message} message
   */
  async execute(message) {
    afkSystem(message);
  },
};
