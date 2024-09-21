const db = require("../mongoDB");
module.exports = {
  name: "autoplay",
  description: "Toggle the autoplay of the queue.",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    let lang = await db?.config?.findOne({userID: interaction.user.id})//({ guildID: interaction.guild.id }).catch(e => {})
    lang = lang?.language || client.language
    lang = require(`../languages/${lang}.js`);
    try {
        const queue = client?.player?.getQueue(interaction?.guild?.id);
        if (!queue || !queue?.playing) return interaction?.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })
        queue?.toggleAutoplay()
        await client.functions.isPlayMusic(client, queue, queue.songs[0]); 
        interaction?.reply(queue?.autoplay ? lang.msg136 : lang.msg137)
      
      } catch (e) {
       client.functions.errorNotifer(client, interaction, e, lang)
        }
  },
};
