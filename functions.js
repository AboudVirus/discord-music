const { joinVoiceChannel } = require('@discordjs/voice');
const {
  ActivityType,
  WebhookClient,
  ButtonStyle,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder
} = require('discord.js');  
const db = require("./mongoDB");
const { Database } = require('st.db');
const config = require('./config');
const data = new Database("data.json");

function errorNotifer(client, interaction, e, lang) {
if(client.errorLog){

    if(client.shard){
        let embed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTimestamp()
        .addFields([
            { name: "Command", value: `${interaction?.commandName}` },
            { name: "Error", value: `${e.stack}` },
            { name: "User", value: `${interaction?.user?.tag} \`(${interaction?.user?.id})\``, inline: true },
            { name: "Guild", value: `${interaction?.guild?.name} \`(${interaction?.guild?.id})\` - \`${interaction?.guild?.memberCount} members\``, inline: true },
            { name: "Time", value: `<t:${Math.floor(Date.now()/1000)}:R>`, inline: true },
            { name: "Command Usage Channel", value: `${interaction?.channel?.name} \`(${interaction?.channel?.id})\``, inline: true },
            { name: "User Voice Channel", value: `${interaction?.member?.voice?.channel?.name} \`(${interaction?.member?.voice?.channel?.id})\``, inline: true },
        ])
     client.shard.broadcastEval(async (c, { channelId, embed}) => {
           let channel = c.channels.cache.get(channelId);
           channel?.send({ embeds: [embed] }).catch(e => { })
      }, { context: { channelId: client?.errorLog, embed: embed } })

    } else {
        let embed = new EmbedBuilder()
.setColor(client.config.embedColor)
.setTimestamp()
.addFields([
    { name: "Command", value: `${interaction?.commandName}` },
    { name: "Error", value: `${e.stack}` },
    { name: "User", value: `${interaction?.user?.tag} \`(${interaction?.user?.id})\``, inline: true },
    { name: "Guild", value: `${interaction?.guild?.name} \`(${interaction?.guild?.id})\``, inline: true },
    { name: "Time", value: `<t:${Math.floor(Date.now()/1000)}:R>`, inline: true },
    { name: "Command Usage Channel", value: `${interaction?.channel?.name} \`(${interaction?.channel?.id})\``, inline: true },
    { name: "User Voice Channel", value: `${interaction?.member?.voice?.channel?.name} \`(${interaction?.member?.voice?.channel?.id})\``, inline: true },
])
client.channels.cache.get(client?.errorLog)?.send({ embeds: [embed] }).catch(e => { })
    }

    } else {
    console.log(`
    Command: ${interaction?.commandName}
    Error: ${e}
    User: ${interaction?.user?.tag} (${interaction?.user?.id})
    Guild: ${interaction?.guild?.name} (${interaction?.guild?.id})
    Command Usage Channel: ${interaction?.channel?.name} (${interaction?.channel?.id})
    User Voice Channel: ${interaction?.member?.voice?.channel?.name} (${interaction?.member?.voice?.channel?.id})
    `)
    }
    return interaction.reply({ content: `${lang.error7}\n\`${e}\``, ephemeral: true }).catch(e => { })

}


function joinVoiceChannelReady(client,db) {
setInterval(async() => {
  const queue = client.player.getQueue("1065660944845389985");
  if (!queue || !queue?.playing) {
    let data = await db.musicbot?.findOne({ guildID: "1065660944845389985"});
      if (!data?.readyVoiceChannelA) return;
      let channel_ready = await client.channels.cache.get(data.readyVoiceChannelA);
      joinVoiceChannel({
         guildId: channel_ready.guild.id,
         channelId: channel_ready.id,
         adapterCreator: channel_ready.guild.voiceAdapterCreator,
         selfDeaf: Boolean(true),
         //selfMute: Boolean(true)
      });
    console.log("is join voice: "+channel_ready.name)
  }  
}, 15000)
}

let user_play_music = {};
async function isReadyPlayMusic(client) {
  client.user.setActivity({ name: "in #✧。𝐐𝐮𝐢𝐜𝐤・سريــع"})
  const embed1 = new EmbedBuilder()
     embed1.setDescription(`>>> ${client.config.messages.ready.description}`)
     embed1.setImage("https://cdn.discordapp.com/attachments/1009234500464672839/1136537585804644374/a-dzl.gif")
     //embed1.setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL() });
  user_play_music = {};
  await UpdataMessage(client,embed1,{
    autoplay: true,
    play: false,
    volume: true,
    loop: true,
    back: true,
    skip: true,
    stop: true,
    filter: true,
    lang: require(`./languages/${client.language}.js`).embedButton,
    langUser: false
  });
}

