let Discord = require("discord.js");
let client = new Discord.Client();
let { MessageEmbed } = require("discord.js");
const express = require("express");
const keep_alive = require('./keep_alive.js');
const app = express();
const allowedRole = '1208186017337581699';
const owner = '1115992837775953951';
const imagepermsRuined = '1115992837775953951';
let db = new sqlite3.Database('economy.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, balance INTEGER)");
});

function getBalance(userId, callback) {
  db.get("SELECT balance FROM users WHERE id = ?", userId, (err, row) => {
    if (err) {
      console.error(err);
      callback(null);
    } else {
      callback(row ? row.balance : 0);
    }
  });
}

function updateBalance(userId, amount, callback) {
  db.get("SELECT balance FROM users WHERE id = ?", userId, (err, row) => {
    if (err) {
      console.error(err);
      callback(false);
    } else {
      let newBalance = (row ? row.balance : 0) + amount;
      db.run("INSERT OR REPLACE INTO users (id, balance) VALUES (?, ?)", userId, newBalance, (err) => {
        if (err) {
          console.error(err);
          callback(false);
        } else {
          callback(true);
        }
      });
    }
  });
}

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
  res.send(`bies-bot 1`);
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
  res.send(`bies-bot 2`);
}) 

app.get("/ruineddevelopment", (req, res) => {
  var effectname = req.param("effectname");
  let channel = client.channels.cache.get("1210262876288319559");
  const embed = new MessageEmbed()
  const theguild = client.guilds.cache.get('1215024343051010069');
  const member = theguild.members.cache.find(member => member.user.username === effectname);
  if (member) {
    if (member.roles.cache.has('1217504460893589624')) {
      res.send(`hello 1`);
    } else {
      member.roles.add('1217504460893589624');
      res.send(`hello`);
    }
  } else {
    res.send(`hello 1`);
  }
}) 

client.on("message", async (message) => {
  if (message.author.bot) {
  } else {
    if (message.channel.type === 'dm') {
      const command = message.content.toLowerCase()
      if (command === "hi") {
        message.author.send("hi");
      }
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
        if (message.member.roles.cache.some(role => role.id === allowedRole) || (message.member.roles.cache.some(role => role.id === owner)) || (message.member.roles.cache.some(role => role.id === imagepermsRuined))) {
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
    if (command.match("nigger") || command.match("nigga")) {
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
    if (command === '!balance') {
      getBalance(message.author.id, balance => {
        message.reply(`Your balance is: $${balance}`);
      });
    }
    if (command.startsWith('!earn')) {
      let amount = parseInt(message.content.split(' ')[1]);
      updateBalance(message.author.id, amount, success => {
        if (success) {
          message.reply(`You earned $${amount}!`);
        } else {
          message.reply('Failed to update balance.');
        }
      });
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
        if (command.match("is bruinebies a femboy") || command.match("is bruinebies femboy")) {
          let nicknames = ["🎱no", "🎱no, you idiot", "🎱too lazy to answer"]
          message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
        } else if (command.match("is zero a femboy") || command.match("is zero femboy")) {
          let nicknames = ["🎱 yes", "🎱 yes r u that dumb?", "🎱too lazy to answer"]
          message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
        } else {
          let nicknames = ["🎱 yes", "🎱 no", "🎱 yes r u that dumb?", "🎱no, you idiot", "🎱idk why do you ask me?", "🎱too lazy to answer"]
          message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]}`);
        }
      }
      if (command.startsWith("!help")) {
        const embed = new MessageEmbed()
        .setTitle(`**Help**`)
        .setDescription(`Tbh idk what to write here but here are some commands u can use.
      
**!help** - the command u just used
**!8ball** - answers your questions`)
        .setColor("#FFBF00");
        message.channel.send(embed)
      }
    }
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (user.bot) {
  } else {
    if (reaction.message.channel.id === '1214273786925424730') {
      if (reaction.emoji.id === '1214218072253145158') {
        let role = reaction.message.guild.roles.cache.get("1185291748365303838");
        let member = reaction.message.guild.members.cache.get(user.id);
        if (member) {
          member.roles.add(role);
        }
      }
      if (reaction.emoji.id === '1214592470399320064') {
        let role = reaction.message.guild.roles.cache.get("1185291790467739769");
        let member = reaction.message.guild.members.cache.get(user.id);
        if (member) {
          member.roles.add(role);
        }
      }
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (user.bot) {
  } else {
    if (reaction.message.channel.id === '1214273786925424730') {
      if (reaction.emoji.id === '1214218072253145158') {
        let role = reaction.message.guild.roles.cache.get("1185291748365303838");
        let member = reaction.message.guild.members.cache.get(user.id);
        if (member) {
          member.roles.remove(role);
        }
      }
      if (reaction.emoji.id === '1214592470399320064') {
        let role = reaction.message.guild.roles.cache.get("1185291790467739769");
        let member = reaction.message.guild.members.cache.get(user.id);
        if (member) {
          member.roles.remove(role);
        }
      }
    }
  }
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot) return;
  const channel = client.channels.cache.get("1185295538720100362"); 
  if (newMessage.content.match("!reaction")) {
    oldMessage.react('<:blue:1214218072253145158>')
    oldMessage.react('<:YellowChaosEmerald:1214592470399320064>')
  }
  if (channel) {
    if (oldMessage.guild.id === '1115963224462999613') {
      const embed = new MessageEmbed()
      .setTitle(`${oldMessage.author.username}'s messages is edited`)
      .setDescription(`**Old message content:** ${oldMessage.content}
      **New message content:** ${newMessage.content}`)
      .setColor("#FFBF00");
      channel.send(embed);
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
