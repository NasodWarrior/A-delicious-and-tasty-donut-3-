const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

var servers = {};

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Im Ready master <3")
    client.user.setGame("À transformer Cell et le déguster comme il le faut .");
    setInterval(function(){
        client.guilds.get('173088174967357451').roles.find('name','VIP').edit({color:'RANDOM'})},12);
    
});

client.on('message', message => {
    if(message.content === "Bonjour"){
        message.reply("Ohayo ma sucrerie ");
    }

    if(message.content === prefix +"aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Tu veux de l'aide mon mignon ?")
        .setThumbnail(message.author.avatarURL)
        .setDescription("Je suis la Waifu de NasodWarrior#2042")
        .addField("*aide","Affiche des commandes")
        .addField("Bonjour","Je vous répond")
        .addField(":tools: Modération", "Fais `*mod` pour voir mes commandes de modération !")
        .addField("*kick <@user>","Kick un membre")
        .addField("*ban <@user>","Ban un membre")
        .addField("*clear + nmbres de msg","Supprime un nombre de messages (99 max)")
        .setFooter("Menu d'aide -A delicious and tasty donut <3!")
        
        message.channel.sendMessage(help_embed);
        
    }

    

    if(message.content === prefix + "mod") {
        var mod_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`:tools: Voici mes commandes modérations !`)
        .setThumbnail(message.author.avatarURL)
        .addField("*kick <@user>", "Kick l'utilisateur !")
        .addField("*ban <@user>", "Ban l'utilisateur !")
        .addField("*clear nombre", "Supprime le nombre de messages indiqué")
        .setFooter("Commande modération -A delicious and tasty donut <3!")
        .setTimestamp()
        message.channel.send(mod_embed);

    
    
      }

    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("CC66FF")
        .setTitle("Voici mes infos et celle du serv <3")
        .addField(" :robot: Nom :",`${client.user.tag}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégorie et de salon dans le serv",message.guild.channels.size)
        .setFooter("Signé -A delicious and tasty donut <3!")
        message.channel.sendMessage(info_embed)
    
    }

    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas faire cette commande méchant è-é");

        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez donner un nom mon choux <3")
        
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick){
            return message.channel.send("Il existe ce mec ?")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je ne peux Kick")

        }

        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous ne pouvez pas faire cette commande méchant è-é");

        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez donner un nom mon choux <3")
        
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(!ban){
            return message.channel.send("Il existe ce mec ?")
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je ne peux Ban")

        }

        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est Ban par ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas le droit è-é");

        let args = message.content.split(" ").slice(1)

        if(!args[0]) return message.channel.send("Vous n'avez pas précisé le nombre")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été dévorés`);
        })
    }
    
});
