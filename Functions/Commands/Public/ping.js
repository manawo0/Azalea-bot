function pingBot(client, interaction) {
  interaction.reply({
    content: `🏓 Pong! Latency: **${Math.round(client.ws.ping)} ms**`,
  });
}

module.exports = { pingBot };
