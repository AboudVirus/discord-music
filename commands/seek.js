const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "seek",
  description: "Set the position of the track.",
  permissions: "0x0000000000000800",
  options: [{
    name: "position",
    description: "The position to set",
    type: ApplicationCommandOptionType.String,
    required: true
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    let lang = await db?.config?.findOne({userID: interaction.user.id})//({ guildID: interaction.guild.id })
    lang = lang?.language || client.language
    lang = require(`../languages/${lang}.js`);
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })

      let position = getSeconds(interaction.options.getString("position"))
      if(isNaN(position)) return interaction.reply({ content: `${lang.msg134}`, ephemeral: true }).catch(e => { })

      queue.seek(position)
      client.functions.log(client,interaction,{
         cmd: "seek",
         tpye: "Slush",
         goal: `seek to the: ${position}s`,
         voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
         members: null
      })
      interaction.reply({ content: `${lang.msg135.replace("{queue.formattedCurrentTime}", queue.formattedCurrentTime)}`}).catch(e => { })

    } catch (e) {
     client.functions.errorNotifer(client, interaction, e, lang)
      }
  },
};

function getSeconds(str) {
    var p = str.split(':')
    var s = 0
    var m = 1
    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    return s;
}
