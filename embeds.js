const Discord = require('discord.js');

var data = {
	embeds: [],
	answers: ['paris', 'souvent cachée', 'new york city', 'give your blood', 'dubnium', 'chicoutimi', '11e9a949ab811e7357ec1a75e50d88f4445af2de3d482490b7d8d4f309f4cb48', 'enigma', 'dream', 'lunaire', 'discomfort', '0192840721', 'cacahuette']
};

const embedColor1 = '#0099ff';
const embedColor2 = '#ff0000';
const embedColor3 = '#ffffff';

//EMBED 1 (Paris)
data.embeds.push(createEmbed(embedColor1, 'Bienvenue dans enigma,\nVous allez devoir résoudre des énigmes pour arriver à me battre, mais bon, mes prédictions affirment que vous avez 99,47% de chances d\'échouer...\nPour commencer, on va faire simple, lorsque quelqu\'un pense avoir la réponse d\'une énigme, il suffit de l\'écrire dans ce channel.\nPour votre information, la casse de la réponse n\'a pas d\'importance, cela veut dire que les réponses que vous donnez peuvent être écrites TOUT EN MAJUSCULE comme tout en minuscule ou UnE lEtTrE sUr DeUx, ça ne changera rien.\nPour ne pas encombrer le channel, si vous écrivez une mauvaise réponse, le message sera supprimé automatiquement (normalement).', 'Quel est la capitale de la France ?'));

//EMBED 2 (souvent cachée)
data.embeds.push(createEmbed(embedColor1, 'Bravo!! Bon, j\'avoue celle-ci n\'était pas pas très difficile, mais pas de panique la diffuculté sera exponentielle', 'La réponse est souvent cachée'));

//EMBED 3 (New york city)
data.embeds.push(createEmbed(embedColor1, 'Haha, c\'était drole hein, en fait la réponse c\'était souvent caché mdr. Allez on passe à l\'énigme suivante', 'Qu\'est-ce qui relie ces images ?', 'what_links_them.png'));

//EMBED 4 (give your blood)
data.embeds.push(createEmbed(embedColor1, 'Bien joué! Quelle belle ville, avec la statue de la liberté et..... enfin belle ville hein, passons à la prochaine énigme.', '4-444-888-33 999-666-88-777 22-555-666-666-3'));

//EMBED 5 (dubnium)
data.embeds.push(createEmbed(embedColor1, 'Wow, quel beau message, enfin, il faut le prendre dans le bon sens mais oui c\'est important de donner son sang', 'Il vous sera impossible de trouver ce qui se cache dans ce son', 'bipbipboup.wav'));

//EMBED 6 (chicoutimi)
data.embeds.push(createEmbed(embedColor1, 'Sérieusement, j\'avais augmenté le niveau de difficulté pour celui-là. Avec mon IA superpuissante, je peux facilement recréer une énigme plus difficile que celle-ci.', 'Enfin quelque chose d\'impossible à déchiffrer', 'asl.png'));

//EMBED 7 (11e9a949ab811e7357ec1a75e50d88f4445af2de3d482490b7d8d4f309f4cb48)
data.embeds.push(createEmbed(embedColor2, 'QUOI !! :rage: Impossible, j\'avais utilisé la puissance maximale de mon IA pour créer cette énigme, je vais donc devoir utiliser... MON PROCESSEUR QUANTIQUE, HAHAHAHA!! Personne n\'y avait pensé.', '\'Hello\' --> 2 * SHA256', 'fr.jpg'));

//EMBED 8 (enigma)
data.embeds.push(createEmbed(embedColor2, 'Mhhhh, ce n\'était que la puissance la plus faible de mon nouveau processeur, je vais essayer d\'augmenter un peu la puissance.', 'Cette énigme devrait durer un peu plus longtemps.', 'dots_and_other.png'));

//EMBED 9 (dream)
data.embeds.push(createEmbed(embedColor2, 'Haha, la réponse c\'était mon nom, impossible d\'y penser à l\'avance. Mais le problème c\'est que la réponse a été trouvée. Je vais essayer d\'augmenter réellement la difficulté de celle-ci', 'Voici une vieille photo', 'FUUKK.jpg'));

//EMBED 10 (lunaire)
data.embeds.push(createEmbed(embedColor2, 'Et bah, bien joué j\'avais vraiment monté le niveau de difficulté. Ca va être compliqué de continuer de l\'augmenter.', 'Personellement, j\'aime pas trop la couleur.', 'awful_color.png'));

//EMBED 11 (discomfort)
data.embeds.push(createEmbed(embedColor2, 'MAIS C\'EST INCROYABLE', 'Juste une femme normale', 'woman.png'));

//EMBED 12 (0192840721)
data.embeds.push(createEmbed(embedColor2, 'Je suis presque à la puissance maximale possible.', 'Une carte', 'ti_amo__meta.png'));

//EMBED 13 (cacahuette)
data.embeds.push(createEmbed(embedColor3, 'Je pense que j\'ai encore les ressources pour une dernière énigme.', 'Calcul maximal', 'Eugene_Roshal.jpeg'));

//EMBED 14 (fin)
data.embeds.push(new Discord.MessageEmbed().setTitle('Fin').setColor(embedColor3).setDescription('Bravo, Enigma est terminé.\nVous avez réussi toutes les énigmes. Bravo! :clap: :clap:'));

// Create embed function
function createEmbed(color, desc, question, att = null) {
	let embed = new Discord.MessageEmbed().setTitle('Enigma').setColor(color).setDescription(desc).addField('Enigme', question);
	if(att !== null) {
		embed.attachFiles(['./resources/'+att]);
		if(att.split('.')[1] !== 'wav') {
			embed.setImage('attachment://'+att);
		}
	}
	return embed;
}

module.exports = data;
