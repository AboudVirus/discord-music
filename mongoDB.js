const { Schema, model } = require("mongoose");

const musicbot = Schema({
  guildID: { type: String },
  role: { type: String },
  language: { type: String },
  channels: Array,
  readyVoiceChannelA: { type: String },
  readyVoiceChannelB: { type: String },
});


const playlist = Schema({
  userID: { type: String },
  playlist: Array,
  musics: Array,
});

const config = Schema({
  userID: { type: String },
  language: { type: String },
})

module.exports = {
  config: model("config", config),
  musicbot: model("music1bot", musicbot),
  playlist: model("playlist", playlist)
};
