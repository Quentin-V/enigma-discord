const Discord = require('discord.js');
const client = new Discord.Client();

const credentials = require('./credentials.js');
const embeds = require('./embeds.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if(message.content === 'test') {
		message.channel.send(embeds.embeds[0]);
	}
});

client.login(credentials.token);
