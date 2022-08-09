module.exports = {
    name: 'hsug',
    description: "isis",
    async execute(message, args, Discord, client) {

          let hsug = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1000827300771799100/lkjh-01.png')

        let ipis = await message.channel.send({embeds: [hsug]})

    }
}