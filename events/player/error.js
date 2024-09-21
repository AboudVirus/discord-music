module.exports = async (client, textChannel, e) => {
//client.functions.joinVoiceChannelReady(client,db)
await client.functions.isReadyPlayMusic(client);

if (textChannel){
   return textChannel?.send(`**An error encountered:** ${e.toString().slice(0, 1974)}`)
}
}
