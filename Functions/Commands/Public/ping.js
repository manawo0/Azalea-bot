const { detectLang } = require('../Systems/detectLangSystem');

async function pingBot(client, interaction) {
  const LangImport = await detectLang(interaction.guild.id);
  const Lang = require("../"+LangImport);
 
  interaction.reply({
    content: `🏓 ${Lang.ping.pingMsg} **${Math.round(client.ws.ping)} ms**`,
  });
}

module.exports = { pingBot };
