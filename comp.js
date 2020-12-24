const Discord = require('discord.js');



const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith('سلام')) {

        message.channel.send("سلام <:pogpoker:788071979584454697>")
    }
});

client.login(process.env.token);