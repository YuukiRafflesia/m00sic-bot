const Discord = require('discord.js');
const client = new Discord.Client();

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
});

client.login(process.env.TOKEN);
