const { 
  ActionRowBuilder,
  Events,
  ModalBuilder,
  ButtonBuilder,
  ButtonStyle,
  TextInputBuilder,
  TextInputStyle,
} = require('discord.js');
const skip = require('../commands/skip');
const db = require("../mongoDB");

module.exports = async (client,interaction) => {
const queue = client.player.getQueue(interaction.guild.id);
const guild_me = interaction?.guild?.members?.cache?.get(client?.user?.id);
let lang = await db?.config?.findOne({userID: interaction.user.id})
  lang = lang?.language || client.language
  lang = require(`../languages/${lang}.js`).embedButton;

if (interaction.customId === "button_play") {
  const modal = new ModalBuilder()
			.setCustomId('play_music')
			.setTitle(interaction.guild.name);
  const button_play_input = new TextInputBuilder()
			.setCustomId('play_music_input')
			.setLabel(lang.input_play)
      .setPlaceholder("𝐃𝐞𝐚𝐭𝐡 𝐙𝐨𝐧𝐞 𝐋𝐢𝐨𝐧𝐬")
			.setStyle(TextInputStyle.Short)
      .setRequired(true);
  modal.addComponents(
    new ActionRowBuilder().addComponents(button_play_input)
  )
  await interaction.showModal(modal);
  client.functions.log(client,interaction,{
    cmd: "Push Button Play",
    tpye: "Button",
    goal: null,
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })
}
//

  
if (interaction.customId === "button_volume") {
  const modal = new ModalBuilder()
			.setCustomId('volume_music')
			.setTitle(interaction.guild.name);
  const button_play_input = new TextInputBuilder()
			.setCustomId('volume_music_input')
      .setLabel(lang.input_volume.replace(/{{volMin}}/,client.config.opt.minVol).replace(/{{volMax}}/,client.config.opt.maxVol))
      .setPlaceholder("𝐃𝐞𝐚𝐭𝐡 𝐙𝐨𝐧𝐞 𝐋𝐢𝐨𝐧𝐬")
      .setMaxLength(3)
      .setMinLength(2)
			.setStyle(TextInputStyle.Short)
      .setRequired(true);
  modal.addComponents(
    new ActionRowBuilder().addComponents(button_play_input)
  )
  await interaction.showModal(modal);
    client.functions.log(client,interaction,{
    cmd: "Push Button Volume",
    tpye: "Button",
    goal: null,
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })
}
 /* Autoplay Music */
if (interaction.customId === "button_autoplay") {
if (!queue || !queue?.playing) return
  queue?.toggleAutoplay()
  await client.functions.isPlayMusic(interaction.client, queue, queue.songs[0]); 
  client.functions.log(client,interaction,{
    cmd: "Autoplay",
    tpye: "Button",
    goal: "music: ["+queue.songs[0].name+"]("+queue.songs[0].url+")",
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })
  return interaction.deferUpdate({ ephemeral: true });
}
  
/*  Stop Music   */
if (interaction.customId === "button_stop") {
  if (!queue || !queue.playing) return;
if (guild_me?.voice?.channelId !== interaction?.member?.voice?.channelId) return;
  queue.stop(interaction.guild.id);
    client.functions.log(client,interaction,{
    cmd: "Stop",
    tpye: "Button",
    goal: "stop the music: ["+queue.songs[0].name+"]("+queue.songs[0].url+")",
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })
  return client.functions.isReadyPlayMusic(client, false);
}

/* Skip Music */
if (interaction.customId === "button_skip") {
    if (!queue || !queue.playing) return;
    if (guild_me?.voice?.channelId !== interaction?.member?.voice?.channelId) return;
    if (queue?.songs?.length <= 1) return interaction.deferUpdate();
       await queue.skip();
        client.functions.log(client, interaction, {
            cmd: "Skip",
            tpye: "Button",
            goal: "skip the music: [" + queue.songs[0].name + "](" + queue.songs[0].url + ")",
            voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
            members: null
        });

  return interaction.deferUpdate();
}






                                              
if (interaction.customId === "button_back") {
if (!queue || !queue.playing) return;
if (guild_me?.voice?.channelId !== interaction?.member?.voice?.channelId) return;
await queue.previous()
client.functions.log(client,interaction,{
    cmd: "Back",
    tpye: "Button",
    goal: "back to the previous music: ["+queue.songs[0].name+"]("+queue.songs[0].url+")",
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })

return interaction.deferUpdate({ ephemeral: true });
}

if (interaction.customId === "button_loop") {
if (!queue || !queue.playing) return; 
if (guild_me?.voice?.channelId !== interaction?.member?.voice?.channelId) return;
await queue.setRepeatMode(1);
await client.functions.isPlayMusic(interaction.client, queue, queue.songs[0]); 
client.functions.log(client,interaction,{
    cmd: "Loop",
    tpye: "Button",
    goal: "repeat mode on the music: ["+queue.songs[0].name+"]("+queue.songs[0].url+")",
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })
return interaction.deferUpdate({ ephemeral: true });
}


  
  
if (interaction.isModalSubmit()) {
if (interaction.customId === "play_music") return Play(client,interaction);
if (interaction.customId === "volume_music") return Volume(client,interaction);
}
                                   


if (interaction.customId === "select_filter") {
if (guild_me?.voice?.channelId !== interaction?.member?.voice?.channelId) return;
let filtre = null;
    for (const value of interaction.values) {
      if (value) {
        filtre = value;
        break; // توقف بمجرد العثور على قيمة غير فارغة
      }
    }
  if (filtre == null) return;
    if (queue?.filters?.has(filtre)) {
      queue?.filters?.remove(filtre)
      await client.functions.isPlayMusic(client, queue, queue.songs[0]);
      client.functions.log(client,interaction,{
    cmd: "Filtre",
    tpye: "Select Menu",
    goal: "Add filter `"+filtre+"` on the music: ["+queue.songs[0].name+"]("+queue.songs[0].url+")",
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })
      return interaction.deferUpdate({ ephemeral: true });
    } else {
      queue?.filters?.add(filtre)
      await client.functions.isPlayMusic(client, queue, queue.songs[0]); 
      client.functions.log(client,interaction,{
    cmd: "Filtre",
    tpye: "Select Menu",
    goal: "Remove filter `"+filtre+"` from music: ["+queue.songs[0].name+"]("+queue.songs[0].url+")",
    voice: interaction.member?.voice.channel ? `${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}` : null,
    members: null
  })

      return interaction.deferUpdate({ ephemeral: true });
    }
}
  



async function Play() {
if (guild_me?.voice?.channelId) {
if (guild_me?.voice?.channelId !== interaction?.member?.voice?.channelId) return;
const music_input = interaction.fields.getTextInputValue('play_music_input');
await interaction.deferUpdate({ ephemeral: true });  
await client.player.play(interaction.member.voice.channel, music_input, {
member: interaction.member,textChannel: null,interaction})
client.functions.log(client,interaction,{
    cmd: "Play",
    tpye: "Input",
    goal: "New Search: "+music_input,
    voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
    members: null
  })
return;
} else {
const music_input = interaction.fields.getTextInputValue('play_music_input');
await interaction.deferUpdate({ ephemeral: true });  
await client.player.play(interaction.member.voice.channel, music_input, {
member: interaction.member,textChannel: null,interaction})
client.functions.log(client,interaction,{
    cmd: "Play",
    tpye: "Input",
    goal: "search: "+music_input,
    voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
    members: null
  })
return;
}
}

async function Volume() {
if (guild_me?.voice?.channelId !== interaction?.member?.voice?.channelId) return;
const music_input = interaction.fields.getTextInputValue('volume_music_input')
let vol = parseInt(music_input)
if (queue.volume === vol) return interaction.deferUpdate({ ephemeral: true });  
if (vol == 00 || vol == 000 || vol > client.config.opt.maxVol) return   
await queue.setVolume(vol);
await client.functions.isPlayMusic(client, queue, queue.songs[0]); 
client.functions.log(client,interaction,{
    cmd: "Play",
    tpye: "Input",
    goal: `Volume up from ${queue.volume} to ${vol}`,
    voice:`${interaction.member.voice.channel}\n${interaction.member.voice.channel.name}`,
    members: null
  })
return interaction.deferUpdate({ ephemeral: true });
}




}