async function isPlayMusic(client, queue, song) {
let lang = await db?.config?.findOne({ userID: song.user.id });
if (lang && lang.language) {
  lang = lang.language;
} else {
  lang = client.language;
}
var By = song.user;
if (song.user.id === client.user.id) By = "**`🤖 AutoPlay v2`**";

  lang = require(`./languages/${lang}.js`).embedButton
  client.user.setActivity({ name: song.name, type: ActivityType.Listening})
  let mesg = await lang.start.replace("{{track?.title}}",`***[\`${song?.name}\`](${song?.url})***`)
  .replace("{{queue?.volume}}",`**\`${queue.volume}\` / \`${client.config.opt.maxVol}\`**`)
  .replace('{{queue?.filter}}', `**\`${queue.filters.names.join(', ') || lang.off}\`**`)
  .replace('{{queue?.repeatMode}}',`**\`${queue.repeatMode ? lang.on : lang.off}\`**`)
  .replace("{{queue?.connection.channelID}}",queue.voice.connection.joinConfig.channelId)
  .replace("{{track?.user}}",By)
  .replace("{{track?.formattedDuration}}",`**\`${song?.formattedDuration}\`**`)
  .replace("{{track?.source}}",`**\`${song?.source}\`**`)
  .replace("{{queue?.songs}}",`**\`${queue?.songs.length}\`**`)
  .replace("{{queue?.autoMode}}",`**\`${queue?.autoplay ? lang.on : lang.off}\`**`)
  const embed = new EmbedBuilder()
  embed.setThumbnail(song.thumbnail)
  embed.setDescription(`>>> ${mesg}`);
  embed.setImage('https://cdn.discordapp.com/attachments/759630976241893435/1148906778701074483/ezgif.com-video-to-gif.gif')
  embed.setFooter({ text: `${client.user.username} ・ ${client.ws.ping}ms`, iconURL: "https://cdn.discordapp.com/attachments/932733907273674893/1136550429661081630/20230803094438150.gif" });
user_play_music[song.user.id] = +1;
  
var disabled_back = true;
var disabled_skip = false;
if (queue?.songs?.length <= 1) disabled_skip = true;
//if (user_play_music[song.user.id] <= 2) disabled_back = true;
 // if (queue.previous[0]) disabled_back = true;
  await UpdataMessage(client,embed,{
    autoplay: false,
    play: false,
    volume: false,
    loop: false,
    back: disabled_back,
    skip: disabled_skip,
    stop: false,
    filter: false,
    lang: lang,
    langUser: true
  });
}

let components = [];

async function UpdataMessage(client,embed,button) {
const button_play = new ButtonBuilder(),
  button_autoplay = new ButtonBuilder(),
  button_volume = new ButtonBuilder(),
  button_loop = new ButtonBuilder(),
  button_skip = new ButtonBuilder(),
  button_back = new ButtonBuilder(),
  button_stop = new ButtonBuilder();
  console.log("langUser: "+button.langUser)
  const msgPlay = button.langUser ? button.lang.button_play : client.config.messages.ready.button;

    button_play.setCustomId('button_play')
    button_play.setEmoji('1136515952285061130')
    button_play.setStyle(ButtonStyle.Success)
    button_play.setLabel(msgPlay);
  
    button_autoplay.setCustomId('button_autoplay')
    button_autoplay.setLabel(button?.lang?.button_autoplay)
    button_autoplay.setEmoji('1136518394254995536')
    button_autoplay.setStyle(ButtonStyle.Secondary)
    button_autoplay.setDisabled(button.autoplay);
  
		button_volume.setCustomId('button_volume')
		button_volume.setLabel(button?.lang?.button_volume)
    button_volume.setEmoji('1136516143042019501')
		button_volume.setStyle(ButtonStyle.Secondary)
    button_volume.setDisabled(button.volume);

		button_loop.setCustomId('button_loop')
		button_loop.setLabel(button?.lang?.button_loop)
    button_loop.setEmoji('1136517067659542620')
		button_loop.setStyle(ButtonStyle.Secondary)
    button_loop.setDisabled(button.loop);

		button_skip.setCustomId('button_skip')
		button_skip.setLabel(button?.lang?.button_skip)
    button_skip.setEmoji('1136517843991658536')
		button_skip.setStyle(ButtonStyle.Secondary)
    button_skip.setDisabled(button.skip);

  	button_back.setCustomId('button_back')
		button_back.setLabel(button?.lang?.button_back)
    button_back.setEmoji('1136518095150788668')
		button_back.setStyle(ButtonStyle.Secondary)
    button_back.setDisabled(button.back);

		button_stop.setCustomId('button_stop')
		button_stop.setLabel(button?.lang?.button_stop)
    button_stop.setEmoji('1136515385819156580')
		button_stop.setStyle(ButtonStyle.Danger)
    button_stop.setDisabled(button.stop);

  const select = new StringSelectMenuBuilder()
			.setCustomId('select_filter')
			.setPlaceholder(button?.lang?.button_filter)
      //.setEmoji('1136516354908893194')
      .setDisabled(button.filter)
      .addOptions(
				new StringSelectMenuOptionBuilder().setLabel('3D').setValue('3d'),
				new StringSelectMenuOptionBuilder().setLabel('Bassboost').setValue('bassboost'),
        new StringSelectMenuOptionBuilder().setLabel('Echo').setValue('echo'),
				new StringSelectMenuOptionBuilder().setLabel('Karaoke').setValue('karaoke'),
        new StringSelectMenuOptionBuilder().setLabel('Vaporwave').setValue('vaporwave'),
				new StringSelectMenuOptionBuilder().setLabel('Flanger').setValue('flanger'),
        new StringSelectMenuOptionBuilder().setLabel('Gate').setValue('gate'),
				new StringSelectMenuOptionBuilder().setLabel('Haaa').setValue('haaa'),
        new StringSelectMenuOptionBuilder().setLabel('Reverse').setValue('reverse'),
				new StringSelectMenuOptionBuilder().setLabel('Surround').setValue('surround'),
        new StringSelectMenuOptionBuilder().setLabel('Mcompand').setValue('mcompand'),
        new StringSelectMenuOptionBuilder().setLabel('Phaser').setValue('phaser'),
        new StringSelectMenuOptionBuilder().setLabel('Tremolo').setValue('tremolo'),
        new StringSelectMenuOptionBuilder().setLabel('Earwax').setValue('earwax'),
        )
    
 if (!button.play || !button.loop || !button.volume) {
    const buttons_1 = new ActionRowBuilder();

    buttons_1.addComponents(button_play);
    if (!button.loop) buttons_1.addComponents( button_loop );
    if (!button.volume) buttons_1.addComponents(button_volume);

    components.push(buttons_1);
}

if (!button.back || !button.skip || !button.stop) {
    const buttons_2 = new ActionRowBuilder();
     buttons_2.addComponents(button_autoplay)
    if (!button.back) buttons_2.addComponents(button_back);
    if (!button.skip) buttons_2.addComponents(button_skip);
    if (!button.stop) buttons_2.addComponents(button_stop);

    components.push(buttons_2);
}
  
if (!button.filter) {
    const selectMenu = new ActionRowBuilder();
    selectMenu.addComponents(select);

    components.push(selectMenu);
}

    let channel = await client.channels.cache.get(client.config.messages.CID)
    embed.setColor("#c700ff")
let message;
try {
  message = await channel.messages.fetch(data.get({key:"messageID"}));
} catch (error) {
  console.error(error);
}
  
if (!message) {
  await channel.send({ content: null, embeds: [embed], components: components }).then(async(mesg)=>{
   components = [];
  await data.set({key:"messageID",value: mesg.id}) 
  });
  
} else {
  await message.edit({ content: null, embeds: [embed], components: components }).then(async()=> components = [])
}
 components = [];
  
}


