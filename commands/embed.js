const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(' ⋗ The Support Server ')
        .setAuthor(' ⋗ Some information about the Bot ')
        .setDescription(' ⋗ A bot that helps you manage your server completely . \n \n ⋗ There are many excellent and distinct advantages from any other bot . \n \n  ⋗ Other features will be added in the future and the development of some other features to improve the performance of the bot . ')
        .setColor('#3B3C36')
        .setThumbnail('https://media.discordapp.net/attachments/723623409149542412/725286603924308019/d0d00fb67b616a0d3ea15ed1e486e9ad.png?width=232&height=258')
        .setFooter('Turbo Bot', 'https://media.discordapp.net/attachments/723623409149542412/725286603924308019/d0d00fb67b616a0d3ea15ed1e486e9ad.png?width=232&height=258')
        .setImage('https://media.discordapp.net/attachments/723623409149542412/725286603924308019/d0d00fb67b616a0d3ea15ed1e486e9ad.png?width=232&height=258')
        .setURL('https://discord.gg/Zd73SK4')
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "bot",
    description: "example of an Embed.",
    usage: "%bot",
    accessableby: "Members",
    aliases: []
}