const db = require("../../mongoDB");
module.exports = async (client, queue, song) => {
let lang = await db?.config?.findOne({userID: song.user.id})//db?.musicbot?.findOne({ guildID: queue?.textChannel?.guild?.id })
lang = lang?.language || client.language
lang = require(`../../languages/${lang}.js`);
client.functions.isPlayMusic(client, queue, queue.songs[0]) 
queue?.textChannel?.send({ content: `<@${song.user.id}>, **${song.name}** ${lang.msg79}` }).catch(e => { })
}
