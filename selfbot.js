const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-"
const server = "Nights Of Valor"
const invitelink = "https://discord.gg/4suNThV"
const n1 = "weareno1 "
var newUsers = new Discord.Collection();
const fs = require("fs");
const playercards = ["BarredGalaxy [*50%*]", "GalaxyIsBroken [*0.01%*]", "Omanges [*0.00000001%*]", "BluePandaDragon [*2%*]", "Neterkun [*10%*]", "Prxncey [*14%*]", "Desstie [*10%*]"];
var shortcuts = new Map([
  ["lenny", "( ͡° ͜ʖ ͡°)"],
  ["shrug", "¯\\_(ツ)_/¯"],
  ["justright", "✋😩👌"],
  ["tableflip", "(╯°□°）╯︵ ┻━┻"],
  ["unflip", "┬──┬﻿ ノ( ゜-゜ノ)"],
  ["2flip", "┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻"],
  ["allflip", "┻━┻ ︵┻━┻ ︵┻━┻ ︵┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻︵﻿ ┻━┻︵﻿ ┻━┻︵﻿ ┻━┻"],
  ["2flip", "┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻"],
  ["rage", "ヽ(`Д´)ﾉ"],
  ["keem", "🍿 ***KeemStar*** 🍿"],
  ["thonk", ":thinking:"],
  ["gnome", "http://i.imgur.com/HfxVCyL.png!"],
  ["microwave", "https://img.ifcdn.com/images/174ca152d5e1a676bbc44d073c536666f5168f68adc6b64495426ce567b2672a_1.jpg"],
  ["billnye", "https://img.ifcdn.com/images/3090750e993c8be81d5b8e27b7ceddaad589f659aa05d16948ca62619482f4fa_1.jpg"],
  ["sunrise", "https://img.ifcdn.com/images/388a441f70ab51b5e84f738d311b5b3bfc9ee1c9426c4ea55bd7032ce8aeaf17_1.jpg"],
  ["dogechef", "https://img.ifcdn.com/images/223adefecad7b848077a7b1fb38f3c69cccb6e4555f0283540c2567608d90de3_1.jpg"],
  ["mcorder", "https://img.ifcdn.com/images/781413ea3eaaf066b86910c148fa913cc0e33b0b8c1e692e8eba61d292649ea7_1.jpg"],
  ["dogtree", "https://img.ifcdn.com/images/9c41b957a33a1cca6c7f41b2421fb3dbc4a968ff74952e1049469dcaf5c8af70_1.jpg"],
  ["denial", "https://img.ifcdn.com/images/06039ddc05a867117f71fe442bdd509f68436ef33f7e46bb168d8ae22247f9b1_1.jpg"],
  ["fitsit", "https://ifunny.co/fun/CwrgyD0a4"],
  ["outshape", "https://img.ifcdn.com/images/1b35b8216c29148bbca49b60ee90430b89da29a0de10554e167c4467d074e749_1.jpg"],
  ["friends", "https://img.ifcdn.com/images/fede3053c5f8932adc70e08851c428db8330f7684e60440a830e59a9b9a89354_1.jpg"],
  ["proc", "https://img.ifcdn.com/images/4f5b7c6fcb3fec59f6b2a822990b36f13a04c39489fec2cc242f66afc322f4ad_1.jpg"],
  ["ifunny", "BarredGalaxy's iFunny Selfbot!\n \nImages:\n`gnome` `microwave` `billnye` `sunrise` `dogechef` `mcorder` `dogtree` `denial` `fitsit` `outshape` `friends` `proc`"]
]);
client.on("ready", () => {
  console.log('Thanks for Loading me!')
});
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
client.on('message', message => {
  const params = message.content.split(" ");
  const command = params.shift().slice(prefix.length);

  if(message.content.startsWith(prefix+"eval")) {
    if(message.author !== client.user) return;
    try {
      var code = params.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));   
    } catch(err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
client.on("message", msg => {
  const params = msg.content.split(" ").slice(1);
  if(msg.author !== client.user) return;
  if (msg.content.startsWith(prefix + "asciilove")) {
  	msg.edit('💕 With Love From Barred! 💕')
  	msg.channel.sendMessage('```\n          ******       ******\n        **********   **********\n      ************* *************\n     *****************************\n     *****************************\n     *****************************\n      ***************************\n        ***********************\n          *******************\n            ***************\n              ***********\n                *******\n                  ***\n                   *```')
  }
  if (msg.content.startsWith(prefix + "crate")) 
    msg.reply(`You Have Won ${playercards[Math.floor(Math.random() * playercards.length)]}`)
  if (msg.content.startsWith(prefix + "slap")) {
   let [username] = msg.content.split(" ").slice(1);
     msg.channel.sendMessage(username + ' was slapped by ' + msg.author)
}
  if (msg.content.startsWith(prefix + 'danceemoji'))
    msg.channel.sendMessage('dance').then(sent => {
      setTimeout(() => sent.edit(':point_down:'), 10) 
      setTimeout(() => sent.edit(':point_up:'), 10)
      setTimeout(() => sent.edit(':point_down:'), 10)
      setTimeout(() => sent.edit(':point_up:'), 10)
      setTimeout(() => sent.edit(':point_down:'), 10) 
      setTimeout(() => sent.edit(':point_up:'), 10)
      setTimeout(() => sent.edit(':point_down:'), 10)
    });
  if (msg.content.startsWith(prefix + 'laugh'))
    msg.channel.sendMessage('dance').then(sent => {
      setTimeout(() => sent.edit(':laughing:'), 10) 
      setTimeout(() => sent.edit(':smile:'), 10)
      setTimeout(() => sent.edit(':laughing:'), 10)
      setTimeout(() => sent.edit(':smile:'), 10)
      setTimeout(() => sent.edit(':laughing:'), 10) 
      setTimeout(() => sent.edit(':smile:'), 10)
      setTimeout(() => sent.edit(':laughing:'), 10)
    });
  if (msg.content.startsWith(prefix + "offtopic")) {
  let [what, desc, pro2] = msg.content.split(" ").slice(1);
    msg.delete()
    msg.channel.sendMessage(what + ", move to <#278030418463162370> you skrub!")
}
const embed = new Discord.RichEmbed()
  .setTitle('Ayy')
  .setAuthor('Barred')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('Text')
  .setFooter(':100:')
  .setImage('http://i.imgur.com/yVpymuV.png')
  .setThumbnail('')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://discade.ga/')
  .addField('https://discade.ga/',
    'Discade Bot')
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField('lol', true)
  /*
   * Blank field, useful to create some space.
   */
  .addField('\u200b', '\u200b', true)
  .addField(':100:', true);

  if (msg.content.startsWith(prefix + "ayy")) {
    msg.channel.sendEmbed(embed);
  }
  if (msg.content.startsWith(prefix + "talk")) {
  let [what, desc, pro2] = msg.content.split("|").slice(1);
    msg.delete()
    msg.channel.sendMessage("", {embed: {
            color: 2012323,
            author: {
                 name: what,
                icon_url: pro2
            },
            description: desc,
            fields: [
            ]
        }});
}
  if (msg.content.startsWith(prefix + 'setgame'))
    msg.edit('```js\nclient.on("ready", () => {\n  client.user.setGame("Half-Life 3")\n});\n```')
  if(msg.content.startsWith(prefix + "prune")) {
    let messagecount = parseInt(params[0]);
    msg.channel.fetchMessages({limit: 100})
    .then(messages => {
      let msg_array = messages.array();
      msg_array = msg_array.filter(m => m.author.id === client.user.id);
      msg_array.length = messagecount + 1;
      msg_array.map(m => m.delete().catch(console.error));
   });
  }
  var command_name = msg.content.slice(1);
  if(shortcuts.has(command_name)) {
    setTimeout( () => { msg.edit(shortcuts.get(command_name)) }, 50);
    return;
  }
});

client.login("Hell to the nah nah")
