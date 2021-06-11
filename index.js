require('dotenv').config({ path: __dirname + '/.env' });
const Discord = require('discord.js');
// const fetch = require('node-fetch');
//! I was hitting an api, thus this import... I may again! So I'll leave it as a reminder
const client = new Discord.Client();
client.commands = new Discord.Collection();
const clientCommands = require('./commands');

const prefix = '$';

client.login(process.env.TOKEN);

//* create a command set - an object constructed from the export in the index.js file in the commands dir *//
Object.keys(clientCommands).map((key) => {
  client.commands.set(clientCommands[key].name, clientCommands[key]);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  console.info(`Called command: ${command}`);

  // ! .has returns True or False
  // if the message had no commands or insultRon was the author, then return
  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('There was a problem executing that command');
  }
});

//* I want to create a command for !insult and then provide an insult for a mentioned user
/* 
  From the docs, this grabs the first mentioned user: 
  - a prop on the message object - mentions - then users - first (a method?)
  	const taggedUser = message.mentions.users.first();
*/
