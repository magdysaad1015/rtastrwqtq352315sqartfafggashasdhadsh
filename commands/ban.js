module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send(">  Missing Permissions <a:717803303135608863:723460936815476767> ");
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " Fue baneado.");
            message.channel.send (`> ${bannedMember} Got Banned From The Server <a:705665889210466374:725284562522996767> `)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "%ban",
    accessableby: "Admins",
    aliases: []
}
