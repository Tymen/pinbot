module.exports = {
    name: 'intro',
    description: "yis",
    async execute(message, args, Discord, client) {

            let intro = new Discord.MessageEmbed()
        .setColor('#181c20')
        .setImage('https://cdn.discordapp.com/attachments/993639717616746500/998936297735475301/lpoiuhgytfrtgh-01.png')

        console.log("Reactionrole Message Created")
        let aaaa = await message.channel.send({embeds: [intro]})
    }
}