async function errorLog(client,error) {
//let channel = await client.channels.cache.get(client.config.errorLog)  
const webhook = new WebhookClient({url:config.webhooks.error});
webhook.send({
  content: "**Error occurred in:** <@"+client.user+">\n"+new Date()+"\n```js"+error+"```"
})
}


async function log(client,interaction,data) {
const embedLog = new EmbedBuilder()
embedLog.setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
embedLog.addFields(
  {name: "Command", value: "```"+data.cmd+"```", inline:true},
  {name: "Tpye", value: "```"+data.tpye+"```",inline:true},
  {name: "Goal", value: `${data.goal}`, inline:true},
  {name: "Voice", value: `${data.voice}`,inline:true},
  {name: "Members", value: `${data.members}`,inline:true},
  {name: "Date", value: `${new Date()}` ,inline:true}
)
embedLog.setFooter({ text: `(ID: ${interaction.user.id} )`});
embedLog.setTimestamp()
const webhooklog = new WebhookClient({url:config.webhooks.log});
/* webhooklog.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL(),
  embeds: [embedLog]
}) */
}


function eventsLog(client,by,reason) {
 let botNmae = client.user.tag || "";
let botAvatar = client.user.displayAvatarURL({ dynamic: true }) || "https://cdn.discordapp.com/avatars/707735156823425124/d199fc67c13b03e92008d3cd665f2061.webp";

const embed = new EmbedBuilder()
embed.setAuthor({name: botNmae,iconURL: botAvatar})
embed.setThumbnail("https://media.tenor.com/DpES2kBXqk0AAAAM/reset-obywatelski.gif")
embed.setDescription(`🟢 It has been restarted ${client.user} 
**Ping: \`${client.ws.ping}MS\`**
**CPU: \`${process.cpuUsage().user}\` | System: \`${process.cpuUsage().system}\`**
**MEMORY: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\` | Rss: \`${(process.memoryUsage().rss / 1048576).toFixed()}MB\` | Total: \`${process.memoryUsage().heapTotal}KB\` | External: \`${process.memoryUsage().external}KB\`**
**Date: \`${new Date()}\`**
**By: ${by}**
`)
if (reason) embed.addFields({name: "Reason", value: `**\`\`\`${reason}\`\`\`**`})
const webhook = new WebhookClient({url:config.webhooks.event});
webhook.send({embeds: [embed]}) 
}


module.exports = {
  log,
  eventsLog,
  errorNotifer,
  errorLog,
  joinVoiceChannelReady,
  isReadyPlayMusic,
  isPlayMusic
};
