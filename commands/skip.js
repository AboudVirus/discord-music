const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "skip",
  description: "Switches the music being played.",
  permissions: "0x0000000000000800",
  options: [{
    name: "number",
    description: "Type how many songs you want to skip.",
    type: ApplicationCommandOptionType.Number,
    required: false
  }],
  voiceChannel: true,
  run: async (client, interaction) => {
    let lang = await db?.config?.findOne({userID: interaction.user.id})//({ guildID: interaction.guild.id })
    lang = lang?.language || client.language
    lang = require(`../languages/${lang}.js`);
    try {

      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })

      let number = interaction.options.getNumber('number');
      if (number) {
        if (!queue.songs.length > number) return interaction.reply({ content: lang.msg82, ephemeral: true }).catch(e => { })
        if (isNaN(number)) return interaction.reply({ content: lang.msg130, ephemeral: true }).catch(e => { })
        if (1 > number) return interaction.reply({ content: lang.msg130, ephemeral: true }).catch(e => { })

        try {
        let old = queue.songs[0];
        await client.player.jump(interaction, number).then(async (song) => {
          await client.functions.isPlayMusic(client, queue, song); 
     client.functions.log(client,interaction,{
    cmd: "Jump",
    tpye: "Slush",
    goal: ``,
    voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
    members: null
  })
          return interaction.reply({ content: `**${old.name}**, ${lang.msg83}` }).catch(e => { })
        })
          
      } catch(e){
        return interaction.reply({ content: lang.msg63, ephemeral: true }).catch(e => { })
      }
      } else {
        try {
          let old = queue.songs[0];
          const success = await queue.skip();
          await client.functions.isPlayMusic(client, queue, queue.songs[0]); 
     client.functions.log(client,interaction,{
    cmd: "Skip",
    tpye: "Slush",
    goal: `skip`,
    voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
    members: null
  })
          return interaction.reply({ content: success ? `**${old.name}**, ${lang.msg83}` : lang.msg41 }).catch(e => { })
        } catch (e) {
          return interaction.reply({ content: lang.msg63, ephemeral: true }).catch(e => { })
        }
      }

    } catch (e) {
     client.functions.errorNotifer(client, interaction, e, lang)
      }
  },
};
