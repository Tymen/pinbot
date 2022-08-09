module.exports = {
    name: 'hrule',
    description: "isis",
    async execute(message, args, Discord, client) {

          let hrule = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1000817572213694685/server_stuff-01.png')

        let isis = await message.channel.send({embeds: [hrule]})

    }
}