module.exports = {
    name: 'helpp',
    description: "kiki",
    async execute(message, args, Discord, client) {

          let ppule = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1000714848193216552/pkoijuhg-01.png')

        let yus = await message.channel.send({embeds: [ppule]})

            let pule = new Discord.MessageEmbed()
            .setColor('#181c20')
            .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1000717006858887318/lkjh-01.png')

        let kus = await message.channel.send({embeds: [pule]})


    }
} 