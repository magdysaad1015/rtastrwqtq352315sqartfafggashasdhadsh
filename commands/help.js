const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("⋗ ` Adminsttration ` ⋖ \n \n <:10:723469314283274253> %clear `⇨` To delete a chat message . \n  \n <:10:723469314283274253> %mute `⇨` To prevent a member from writing in the chat . \n  \n <:10:723469314283274253> %unmute `⇨` Allow the member to write again with chat . \n \n <:10:723469314283274253> %kick `⇨` To expel a member from the server . \n \n <:10:723469314283274253> %ban `⇨` Give member the A Lite Ban .  \n \n ⋗ ` Public ` ⋖  \n \n  <:10:723469314283274253> %bot `⇨` Some Information About The Bot . \n \n <:10:723469314283274253> %memberinfo `⇨` Show account information .")
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "%help",
    accessableby: "Members",
    aliases: ['h']
}