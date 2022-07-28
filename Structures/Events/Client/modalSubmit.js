const { ModalSubmitInteraction, Client, EmbedBuilder} = require('discord.js');

module.exports = {
    name: "modalSubmit",
    on: true,
    /**
     * @param { ModalSubmitInteraction } interaction;
     * @param { Client } client;
     */
    async execute(client, interaction) {
        if(interaction.customId == "afkReasonModal") {
            const Embed = new EmbedBuilder()
            .setTitle("Test");
            
            await interaction.deferReply({ephemeral: true});

            const afkReason = interaction.getTextInputValue("afkReasonModal");
            console.log(afkReason)

            return interaction.followUp({
                embeds: [Embed]
            })
        }

        if(modal.customId != "afkReasonModal") return;
    }
}