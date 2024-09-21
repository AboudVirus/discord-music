const db = require("../../mongoDB");
module.exports = async (client, queue, playlist) => {
let lang = await db?.config?.findOne({userID: playlist.user.id})//db?.musicbot?.findOne({ guildID: queue?.textChannel?.guild?.id })
lang = lang?.language || client.language
lang = require(`../../languages/${lang}.js`);
client.functions.isPlayMusic(client, queue, queue.songs[0]) 
queue?.textChannel?.send({ content: `<@${playlist.user.id}>, \`${playlist.name} (${playlist.songs.length + " " + lang.msg116})\` ${lang.msg62}` }).catch(e => { })
}
