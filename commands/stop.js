const db = require("../mongoDB");
module.exports = {
  name: "stop",
  description: "Plays the previous music again.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    let lang = await db?.config?.findOne({userID: interaction.user.id})//({ guildID: interaction.guild.id })
    lang = lang?.language || client.language
    lang = require(`../languages/${lang}.js`);

    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })
      queue.stop(interaction.guild.id);
      await client.functions.isReadyPlayMusic(client, false);
     client.functions.log(client,interaction,{
    cmd: "Stop",
    tpye: "Slush",
    goal: ``,
    voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
    members: null
  })
      return interaction.reply({ content: lang.msg85 }).catch(e => { })

    } catch (e) {
    client.functions.errorNotifer(client, interaction, e, lang)
      }
  },
};
