module.exports = {
    name: 'moderule',
    description: "yuuuttss",
    async execute(message, args, Discord, client) {

          let moderule = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1005109944749654127/modddd-01.png')

        let yuuuttss = await message.channel.send({embeds: [moderule]})

    }
}