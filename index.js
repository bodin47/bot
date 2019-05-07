const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json");
const { Client, Attachment } = require('discord.js');

client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    client.user.setActivity(`Sur ${client.guilds.size} serveurs`);
  });
  
  client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Sur ${client.guilds.size} serveurs`);
  });
  
  client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Sur ${client.guilds.size} serveurs`);
  });
  
  client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "cc", "bnj", "bonjour", "slt", "salut") {
        message.reply("Bonjour j'espère que vous allez bien");
    }
  });

client.login('NTc0NjczNTY0Nzk2NzE1MDE4.XM83pw.AM4SIbnkpdKYOL5fCgVQZHAJ3-A')