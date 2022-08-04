const {Client, CommandInteraction, EmbedBuilder} = require('discord.js')
/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interacion 
 */
async function execMembersInfo(client, interacion) {
    const { options, guild } = interacion;
    let getUser = options.getUser("user");

    let date1 = new Date().toLocaleDateString("en-us", {year: "numeric", month: "short", day: "numeric"});
    let date2 = getUser.createdAt.toLocaleDateString("en-us", {year: "numeric", month: "short", day: "numeric"});

    const Embed = new EmbedBuilder()
    .setAuthor({name: `${getUser.tag}`, iconURL: getUser.displayAvatarURL({dynamic: true})})
    .setDescription(`<@${getUser.id}>`)
    .addFields(
        {name: "ID", value: getUser.id},
        {name: "Created At", value: `**\`${getUser.createdAt.toLocaleDateString("en-us", {weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"})}\`**`},
        {name: "Join Date", value: `**\`${guild.members.cache.get(getUser.id).joinedAt.toLocaleDateString("en-us", {weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"})}\`**`},
        {name: "Fishy Account?", value: `${date1 >= date2 ? "High Risk, account created today." : "Low Risk"}`}
    )
    .setThumbnail(getUser.displayAvatarURL({dynamic: true}))
    .setColor(date1 >= date2 ? "#FF3333": "#3CFF33")
    .setFooter({text: `${client.user.tag} - ${date1}`, iconURL: `${client.user.displayAvatarURL({dynamic: true})}`})
    
    interacion.reply({embeds: [Embed]})
}

module.exports = { execMembersInfo }