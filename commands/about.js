module.exports = {
    name: 'about',
    description: "yis",
    async execute(message, args, Discord, client) {

            let bobby = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/1006564883720044605/lkjhgcfd-01.png')

        console.log("Reactionrole Message Created")
        let a = await message.channel.send({embeds: [bobby]})

          let therapy = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996398187365548172/therapy-01.png')

        console.log("Reactionrole Message Created")
        let aa = await message.channel.send({embeds: [therapy]})

            let rules = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996400879206932571/ruules-01.png')

        console.log("Reactionrole Message Created")
        let ab = await message.channel.send({embeds: [rules]})            
        
            let roles = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996401411812241478/rooles-01.png')

        console.log("Reactionrole Message Created")
        let abc = await message.channel.send({embeds: [roles]})

            let rolesreact = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996403084894945340/recroole-01.png')

        console.log("Reactionrole Message Created")
        let abcd = await message.channel.send({embeds: [rolesreact]})

            let chon = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996403084693606460/cheon-01.png')

        console.log("Reactionrole Message Created")
        let abce = await message.channel.send({embeds: [chon]})

            let chin = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996404757293961366/disc-01.png')

        console.log("Reactionrole Message Created")
        let abch = await message.channel.send({embeds: [chin]})
    }
}