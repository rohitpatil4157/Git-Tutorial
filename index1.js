const Eris = require('eris');
// const KeepAlive = require('./server.js')
const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs')
const bot = new Eris("OTMxNTM0NjAxMzAwNjE1MTk4.YeF1nw.4yGWHHm63YMoEep-9wYt-bcY1mU", {
    intents: ["guilds", "guildPresences", "guildMembers", "guildMessages"],
    getAllUsers: true
});

//

let Mytext = ''


bot.on("ready", () => console.log("Ready!"));

bot.on("messageCreate", (msg, channel) => {
    function mdchek(n) {
        if (msg.guildID === "942080384999501844") {
            return "Naptha Server"
        }
        else if (msg.guildID === "785027261454745621") {
            return "PokeFriends"
        }
        else if (msg.guildID === "829325288760148008") {
            return "ChillChord"
        }
        else if (msg.guildID === "786454640967417857") {
            return "Dhroba's Village"
        }
        else if (msg.guildID === "882905458476720178") {
            return "ARC Moon"
        }
        else {
            return "IDK This Server"
        }

    }


    let member = msg.mentions.length >= 1 ? msg.channel.guild.members.get(msg.mentions[0].id) : msg.member;

    let usern = `${member.user.username}#${member.user.discriminator}`

    let textFor = (`\n${usern} ▪ ${mdchek(msg.guildID)} ▪ ${new Date(msg.createdAt).toLocaleString()}\n▶Says: "${msg.cleanContent}"`);

    Mytext = textFor;
    fs.appendFileSync('./Outpyjs.txt', `${Mytext}\n`)
    console.log(textFor);

    if (msg.author) return;

    if (msg.content.toLowerCase().startsWith("h")) {
        bot.createMessage("942080384999501847", "Hello Bro")
        return;
    }

});

//express app
app.all('/', (req, res) => {
    // let textHtml = fs.readFileSync('./Experi.html', 'UTF-8');
    let text1 = fs.readFileSync('./Outpyjs.txt', 'UTF-8');
    res.end(text1);
});

function Keepalive() {
    app.listen(port, () => {
        console.log("server's Ready")
    });

}

Keepalive();
bot.connect();

