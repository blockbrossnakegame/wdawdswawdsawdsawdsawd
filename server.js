let Discord = require("discord.js");
let client = new Discord.Client();
let { MessageEmbed } = require("discord.js");
const express = require("express");
const app = express();
const keep_alive = require('./keep_alive.js')
const allowedRole = '1208186017337581699';
const owner = '1115992837775953951';

app.listen(3000, () => {
  console.log("Bies-bot is waking up.");
})

client.on("ready", () => {
  client.user.setActivity("pizza in the oven", { type: "WATCHING" });
});

app.get("/", (req, res) => {
  res.send(`bies-bot`);
})

app.get("/effect1", (req, res) => {
  var effectname = req.param("effectname");
  let channel = client.channels.cache.get("1210262876288319559");
  const embed = new MessageEmbed()
  .setTitle(`A death effect has been updated.`)
  .setDescription(`<:EffectID:1210571709061660734> Effect ID: **${effectname}#1**
  <:CreatorID:1210572085563232277> Creator ID: [${effectname} (View profile)](<https://www.roblox.com/users/${effectname}/profile>)`)
  .setColor("a0ad96");
  channel.send(embed);
  res.send(`bies-bot 1`)
})

app.get("/effect2", (req, res) => {
  var effectname = req.param("effectname");
  let channel = client.channels.cache.get("1210262876288319559");
  const embed = new MessageEmbed()
  .setTitle(`A death effect has been updated.`)
  .setDescription(`<:EffectID:1210571709061660734> Effect ID: **${effectname}#2**
  <:CreatorID:1210572085563232277> Creator ID: [${effectname} (View profile)](<https://www.roblox.com/users/${effectname}/profile>)`)
  .setColor("a0ad96");
  channel.send(embed);
  res.send(`bies-bot 2`)
}) 

client.on("message", async (message) => {
  if (message.author.bot) {
  } else {
    const command = message.content.toLowerCase()
    let role = message.guild.roles.cache.find(
      (role) => role.id === "1182686162108813373"
    );
    if (role) {
      message.member.roles.add(role);
    }
    if (command === "hi") {
      message.channel.send("hi");
    }
    if (command.match(/https?:\/\/\S+/) && !command.match("https://tenor.com/view/")) {
      if (message.channelId === "1182414660855672953" || message.channelId === "1182059785768677478") {
      } else {
        if (message.member.roles.cache.some(role => role.id === allowedRole) || (message.member.roles.cache.some(role => role.id === owner))) {
        } else {
          message.delete();
          message.channel.send(
          `You can not send links here buddy. <@${message.author.id}>`
          );
        }
      }
    }
    if (command.match("discord.gg")) {
      if (message.channelId === "1182414660855672953") {
      } else {
        message.delete();
        message.channel.send(
          `You can not send invites here buddy. <@${message.author.id}>`
        );
      }
    }
    if (command.match("cunt")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("nigger")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("nigga")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (command.match("is zero a femboy")) {
      message.channel.send(
        `Yes, yes he is.`
      );
      message.react('👍')
    }
    if (command.match("<@904076782666391583>") || command.match("<@1017921613913657364>")) {
      if (message.guild.id === '1115963224462999613') {
        if (message.author.id === '904076782666391583' || message.author.id === '1017921613913657364') {
        } else {
          message.channel.send(
          `The owner and the admins has pings turned off so it doesn't work + u look really stupid rn. <@${message.author.id}>`
          );
        }
      }
    }
    if (command.startsWith("!kick")) {
      if (message.member.hasPermission('KICK_MEMBERS')) {
        const mention = message.mentions.members.first();
        if (mention) {
          mention.kick()
          .then(member => {
            message.channel.send(`${mention} has been kicked L`);
          })
          .catch(error => {
             message.channel.send(`Failed :(`);
          });
        } else {
          message.channel.send("Do @ someone to kick them");
        }
      }
    }
    if (command.startsWith("!ban")) {
      if (message.member.hasPermission('BAN_MEMBERS')) {
        const mention = message.mentions.members.first();
        if (mention) {
          mention.ban()
          .then(member => {
            message.channel.send(`${mention} has been banned L`);
          })
          .catch(error => {
             message.channel.send(`Failed :(`);
          });
        } else {
          message.channel.send("Do @ someone to ban them");
        }
      }
    }
    if (command.startsWith("!8ball")) {
      let nicknames = ["🎱 yes", "🎱no", "🎱no, you idiot", "🎱︱idk why do you ask me?", "🎱︱too lazy to answer"]
      message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
    }
  }
});

client.on("messageDelete", async (deletedMessage) => {
  if (deletedMessage.author.bot) {
  } else {
    if (deletedMessage.guild.id === '1115963224462999613') {
      let channel = client.channels.cache.get("1185295538720100362");
      const embed = new MessageEmbed()
      .setTitle(`${deletedMessage.author.username}'s messages is deleted`)
      .setDescription(`**Message content:** ${deletedMessage.content}`)
      .setColor("#ff0000");
      channel.send(embed);
    }
  }
});

client.login(process.env.token);
