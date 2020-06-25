module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("> Missing Permissions <a:717803303135608863:723460936815476767> ");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`> ${member}, kiked From The Server <a:586684003726393348:725305333668380845> `)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "%kick",
    accessableby: "Admins",
    aliases: []
}