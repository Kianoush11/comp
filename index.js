const Discord = require("discord.js");
const bot     = new Discord.Client({fetchAllMembers: true});
const fs      = require("fs");
const moment  = require("moment");

var used1 = false;

const Games = [
    "Minecraft", 
    "Grand Theft Auto V", 
    "Grand Theft Auto : San Andreas", 
    "Watch Dogs 2", 
    "Among Us", 
    "Lego",
    "دایر گوز", 
    "Counter Strike : Global Offensive", 
    ":|", 
    "Made by Green", 
    "R.i.p"
];

const Statas = [
   "online", 
   "dnd", 
   "idle", 
   "invincible"
];





bot.once('ready', () => {
    console.log('Ready!');
    
    bot.user.setActivity('GTA : SA', {type: "PLAYING"});
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

    if (message.content == "من ناراحتم") {
      
        message.channel.send("هعی <:PB_cry:791931139555196928>")

    };

    if (message.content == "آروین") {
      
        message.channel.send("اسممو نگوووو<:secshot:791749450191601695>")
    };


    if (message.content == ":neutral_face:") {
      
        message.channel.send(":neutral_face:")
    };

    if (message.content == ":|") {
      
        message.channel.send(":neutral_face:")
    };
   

});

bot.on("message", msg => {

    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return;
});

bot.login(process.env.token);
