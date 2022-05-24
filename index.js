const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc4NDYwNTU5Mjc0MDQ1NTIw.GbYNSV.c7YJ4zyGdHTOXwjTHgM39YPqDtZNgb4-ziautw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)