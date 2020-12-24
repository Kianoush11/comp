const Discord = require("discord.js");
const bot     = new Discord.Client({fetchAllMembers: true});
const fs      = require("fs");
const moment  = require("moment");



bot.once('ready', () => {
	console.log('Ready!');
});

bot.on('message', message => {
	if (!message.content.startsWith('سلام')) {

        message.channel.send("سلام <:pogpoker:788071979584454697>")
    }
});

bot.login(process.env.token);