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
   "idle"
];



const activities_list = [
    "Gta : sa", 
    "Fuck The Saviors",
    "Im dead", 
    "Quietly!", 
    "Without Any Reason ...", 
    "So You see a ghost...", 
    "In a Vitural World"
    ]; // creates an arraylist containing phrases you want your bot to switch through.


    const activities_list2 = [
      "PLAYING", 
      "LISTENING", 
      "WATCHING"
     ]; 

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).

        const index2 = Math.floor(Math.random() * (activities_list2.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).

        bot.user.setActivity(activities_list[index], {type: activities_list2[index2]}); // sets bot's activities to one of the phrases in the arraylist.
    }, 8000); // Runs this every 1 seconds.

    setInterval(() => {
        const index3 = Math.floor(Math.random() * (Statas.length - 1) + 1);

        bot.user.setStatus(Statas[index3]);
    }, 8000); // Runs this every 1 seconds.
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

});

bot.on("message", msg => {

    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.reply("Fuck You.One Of You!!!");
});

bot.login(process.env.token);
