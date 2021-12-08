const Discord = require('discord.js');
const client = new Discord.Client();

const credentials = require('./credentials.json');
const data = require('./embeds.js');

let channelId = null;

var step  = 0;
var ended = false;
let started = false;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if(channelId !== null && message.channel.id !== channelId) return
	if(message.author.bot) return

	// If startenigma, then start the session
	if(!started && message.content === 'startenigma') {
		channelId = message.channel.id
		message.channel.send(data.embeds[step]).then(m => started = true)
		return message.delete()
	}

	if(!ended && step === 9) { // Heure
		let formatter = new Intl.DateTimeFormat('fr-FR', { timeZone: "Asia/Tokyo", hour: 'numeric', minute: '2-digit' });   
		let jp = formatter.format(new Date());
		if(message.content.toLowerCase() === jp.split(' ')[0])
			message.channel.send(data.embeds[++step]).then(() => {
				if(step === data.embeds.length) ended = true;
			});
		else message.delete()
		return
	}

	// If good answer, send next step, if end set ended to true
	if(!ended && message.content.toLowerCase() === data.answers[step] ) {
		message.channel.send(data.embeds[++step]).then(msg => {
			if(step === data.embeds.length) ended = true;
		});
		return
	}

	// Delete message if ont right answer
	if(!ended && message.content.toLowerCase() !== data.answers[step]) {
		return message.delete()
	}

});

client.login(credentials.token);
