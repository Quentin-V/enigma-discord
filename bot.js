const Discord = require('discord.js');
const client = new Discord.Client();

const credentials = require('./credentials.js');
const data = require('./embeds.js');

const guildID   = '752859692413354054';
const channelID = '754128613250564166';
const startID = '184331142286147584';

var step  = 0;
var ended = false;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

	if(message.author.bot) return;

	if(message.author.id === startID && message.content === 'startenigma') {
		client.guilds.fetch(guildID).then(guild => {
			let chan = guild.channels.resolve(channelID);
			chan.send(data.embeds[step]);
		});
	}

	if(!ended && message.channel.id === channelID && message.content.toLowerCase() === data.answers[step] ) {
		message.channel.send(data.embeds[++step]).then(msg => {
			if(step === data.embeds.length) ended = true;
		});
		return;
	}

	if(!ended && message.channel.id === channelID && message.content.toLowerCase() !== data.answers[step]) {
		message.delete();
	}

});

client.login(credentials.token);
