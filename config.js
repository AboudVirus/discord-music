require('dotenv').config()
module.exports = {
TOKEN: process.env['token'],
ownerID: ["627167587121233931"], //write your discord user id. example: ["id"] or ["id1","id2"]
botInvite: "", //write your discord bot invite.
supportServer: "", //write your discord bot support server invite.
mongodbURL: process.env['mongodbURL'], //write your mongodb url.
status: '',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it, ja
embedColor: "ffa954", //hex color code
errorLog: "1227076161113292854", //write your discord error log channel id.
  
webhooks: {
  log: process.env.webhook_log,
  error: process.env.webhook_log_error,
  event: process.env.webhook_log_events
},

sponsor: {
status: true, //true or false
url: "", //write your discord sponsor url.
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: true //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: true, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: true, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 5000, //1000 = 1 second 10000000  
},

},
minVol: 10,
maxVol: 150, //You can specify the maximum volume level.

},

messages: {
  MID: "1146803622303240262",
  CID: "1124999032687837264",
  ready: {
    description: `**- مرحبًا ، أنا جاهز لتشغيل الموسيقى ، استخدم الأزرار أدناه 
    - Hi, I'm ready to play the music, use the buttons belo
    - Hey, müzik çalmaya hazırım, aşağıdaki düğmeleri kullan
    **`,
    button: 'Oynat・Play・تشغيل'
 },

  play: `
  **\`🎶\`| Play New:** {{track?.title}}
  **\`⏳\`| Duration:** {{track?.formattedDuration}}
  **\`📻\`| Source:** {{track?.source}}
  **\`🎧\`| Volume:** {{queue?.volume}}
  **\`🎛\`| Filter:** {{queue?.filter}}
  **\`🔁\`| Loop:** {{queue?.repeatMode}}
  **\`📀\`| Songs:** {{queue?.songs}}
  **\`🎙\`| Voice:** <#{{queue?.connection.channelID}}>
  **\`👤\`| By:** {{track?.user}}
  `
}

  
}
