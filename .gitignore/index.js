const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("être modifie par Emiya.D");
    console.log("Je suis connecté !")
});

bot.login("NDA2MzM0OTA2NzgwNzQ1NzQz.DUy4Lw.Xef9huTfaxz6L8wwU82d2Y60y0Y");

bot.on('message', message => {
    if (message.content  === '!hello') {
        message.reply('fuck you')
    }
});

bot.on('message', message => {
    if (message.content  === '!np') {
        message.reply('I am the bone of my sword Steel is my body and fire is my blood I have created over a thousand blades Unknown to death Nor known to life Have withstood pain to create many weapons Yet those hands will never hold anything So, as I pray, Unlimited Blade Works')
    }
});

bot.on('message', message => {
    if (message.content  === '!ntr') {
        message.reply('nique ta putain de race')
    }
});

bot.on('message', message => {
    if (message.content  === '!bm') {
        message.reply('Fais bour out momon la grosse chienne')
    }
});

bot.on('message', message => {

    if (message.content.startsWith('!play')) {
      // On récupère le premier channel audio du serveur
      let voiceChannel = message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
      // On récupère les arguments de la commande 
      // il faudrait utiliser une expression régulière pour valider le lien youtube
      let args = message.content.split(' ')
      // On rejoint le channel audio
      voiceChannel
        .join()
        .then(function (connection) {
          // On démarre un stream à partir de la vidéo youtube
          let stream = YoutubeStream(args[1])
          stream.on('error', function () {
            message.reply("Je n'ai pas réussi à lire cette vidéo :(")
            connection.disconnect()
          })
          // On envoie le stream au channel audio
          // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
            })
        })
    }
  
  })
