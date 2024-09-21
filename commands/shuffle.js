const { EmbedBuilder } = require("discord.js")
const config = require("../config.js");
const db = require("../mongoDB");
module.exports = {
  name: "shuffle",
  description: "Shuffle the guild queue songs",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    let lang = await db?.config?.findOne({userID: interaction.user.id})//({ guildID: interaction.guild.id })
    lang = lang?.language || client.language
    lang = require(`../languages/${lang}.js`);
    try {

        const queue = client.player.getQueue(interaction.guild.id);
        if (!queue || !queue.playing) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })
        try {
          queue.shuffle(interaction)
     client.functions.log(client,interaction,{
    cmd: "Shuffle",
    tpye: "Slush",
    goal: ``,
    voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
    members: null
  })
        return interaction.reply({ content: `<@${interaction.user.id}>, ${lang.msg133}` }).catch(e => { })
        } catch(err) {
        return interaction.reply({ content: `**${err}**` }).catch(e => { })
        }
      } catch (e) {
       client.functions.errorNotifer(client, interaction, e, lang)
        }
  },
};
