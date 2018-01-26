const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("être modifie par Emiya.D");
    console.log("Le bot a bien ete connecte")
});

bot.login("NDA2MzM0OTA2NzgwNzQ1NzQz.DUy4Lw.Xef9huTfaxz6L8wwU82d2Y60y0Y");
