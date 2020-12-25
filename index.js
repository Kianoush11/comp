const Discord = require("discord.js");
const bot     = new Discord.Client({fetchAllMembers: true});
const fs      = require("fs");
const moment  = require("moment");

var used1 = false;

const Games = [
    "Minecraft", 
    "Grand Theft Auto V", 
    "Grand Theft Auto : San Andreas", 
    "Watch Dogs 2"و 
    "Among Us", 
    "Lego",
    "دایر گوز"
];

const Statas = [
   "online", 
   "dnd", 
   "idle"
];



bot.once('ready', () => {
    console.log('Ready!');
    
     setInterval(() => {

       const index = Math.floor(Math.random() * (Games.length - 1) + 1);
       bot.user.setActivity(Games[index]);
    }, 30000);

    setInterval(() => {

       const index2 = Math.floor(Math.random() * (Statas.length - 1) + 1);
       bot.user.setStatus(Statas[index2]);
    }, 50000);
    
});

bot.on('message', (message) => {
    
    if (message.content == "سلام") {
      
        message.channel.send("سلام <:pogpoker:788071979584454697>")

    };

    if (message.content == "خوبی؟") {
      
        message.channel.send("خوبم<:pogpoker:788071979584454697>")

    };

    if (message.content == "دایر") {
      
        message.channel.send("دایر گوز<:pogpoker:788071979584454697>")

    };



});

bot.on("message", msg => {

    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send("<:pogpoker:788071979584454697>");
});

bot.login(process.env.token);
