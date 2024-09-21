const language = {
    loadevent: "Загружено событие плеера",
    loadcmd: "Команда загружена.",
    ready: " успешно подключено.",
    loadslash: "Перезагрузка [/] команд прошла успешно.",
    error1: "Токен бота, который вы ввели в свой проект, либо неправильный или НАМЕРЕНИЯ вашего бота ВКЛЮЧЕНЫ!",
    error2: "Пожалуйста, установите токен бота в token.js или в файле .env в вашем проекте!",
    loadclientevent: "Kлиентское Событие Загружено",
    embed1: "Вы должны иметь роль <@&{djRole}>(DJ), установленная на этом сервере для использования этой команды. Пользователем без этой роли команда {cmdMAP} нельзя использовать.",
    message1: "Вы не подключились к звуковому каналу. ❌",
    message2: "Вы не в том же звуковом канале как и я. ❌",
    message3: "Отсутствие разрешения",
    msg4: "Что-то прошло не так.",
    msg5: "В данный момент музыка не воспроизводится. ❌",
    msg6: "Сохранить музыку",
    msg7: "Введите имя плейлист.",
    msg8: "Эта музыка транслируется в прямом эфире, нет данных о длительности для отображения. 🎧",
    msg9: "**✅ Успех:** Данные о времени обновлены..",
    msg10: "У вас нет плейлиста с таким названием. ❌",
    msg11: "Эта музыка уже в плейлисте. ❌",
    msg12: "Добавлена в плейлист.",
   error3: "Произошла ошибка при загрузки [/] команд: ",
   error4: "ПРЕДУПРЕЖДЕНИЕ: Кажется, вы не ввели ссылку Mongodb. Если не введёте действительный ссылку Mongodb в config.js, вы не сможете использовать этот бот.",
   msg13: `🎵 Сейчас воспроизведёт: **{track?.title}** -> Канал: **{queue?.connection.channel.name}** 🎧`,
   msg14: "Oчередь пуста. Вы можете воспроизвести музыку, пока-пока... ✅",
   msg15: "Я отключился, так как в моем канале никого нет. ❌",
   msg16: "Испытываю проблемы с подключением к голосовому каналу. ❌ Как будто кто-то меня отключил от канала? Мне очень грустно. 😔",
   msg17: "Нет предыдущего трека! ❌",
   msg18: "Сейчас произведётся **{queue.previousTracks[1].title}**. ✅",
   msg19: " Bot Statistics",
   msg20: "Перезагрузить",
   msg21: "**Ваше время истекло!**",
   msg22: "**✅ Данные обновлены.**",
   msg23: "Очередь пуста. ❌",
   msg24: "Очередь только что была очищена. 🗑️",
   msg26: "Если не укажите роль DJ, вы не сможете использовать эту команду!",
   msg25: "Роль DJ успешно установлена на <@&{role}>.",
   msg27: "Роль DJ успешно удалена.",
   msg28: "Роль DJ ещё не установлена.",
   msg29: `Пожалуйста, введите действительное название фильтраPlease enter a valid filter name. ❌\n{filters}`,
   msg30: `Не удалось найти фильтр с таким названием. ❌\n{filters}`,
   msg31: `Применяем: **{filter}**, Статус Фильтра: **{status}**\n **Запомните, если музыка длинная, время применения фильтра может соответственно увеличится.**`,
   msg32: "Теперь пришло время слушать музыку на вашем Дискорд сервере с совершенно бесплатным и продвинутным интерфейсом. Музыкальный бот, поддерживающий воспроизведение музыки на многих платформах, сделает ваш сервер особенным. Создайте собственного музыкального бота: https://github.com/umutxyp/MusicBot",
   msg33: "Бот-Команды",
   msg34: "У вас уже активная команда. ❌",
   msg35: "Очередь",
   msg36: "Сейчас музыка воспроизводится",
   msg37: "Выключать Цикл",
   msg38: "Система Цикла",
   msg39: `> **Как насчет того, чтобы сделать выбор?**
   > **Очередь:** Зацикливает очередь.
   > **Сейчас воспроизведётся:** Зацикливает текущую музыку.
   > **Выключать Цикл:** Выключает цикл.`,
   msg40: "Режим Цикла Очереди",
   msg41: "Что-то прошло не так. ❌",
   msg42: "Теперь музыка воспроизведётся в режиме цикла.",
   msg43: "Режим цикла уже выключен. ❌",
   msg44: `Режим Цикла **Выключен** 🔁`,
   msg45: "Время истекло",
   msg46: "Система Цикла - Ended",
   msg47: 'Сохранить плейлист',
   msg48: "музыка приостановлена! ✅",
   msg49: `Скорость Сообщения`,
   msg50: `Скорость Ответа Сообщения`,
   msg51: `Скорость Ответа API`,
   msg52: `Здесь плейлиста нет. ❌`,
   msg53: `У вас нет разрешения для использования этого плейлиста.❌`,
   msg54: `У вас уже нет музыки с таким названием. ❌`,
   msg55: `Не могу подключиться к вашему звуковому каналу. ❌`,
   msg56: `Идёт загрузка плейлиста... ✅`,
   msg57: `<@{interaction.member.id}>, Добавлено **{music_filter.length}** треки в очередь. ✅`,
   msg58: `Здесь нет плейлиста с таким названием.. ❌`,
   msg59: `Введите название трека, который вы хотите искать. ❌`,
   msg60: `Результатов не найдены! ❌`,
   msg61: "Идёт загрузка музыки... 🎧",
   msg62: "именованный список добанлен в плейлист. ✅",
   msg63: `Очередь пуста. ❌`,
   msg64: "Музыковый Список Сервера",
   msg65: "Сейчас Воспроизведётся",
   msg66: "По запросу",
   msg67: "Страница",
   msg68: `Командный процессор отменена. ✅`,
   msg69: `Музыковый Список Сервера - Время Истекло!`,
   msg70: `Ваше время вышло для использования этой команды, вы можете печатать \`/queue\` чтобы опять пользоваться этой командой.`,
   msg71: `Что-то прошло не так. ❌ Как будто вы не останавливали музыку раньше.`,
   msg72: "Трек возобновлен! ✅",
   msg73: `Пожалиуйста, введите действительное название песни. ❌`,
   msg74: `Результатов не найдены! ❌`,
   msg75: "Исканная Музыка",
   msg76: "Выберите трек от **1** to **{maxTracks.length}** ⬇️",
   msg77: `Поиск музыки отменена. ✅`,
   msg78: `Идёт загрузка... 🎧`,
   msg79: "добавлена в очередь. ✅",
   msg80: `Время поиска музыки истекло. ❌`,
   msg81: "Отмена",
   msg82: `Введенное число вами больше, чем количество песен в очереди. ❌`,
   msg83: "Музыка пропущена ✅",
   msg84: `Эта музыка транслируется в прямом эфире, нет данных о длительности для отображения. 🎧`,
   msg85: `Музыка приостановлена. Увидимся позже! ✅`,
   msg86: "Обновление",
   msg87: `Текущий громкость: **{queue.volume}** 🔊\n** Чтобы изменить громкость, с \`1\` до \`{maxVol}\` Введите число между.**`,
   msg88: `Громкость, которую вы хотите изменить уже является текущей. ❌`,
   msg89: `**Введите число с \`1\` до \`{maxVol}\` для изменения громкости.** ❌`,
   msg90: "Громкость изменена:",
   msg91: `Дайте имя плейлисту, который хотите создать. ❌`,
   msg92: `Плейлист с таким названием уже существует. ❌`, 
   msg93: `У вас не может быть более 30 плейлистов. ❌`,
   msg94: "Идёт создание плейлиста... 🎧",
   msg95: "Плейлист создан! 🎧",
   msg96: `У вас нет плейлиста с таким названием. ❌`,
   msg97: "Идёт удаление плейлиста... 🎧",
   msg98: "Плейлист удален! 🎧",
   msg99: `Введите имя трека, который хотите искать. ❌`,
   msg100: `Введите название плейлисте, в который хотите добавить трек. ❌`,
   msg101: `У вас не может быть треков более {max_music} в плейлисте. ❌`,
   msg102: "Идёт загрузка музыки... 🎧",
   msg103: "Все музыки добавлены в ваш плейлист! 🎧",
   msg104: `Эта музыка уже в плейлисте. ❌`,
   msg105: "добавлена в плейлист! 🎧",
   msg106: `Введите название плейлиста, в который вы хотите удалить музыку. ❌`,
   msg107: `У вас ещё нет плейлиста с таким названием. ❌`,
   msg108: "Идёт удаление музыки... 🎧",
   msg109: "Музыка удалена! 🎧",
   msg110: "Введите название плейлиста, который вы хотите искать. ❌",
   msg111: `У вас неть музыки в этом плейлисте. ❌`,
   msg112: "Лучшие Публичные Плейлисты",
   msg113: `Ваше время истекло для использования этой команды, вы можете ввести \`/playlist top\` чтобы опять пользоваться этой командой.`,
   msg114: `Здесь нет публичного плейлиста. ❌`,
   msg115: "Ваши Плейлисты",
   msg116: `музыки`,
   msg117: `У вас нет никакого плейлиста. ❌`,
   msg118: "Ваше время истекло для использования этой команды. Вы можете ввести \`/playlist list {name}\`, чтобы использовать опять эту команду.",
   msg119: "Введите **/play playlist <list-name>** команду для слушания этих плейлистов. \nВведите **/playlist list <list-name>** чтобы видеть трек в списке.",
   msg120: "Пожалуйста, укажите текстовый канал.",
   msg121: "<#{channel}> добавлен в список использования команды, теперь команду бота можно использоваться только на каналах в списке.",
   msg122: "Здесь нет зарегистрированных данных.",
   msg123: "<#{channel}> удален из списка каналов использования команды.",
   msg124: "This channel is already on the command usage channel list.",
   msg125: "Это канал не является текстовым каналом.",
   msg126: "❌ Здесь список каналов, в которых вы можете использовать команды: {channel_filter}",
   msg127: "Команда не определена.",
   error7: "Пожалуйста пользуйтесь этой командой попозже. Разработникам бота сообщили о возможной ошибке.",
   msg128: "Вы меня замолчали, пока музыка воспроизводилась. Вот почему я остановил музыку. Продолжу, если включите мой звук. 😔",
   msg129: "воспроизводится",
   msg130: "Пожалуйста, введите действительное число.",
   msg131: "Чтобы пользоваться этими командами в списке, вам придётся проголосовать за бота.",
   msg132: "Нет приостановленной музыки.",
   msg133: "Я перепутал порядок в плейлисте.",
   msg134: "Неправильное использование. Пример: `5:50` | `1:12:43`",
   msg135: "Время воспроизведения было установлено на {queue.formattedCurrentTime} успешно.",
   msg136: "Автовоспроизведение включено. С этого момента собираюсь включить случайную музыку.",
   msg137: "Автовоспроизведение выключено.",
   msg138: "Вы можете легко и быстро воспроизводить музыку, не вводя никаких команд в {channel}.",
embedButton: {
   button_play: "Добавить",
   input_play: "Введите название или ссылку на музыку",
   button_autoplay: "Автоматический",
   button_volume: "Громкость",
   input_volume: "Введите номер тома от {{volMin}} до {{volMax}}",
   button_loop: "Цикл",
   button_back: "Назад",
   button_skip: "Пропустить",
   button_stop: "Стоп",
   button_filter: "Выберите аудиофильтр",
   on: "включено",
   off: "не включено",
   start: `
   **\`🎶\`| Воспроизвести новый:** {{track?.title}}
   **\`⏳\`| Продолжительность:** {{track?.formattedDuration}}
   **\`📻\`| Источник:** {{track?.source}}
   **\`🎧\`| Том:** {{queue?.volume}}
   **\`🎛\`| Фильтр:** {{queue?.filter}}
   **\`🤖\`| Автовоспроизведение:** {{queue?.autoMode}}
   **\`🔁\`| Цикл:** {{queue?.repeatMode}}
   **\`📀\`| Песни:** {{queue?.songs}}
   **\`🎙\`| Голос:** <#{{queue?.connection.channelID}}>
   **\`👤\`| Автор:** {{track?.user}}
   `
}

  
   }
   module.exports = language;
   
