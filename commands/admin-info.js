module.exports = {
    name: 'adrule',
    description: "yuuuss",
    async execute(message, args, Discord, client) {

          let adrule = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1005109918455562301/adddd-01.png')

        let yuuuss = await message.channel.send({embeds: [adrule]})

    }
}