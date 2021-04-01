require('dotenv').config();

const { Client } = require('discord.js')

const client = new Client();

client.on('ready', () => {
  console.log(`${client.user.username} has logged in`);
})

client.on('message', (msg) => {
  if (msg.author.bot) {
    return;
  }

  if (msg.content === 'hello bot') {
    msg.reply('lo con cac')
  }
  
  if (msg.content === 'lâm tám') {
    msg.reply('Lâm Tám tên thật là Trần Quang Lâm, sinh ngày 20/12/2000, tuổi lồn !');
  }
})

client.login(process.env.DISCORD_BOT_TOKEN)
