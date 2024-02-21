let Discord = require("discord.js");
let client = new Discord.Client();
let { MessageEmbed } = require("discord.js");

client.on("ready", () => {
  client.user.setActivity("pizza in the oven", { type: "WATCHING" });
});

client.on("message", async (message) => {
  if (message.author.bot) {
  } else {
    let role = message.guild.roles.cache.find(
      (role) => role.id === "1182686162108813373"
    );
    if (role) {
      message.member.roles.add(role);
    }
    if (message.content === "hi") {
      message.channel.send("hi");
    }
    if (message.content.match(/https?:\/\/\S+/)) {
      if (message.channelId === "1182414660855672953") {
      } else {
        message.delete();
        message.channel.send(
          `You can not send links here buddy. <@${message.author.id}>`
        );
      }
    }
    if (message.content.match("discord.gg")) {
      if (message.channelId === "1182414660855672953") {
      } else {
        message.delete();
        message.channel.send(
          `You can not send invites here buddy. <@${message.author.id}>`
        );
      }
    }
    if (message.content.match("CUNT") || message.content.match("cunt")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (message.content.match("FAGGOT") || message.content.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (message.content.match("NIGGER") || message.content.match("nigger")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (message.content.match("NIGGA") || message.content.match("nigga")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (message.content.match("FAGGOT") || message.content.match("faggot")) {
      message.delete();
      message.channel.send(
        `You can not be harassing people here buddy. <@${message.author.id}>`
      );
    }
    if (message.content.match("is zero a femboy") || message.content.match("IS ZERO A FEMBOY")) {
      message.channel.send(
        `yes he is`
      );
    }
    if (message.content.match("<@904076782666391583>") || message.content.match("<@1017921613913657364>")) {
      message.channel.send(
        `The owner and the admins has pings turned off so it doesn't work + u look really stupid rn. <@${message.author.id}>`
      );
    }
  }
});

client.on("messageDelete", async (deletedMessage) => {
  let channel = client.channels.cache.get("1185295538720100362");
  const embed = new MessageEmbed()
    .setTitle(`${deletedMessage.author.username}'s messages is deleted`)
    .setDescription(`**Message content:** ${deletedMessage.content}`)
    .setColor("#ff0000");
  channel.send(embed);
});

client.login(process.env.token);
