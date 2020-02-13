require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const Improv = require('improv');
const yaml = require("js-yaml");
const fsj = require('fs-jetpack');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author === client.user) return;

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content.includes('69')) {
    msg.channel.send('Nice.');
  }

  if (msg.content.toLowerCase().includes('german')) {
    const deHeart = client.emojis.find(emoji => emoji.name === 'de_heart');
    msg.channel.send(`${deHeart}`);
  }

  if (msg.content === '!challenge') {
    const grammarData = yaml.load(fsj.read('challenge.yaml'));

    const generator = new Improv(grammarData, {
      // filters: [Improv.filters.mismatchFilter()],
      reincorporate: true
    });

    msg.channel.send(generator.gen('root', {}))
  }
});

client.login(process.env.TOKEN);
