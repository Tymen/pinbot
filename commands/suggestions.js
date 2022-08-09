module.exports = {
    name: 'sug',
    description: "popopo",
    async execute(message, args, Discord, client) {

          let sugges = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1000729946831999086/lzkmnx-01.png')

        let yus = await message.channel.send({embeds: [sugges]})

            let sug = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1000736111762616360/lkjhg-01.png')

         let kus = await message.channel.send({embeds: [sug]})


    }
}