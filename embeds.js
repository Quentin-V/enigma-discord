const Discord = require('discord.js');

var embeds = [];

const embedColor1 = '#0099ff';
const embedColor2 = '#ff0000';
const embedColor3 = '#ffffff';

//EMBED 1
embeds.push(createEmbed(embedColor1, 'Bienvenue dans enigma,\nVous allez devoir résoudre des énigmes pour arriver à me battre,mais bon, mes prédictions affirment que vous avez 99,47% de chances d\'échouer...\nPour commencer, on va faire simple, lorsque quelqu\'un pense avoir la réponse d\'une énigme, Il suffit de l\'écrire dans ce channel\nPour votre information, la casse de la réponse n\'a pas d\'importance, cela veut dire que les réponses que vous donnez peuvent être écrites TOUT EN MAJUSCULE comme tout en minuscule ou UnE lEtTrE sUr DeUx, ça ne changera rien.', 'Quel est la capitale de la France ?'));

//EMBED 2
embeds.push(createEmbed(embedColor1, 'Bravo!! Bon, j\'avoue celle-ci n\'était pas pas très difficile, mais pas de panique la diffuculté sera exponentielle', 'La réponse est souvent cachée'));

//EMBED 3
embeds.push(createEmbed(embedColor1, 'Haha, c\'était drole hein, en fait la réponse c\'était souvent caché mdr. Allez on passe à l\'énigme suivante', 'Qu\'est-ce qui relie ces images ?', 'what_links_them.png'));



// Create embed function
function createEmbed(color, desc, question, att = null) {
	let embed = new Discord.MessageEmbed().setColor(color).setDescription(desc).addField('Question', question);
	if(att !== null) embed.setImage('./resources/'+att);
	return embed;
}

module.exports = textsAndEmbed;
