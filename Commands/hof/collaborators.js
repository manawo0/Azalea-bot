const { ApplicationCommandType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "collabs",
  description: "These are the legends that helped out with Pyro.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
        const EmbedM6 = new EmbedBuilder()
        .setTitle("ImM6")
        .setDescription("Official translator for portuguese and brazilian.")
        .setFields({name: "Who is ImM6?", value: "ImM6 is a legendary dog that rarely appears.\n But whenever she appears, bright and cheers everyone up!"})
        .setColor("#ffffff")
        .setThumbnail("https://cdn.discordapp.com/avatars/789197520529260584/94f0ce4785b9123c8498b78994da6c1c.webp?size=160")

        const EmbedAndy = new EmbedBuilder()
        .setTitle("aNdy")
        .setDescription("Manages and created the official Pyro discord server.")
        .setFields({name: "Who is aNdy?", value: "aNdy the legends says that this natured power based boy is always with us."})
        .setColor("#62c134")
        .setThumbnail("https://cdn.discordapp.com/avatars/948544978026631168/328c4a5cd07b35d400d9a34a6e31dbee.webp?size=100")

        const EmbedBader = new EmbedBuilder()
        .setTitle("Bader")
        .setDescription("Official translator for arabic.")
        .setFields({name: "Who is Bader?", value: "Bader is a cheerfull and king guy who's always up to help others!"})
        .setColor("#6da3f0")
        .setThumbnail("https://cdn.discordapp.com/avatars/287558629803032576/9f9e31363221cf4243d08933ffdd45a2.webp?size=100")

        const EmbedManawo = new EmbedBuilder()
        .setTitle("Manawo")
        .setDescription("Official translator for Swedish, Danish and Russian.")
        .setFields({name: "Who is Manawo?", value: "The most creative guy you will ever seen."})
        .setColor("#0056ff")
        .setThumbnail("https://cdn.discordapp.com/avatars/985494685596385331/473f46603c05c6767ca25a25faa54af9.webp?size=100")

        const EmbedSlimy = new EmbedBuilder()
        .setTitle("Slimy")
        .setDescription("Developer, manager, creator and translator to spanish.")
        .setFields({name: "Who is Slimy?", value: "The wiggliest developer out there."})
        .setColor("#2f4441")
        .setThumbnail("https://cdn.discordapp.com/avatars/372840998918684672/3791947359a40f93faa02b442d706292.webp?size=100")

        return interaction.reply({
            embeds: [EmbedM6, EmbedAndy, EmbedBader, EmbedManawo, EmbedSlimy]
        })
  },
};
