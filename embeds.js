const Discord = require('discord.js');

var data = {
	embeds: [],
	answers: [
		'paris', 
		'souvent cachée', 
		'new york city', 
		'give your blood', 
		'dubnium', 
		'fag', 
		'chicoutimi', 
		'11e9a949ab811e7357ec1a75e50d88f4445af2de3d482490b7d8d4f309f4cb48', 
		'gemini', 
		'heureactuelle', 
		'enigma', 
		'❤️', 
		'quinta',
		'dream', 
		'shy', 
		'lunaire', 
		'discomfort', 
		'0192840721', 
		'cacahuette'
	]
};

const embedColor1 = '#0099ff';
const embedColor2 = '#ff0000';
const embedColor3 = '#ffffff';


// Paris
data.embeds.push(createEmbed(embedColor1, 'Bienvenue dans enigma,\nVous allez devoir résoudre des énigmes pour arriver à me battre, mais bon, mes prédictions affirment que vous avez 99,47% de chances d\'échouer...\nPour commencer, on va faire simple, lorsque quelqu\'un pense avoir la réponse d\'une énigme, il suffit de l\'écrire dans ce channel.\nPour votre information, la casse de la réponse n\'a pas d\'importance, cela veut dire que les réponses que vous donnez peuvent être écrites TOUT EN MAJUSCULE comme tout en minuscule ou UnE lEtTrE sUr DeUx, ça ne changera rien.\nPour ne pas encombrer le channel, si vous écrivez une mauvaise réponse, le message sera supprimé automatiquement (normalement).', 'Quel est la capitale de la France ?'));

// souvent cachée
data.embeds.push(createEmbed(embedColor1, 'Bravo!! Bon, j\'avoue celle-ci n\'était pas pas très difficile, mais pas de panique la diffuculté sera exponentielle', 'La réponse est souvent cachée'));

// New york city
data.embeds.push(createEmbed(embedColor1, 'Haha, c\'était drole hein, en fait la réponse c\'était souvent caché mdr. Allez on passe à l\'énigme suivante', 'Qu\'est-ce qui relie ces images ?', 'what_links_them.png'));

// give your blood
data.embeds.push(createEmbed(embedColor1, 'Bien joué! Quelle belle ville, avec la statue de la liberté et..... enfin belle ville hein, passons à la prochaine énigme.', '4-444-888-33 999-666-88-777 22-555-666-666-3'));

// dubnium
data.embeds.push(createEmbed(embedColor1, 'Wow, quel beau message, enfin, il faut le prendre dans le bon sens mais oui c\'est important de donner son sang', 'Il vous sera impossible de trouver ce qui se cache dans ce son', 'bipbipboup.wav'));

// fag
data.embeds.push(createEmbed(embedColor1, `Un autre test avec du son et après c'est bon`, `Le piano`, 'piano.wav'));

// chicoutimi
data.embeds.push(createEmbed(embedColor1, 'Sérieusement, j\'avais augmenté le niveau de difficulté pour celui-là. Avec mon IA superpuissante, je peux facilement recréer une énigme plus difficile que celle-ci.', 'Enfin quelque chose d\'impossible à déchiffrer', 'asl.png'));

// 11e9a949ab811e7357ec1a75e50d88f4445af2de3d482490b7d8d4f309f4cb48
data.embeds.push(createEmbed(embedColor2, 'QUOI !! :rage: Impossible, j\'avais utilisé la puissance maximale de mon IA pour créer cette énigme, je vais donc devoir utiliser... MON PROCESSEUR QUANTIQUE, HAHAHAHA!! Personne n\'y avait pensé.', '\'Hello\' --> 2 * SHA256', 'fr.jpg'));

// gemini
data.embeds.push(createEmbed(embedColor2, `Oh, il faut croire que c'était plus simple que prévu, je pensais que c'était impossible celui ci devrait vous donner du fil à retordre`,  'Une belle planete','planet.jpg'));

// heure
data.embeds.push(createEmbed(embedColor2, `Bon d'accord, je vois, les sujets ont un niveau plus élevé que celui attendu, on va monter graduellement en puissance de calcul alors.`, 'La belle grande roue', 'ferris_wheel_1.png'));

// enigma
data.embeds.push(createEmbed(embedColor2, 'Mhhhh, ce n\'était que la puissance la plus faible de mon nouveau processeur, je vais essayer d\'augmenter un peu la puissance.', 'Cette énigme devrait durer un peu plus longtemps.', 'dots_and_other.png'));

// <3
data.embeds.push(createEmbed(embedColor2, `Elle est belle cette grande roue quand même, malheureusement, je suis un programme je ne pourrais jamais faire un tour dedans...\nProchaine épreuve go!`, `J'ai eu un petit problème`, 'js'));

// quinta
data.embeds.push(createEmbed(embedColor2, `Merci, grâce à toi j'ai pu décorrompre mon programme hahaha, maintenant on va commencer les choses sérieuses`, 'Omg my pp', 'me.png'));

// dream
data.embeds.push(createEmbed(embedColor2, 'Je vais essayer d\'augmenter réellement la difficulté maintenant', 'Voici une vieille photo', 'FUUKK.jpg'));

// shy
data.embeds.push(createEmbed(embedColor3, `Impressionnant, je crois que vous êtes les meilleurs sujet qu'on ai eu jusque là`, `Trop beau ce chat <3`, 'my_cat_lsb.png'))

// lunaire
data.embeds.push(createEmbed(embedColor3, 'Et bah, bien joué j\'avais vraiment monté le niveau de difficulté. Ca va être compliqué de continuer de l\'augmenter.', 'Personellement, j\'aime pas trop la couleur.', 'awful_color.png'));

// discomfort
data.embeds.push(createEmbed(embedColor3, 'MAIS C\'EST INCROYABLE', 'Juste une femme normale', 'woman.png'));

// 0192840721
data.embeds.push(createEmbed(embedColor3, 'Je suis presque à la puissance maximale possible.', 'Une carte', 'ti_amo__meta.png'));

// cacahuette
data.embeds.push(createEmbed(embedColor3, 'Je pense que j\'ai encore les ressources pour une dernière énigme.', 'Calcul maximal', 'Eugene_Roshal.jpeg'));

// fin
data.embeds.push(new Discord.MessageEmbed().setTitle('Fin').setColor(embedColor3).setDescription('Bravo, Enigma est terminé.\nVous avez réussi toutes les énigmes. Bravo! :clap: :clap:'));

// Create embed function
function createEmbed(color, desc, question, att = null) {
	let embed = new Discord.MessageEmbed().setTitle('Enigma').setColor(color).setDescription(desc).addField('Enigme', question);
	if(att !== null) {
		embed.attachFiles(['./resources/'+att]);
		if(att.split('.')[1] === 'png' || att.split('.')[1] === 'jpg') {
			embed.setImage('attachment://'+att);
		}
	}
	return embed;
}

module.exports = data;
