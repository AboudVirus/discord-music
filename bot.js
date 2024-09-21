const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { DeezerPlugin } = require("@distube/deezer");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { YouTubePlugin } = require("@distube/youtube");
const { DirectLinkPlugin } = require("@distube/direct-link");
const functions = require("./functions.js")
const config = require("./config.js");
const fs = require("fs");
const client = new Client({
  partials: [
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.User, // for discord user
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.isPlay = new Set();
client.functions = functions;
client.config = config;
client.player = new DisTube(client, {
  leaveOnStop: config.opt.voiceConfig.leaveOnStop,
  leaveOnFinish: config.opt.voiceConfig.leaveOnFinish,
  emitNewSongOnly: true,// 
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  savePreviousSongs: true,
  plugins: [
    new SpotifyPlugin(),
    new SoundCloudPlugin(),
    new YtDlpPlugin(),
    new DeezerPlugin(),
    new YouTubePlugin(),
    new DirectLinkPlugin()
  ],
});

const player = client.player;
client.language = config.language || "en";
let lang = require(`./languages/${config.language || "en"}.js`);

client.on("logCommands",async data =>{
  //console.log(data)
const { MessageEmbed , WebhookClient } = require("discord.js");
const webhook = new WebhookClient({url:"https://canary.discord.com/api/webhooks/933170801031651328/NlEGM3c1ukr3-GTkklaUKgifSuTvDAXFFXEY7973UBkHim8Smf60Baa6SfNKnTEXU0l0"});
const embed = new MessageEmbed()
   
  embed.setColor(data.user.displayHexColor)//(0xF70000)
  embed.setTimestamp()
  embed.setThumbnail(data.user.displayAvatarURL())
  embed.setFooter(data.user.tag,data.user.displayAvatarURL())
  embed.setAuthor({ name:data.guild.name, iconURL:data.guild.iconURL() })
  embed.addFields([
    {name:"Command", value:`**${data.command}**`},
    {name:"Ping", value:`**${Math.round(client.ws.ping)}ms**`, inline:true },
    {name:"Args", value:`**${data.args}**`},
    {name:"Channel Text", value:`**${data.textChannel}**\n${data.textChannel.name}`, inline: true },
    {name:"Channel Voice", value:`**${data.voiceChannel}**\n${data.voiceChannel.name}`, inline: true },
    {name:"Date", value:`**${new Date()}**`}
    ])
   await webhook.send({ 
      content: "```userID: "+data.user.id+"```",
      username: client.user.username,
      avatarURL: client.user.displayAvatarURL(),
      embeds:[embed],
    })
})


fs.readdir("./events", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`${lang.loadclientevent}: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

fs.readdir("./events/player", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const player_events = require(`./events/player/${file}`);
    let playerName = file.split(".")[0];
    console.log(`${lang.loadevent}: ${playerName}`);
    player.on(playerName, player_events.bind(null, client));
    delete require.cache[require.resolve(`./events/player/${file}`)];
  });
});

client.commands = [];
fs.readdir(config.commandsDir, (err, files) => {
  if (err) throw err;
  files.forEach(async (f) => {
    try {
      if (f.endsWith(".js")) {
        let props = require(`${config.commandsDir}/${f}`);
        client.commands.push({
          name: props.name,
          description: props.description,
          options: props.options,
        });
        console.log(`${lang.loadcmd}: ${props.name}`);
      }
    } catch (err) {
      console.log(err);
    }
  });
});

client.on("interactionCreate", async interaction => {
	if (!interaction.isModalSubmit()) return;
	if (interaction.customId === 'myModal') {
    const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
		await interaction.reply({ content: 'Your submission was received successfully!\n```'+favoriteColor+"```" });
	}
});

if (config.TOKEN || process.env.TOKEN) {
  client.login(config.TOKEN || process.env.TOKEN).catch((e) => {
    console.log(lang.error1);
  });
} else {
  //setTimeout(() => {
    console.log(lang.error2);
  //}, 2000);
}


if(config.mongodbURL || process.env.MONGO){
  const mongoose = require("mongoose")
  mongoose.connect(config.mongodbURL || process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(async () => {
    console.log(`Connected MongoDB`)
  }).catch((err) => {
    console.log("\nMongoDB Error: " + err + "\n\n" + lang.error4)
    })
  } else {
  console.log(lang.error4)
  }


process.on('uncaughtException', (error) => {
  return client.functions.errorLog(client,error),console.error(error);
})
process.on('unhandledRejection', (error) => {
  return client.functions.errorLog(client,error),console.error(error);
})
process.on('rejectionHandled', (error) => {
  return client.functions.errorLog(client,error),console.error(error);
})

//console.log(process.env)
const express = require("express");
const app = express();
const http = require("http");


app.put('/restart', async (request, response) => {
  const by = request.query.by;
  if (!by) return;
  try {
    await client.destroy();

    client.login(config.TOKEN || process.env.TOKEN)
      .then(() => {
        console.log('Bot has been restarted by '+by);
        client.functions.eventsLog(client,`<@${by}> (ID:\`${by}\`)`,request.query.reason)
        client.functions.isReadyPlayMusic(client);
        response.status(200).json({ error: false, message: 'Bot has been restarted' });
      })
      .catch((e) => {
        console.log(lang.error1);
        response.status(500).json({ error: true, message: lang.error1 });
      });
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: true, message: err.message });
  }
});

app.listen(process?.env?.PORT);
