const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Subscribe to ItzNexus", {type: "STREAMING", url: "https://twitch.tv/NotNexusss"})
   console.log(`Successfully enabled Streaming Mode.`)
})

keepAlive()
client.login(TOKEN);