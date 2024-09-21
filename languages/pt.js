const language = {
    loadevent: "Player de evento carregado",
    loadcmd: "Comando carregado",
    ready: "conectado com sucesso.",
    loadslash: "comandos [/] recarregados com sucesso.",
    error1: "O token do bot que você inseriu no projeto é incorreto ou as intents do seu bot estão desligadas!",
    error2: "Por favor coloque o token no bot no token.js ou no seu .env do seu projeto!",
    loadclientevent: "Evento do cliente carregado",
    embed1: "Você deve ter o cargo <@&{djRole}>(DJ) definido nesse servidor para usar esse comando. Usuários sem esse cargo não podem usar o {cmdMAP}",
    message1: "Você não está conectado a um canal de voz. ❌",
    message2: "Você não está no mesmo canal de voz que eu. ❌",
    message3: "Sem permissão",
    msg4: "Algo deu errado",
    msg5: "Nenhuma música tocando no momento. ❌",
    msg6: "Salvar música",
    msg7: "Escreva o nome da playlist.",
    msg8: "Essa música está ao vivo, não há dados de duração para mostrar. 🎧",
    msg9: "**✅ Sucesso:** Dados atualizados.",
    msg10: "Você não tem uma playlist com esse nome. ❌",
    msg11: "Essa música já está nessa playlist. ❌",
    msg12: "Adicionado a sua playlist de música.",
   error3: "Erro ao recaregar os comandos de [/]: ",
   error4: "AVISO: Parece que você não escreveu a url da mongodb? Se você não inserir uma url da mongodb válida no arquivo config.js, você não poderá usar o bot.",
   msg13: `🎵 Tocando agora: **{track?.title}** -> Canal: **{queue?.connection.channel.name}** 🎧`,
   msg14: "A lista está vazia. Você pode tocar mais um pouco de música, tchau tchau... ✅",
   msg15: "Eu desconectei porque não tinha mais ninguém no meu canal. ❌",
   msg16: "Estou tendo problemas em conectar com o canal de voz. ❌ Tipo alguém me desconectou? Eu estou muito triste. 😔",
   msg17: "Não há uma música anterior! ❌",
   msg18: "Tocando agora **{queue.previousTracks[1].title}**. ✅",
   msg19: "Estatísticas do bot",
   msg20: "Recarregar",
   msg21: "**Seu tempo acabou!**",
   msg22: "**✅ Dados atualizados.**",
   msg23: "A lista está vazia. ❌",
   msg24: "A lista acabou de ser limpa. 🗑️",
   msg26: "Se você não especificar um cargo DJ, você não poderá usar o comando!",
   msg25: "O cargo DJ foi definido para <@&{role}> com sucesso.",
   msg27: "O cargo DJ foi deletado com sucoess.",
   msg28: "O cargo DJ ainda não foi definido.",
   msg29: `Por favor entre um nome de filtro válido. ❌\n{filters}`,
   msg30: `Não consegui achar um filtro com esse nome. ❌\n{filters}`,
   msg31: `Aplicado: **{filter}**, Status do filtro: **{status}**\n **Lembre-se, se a música é grande, o tempo de aplicação do filtro também  poderá ser.**`,
   msg32: "Está na fora de ouvir músic no seu servidor do Discord com uma interface complenta grátis e avançada. Bot de músca que suporta tocar música em várias plataformas que vai fazer seu servidor se sentir especial. Crie seu próprio bot de música: https://github.com/umutxyp/MusicBot",
   msg33: "Comandos do bot",
   msg34: "Você já tem um comando ativo aqui. ❌",
   msg35: "Lista de músicas",
   msg36: "Música tocando agora",
   msg37: "Fechar loop",
   msg38: "Sistema de loop",
   msg39: `> **Que tal fazer uma escolha?**
   > **Lista:** Faz um loop com a lista de músicas.
   > **Música tocando agora:** Faz um loop com a música atual.
   > **Desligar Loop:** Desliga o loop.`,
   msg40: "Modo loop",
   msg41: "Algo deu errado. ❌",
   msg42: "Música tocando agora modo loop",
   msg43: "O modo loop já está desativado. ❌",
   msg44: `Modo loop **desligado** 🔁`,
   msg45: "O tempo acabou",
   msg46: "Sitema de loop - Terminado",
   msg47: 'Salvar Playlist',
   msg48: "música pausada! ✅",
   msg49: `Ping da mensagem`,
   msg50: `Latencia da mensagem`,
   msg51: `Latencia da API`,
   msg52: `Não há nenhuma playlist. ❌`,
   msg53: `Você não tem permissão para tocar essa playlist. ❌`,
   msg54: `Você não tem uma música com esse nome. ❌`,
   msg55: `Eu não consigo entrar no seu canal de voz. ❌`,
   msg56: `Carregando playlist... ✅`,
   msg57: `<@{interaction.member.id}>, Adicionada(s) **{music_filter.length}** música(s) pra lista. ✅`,
   msg58: `Não há uma playlist com esse nome. ❌`,
   msg59: `Escreva o nome da música que você deseja procurar. ❌`,
   msg60: `Sem resultados! ❌`,
   msg61: "Carregando música(s)... 🎧",
   msg62: "Lista nomeada adicionada a playlist. ✅",
   msg63: `A lista de músicas está vazia. ❌`,
   msg64: "Lista de músicas do servidor",
   msg65: "Tocando agora",
   msg66: "Pedido por",
   msg67: "Página",
   msg68: `O processador do comando foi cancelado. ✅`,
   msg69: `Lista de músicas do servidor - O tempo acabou!`,
   msg70: `Seu tempo para usar esse comando expirou, você pode digitar \`/queue\` para usar esse comando de novo.`,
   msg71: `Algo deu errado. ❌ É como se você não tivesse parado a música antes.`,
   msg72: "Músicas despausadas! ✅",
   msg73: `Por favor insira o nome de uma música válida. ❌`,
   msg74: `Nenhum resultado encontrado! ❌`,
   msg75: "Música procurada",
   msg76: "Escolha uma música entre **1** e **{maxTracks.length}** ⬇️",
   msg77: `O processo de procurar a música foi cancelado. ✅`,
   msg78: `Carregando... 🎧`,
   msg79: "Adicionado a lista. ✅",
   msg80: `O tempo de procurar a música expirou ❌`,
   msg81: "Cancelar",
   msg82: `O número que você inseriu é maior que a quantidade de músicas na lista. ❌`,
   msg83: "Música pulada ✅",
   msg84: `Essa música está ao vivo, sem dados de duração para mostrar. 🎧`,
   msg85: `Música parada. Vejo você depois! ✅`,
   msg86: "Atualizar",
   msg87: `Volume atual: **{queue.volume}** 🔊\n**Parar mudar o volume, escreva um número entre \`1\` e \`{maxVol}\`.**`,
   msg88: `O volume desejado já é o volume atual ❌`,
   msg89: `**Escreva um número entre \`1\` e \`{maxVol}\` para trocar o volume.** ❌`,
   msg90: "Volume alterado:",
   msg91: `Escreva o nome da playlist que você deseja criar. ❌`,
   msg92: `Uma playlist com esse nome já existe. ❌`, 
   msg93: `Você não pode ter mais que 30 playlists. ❌`,
   msg94: "Criando playlist... 🎧",
   msg95: "Playlist criada! 🎧",
   msg96: `Você não tem uma playlist com esse nome. ❌`,
   msg97: "Deletando playlist... 🎧",
   msg98: "Playlist deletada! 🎧",
   msg99: `Escreva o nome da música que você deseja procurar. ❌`,
   msg100: `Escreva o nome da playlist que você deseja adicionar a música. ❌`,
   msg101: `Você não pode ter mais que {max_music} músicas em uma playlist. ❌`,
   msg102: "Carregando música(s)... 🎧",
   msg103: "Todas as músicas foram adicionadas na sua playlist! 🎧",
   msg104: `Essa música já está na playlist. ❌`,
   msg105: "adicionado a playlist! 🎧",
   msg106: `Escreva o nome da playlist que você deseja remover essa música. ❌`,
   msg107: `Você não tem uma música com esse nome. ❌`,
   msg108: "Deletando música... 🎧",
   msg109: "Música deletada! 🎧",
   msg110: "Escreva o nome da playlist que você deseja procurar. ❌",
   msg111: `Você não tem nenhuma música nessa playlist. ❌`,
   msg112: "Top das playlists públicas",
   msg113: `O seu tempo para usar esse comando expirou, você pode digitar \`/playlist top\` para usar esse comando de novo.`,
   msg114: `Não há nenhuma playlist publicaThere is no public playlist. ❌`,
   msg115: "Suas Playlists",
   msg116: `músicas`,
   msg117: `Você não tem nenhuma playlist. ❌`,
   msg118: "O seu tempo para usar esse comando expirou, você pode digitar \`/playlist list {name}\` para usar esse comando de novo.",
   msg119: "Use o comando **/play playlist <list-name>** para ouvir essas playlists.\nDigite **/playlist list <list-name>** para ver a música em uma lista.",
   msg120: "Por favor especifique um canal de texto.",
   msg121: "<#{channel}> foi adicionado a lista de canais de comando, agora os comandos do bot só podem ser usados nos canais da lista.",
   msg122: "Não há dados registrados.",
   msg123: "<#{channel}> deletado da lista de canais de comando.",
   msg124: "Esse canal já está na lista de canais de comando.",
   msg125: "Esse canal não é um canal de texto.",
   msg126: "❌ Aqui está a lista de canais que você pode usar comandos nesse servidor: {channel_filter}",
   msg127: "Comando não está definidoCommand is not defined.",
   error7: "Por favor tente esse comando novamente mais tarde. Possível bug reportado para os desenvolvedores.",
   msg128: "Você me silenciou enquanto a música estava tocando. É por isso que eu parei a música. Se você me desmutar, eu irei continuar. 😔",
   msg129: "toca",
   msg130: "Por favor insira um número válido.",
   msg131: "Parar usar os comandos da lista, você tem que votar no bot.",
   msg132: "A música não está pausada.",
   msg133: "Eu misturei a ordem da playlist.",
   msg134: "Uso incorreto. Exemplo: `5:50` | `1:12:43`",
   msg135: "O tempo de reprodução foi definido para {queue.formattedCurrentTime} com sucesso.",
   msg136: "O autoplay foi ligado com sucesso",
   msg137: "O autoplay foi desligado com sucesso",
   msg138: "You can play music easily and quickly without typing a command in the {channel}.",
embedButton:{
  button_play: "Add Music",
  input_play: "Enter the name or link of the music ",
  button_autoplay: "Auto Play",
  button_volume: "Volume",
  input_volume: "Enter the volume number from {{volMin}} to {{volMax}}",
  button_loop: "Loop",
  button_back: "Back",
  button_skip: "Skip",
  button_stop: "Stop",
  button_filter: "Select an audio filter",
  on: "On",
  off: "Off",
  start: `
  **\`🎶\`| Play New:** {{track?.title}}
  **\`⏳\`| Duration:** {{track?.formattedDuration}}
  **\`📻\`| Source:** {{track?.source}}
  **\`🎧\`| Volume:** {{queue?.volume}}
  **\`🎛\`| Filter:** {{queue?.filter}}
  **\`🤖\`| Auto Play:** {{queue?.autoMode}}
  **\`🔁\`| Loop:** {{queue?.repeatMode}}
  **\`📀\`| Songs:** {{queue?.songs}}
  **\`🎙\`| Voice:** <#{{queue?.connection.channelID}}>
  **\`👤\`| By:** {{track?.user}}
  `
}

  
}
module.exports = language;
