module.exports = {
    name: 'resident',
    description: "boob",
    async execute(message, args, Discord, client) {
        const { channel } = require('../config.json');

        const { Roles } = require('../config.json');
        
        const { MessageEmbed } = require('discord.js')
        let yeye = new Discord.MessageEmbed()
            .setColor('#181c20')
            .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996533655268765786/2309847-01.png')
        console.log("Reactionrole Message Created")
        let res = await message.channel.send({embeds: [yeye]})
        res.react(`${Roles.ResidentRole.roleEmote}`) //copy this
    }
}