module.exports = {
    name: 'reactionrole',
    description: "send the reactionrole message!",
    async execute(message, args, Discord, client) {
        const { channel } = require('../config.json');

        const { Roles } = require('../config.json');
        
        const { MessageEmbed } = require('discord.js')
          let mhm = new Discord.MessageEmbed()
           .setColor('#181c20')
           .setImage('https://cdn.discordapp.com/attachments/993639717616746500/995983586614312980/chanels-01.png')
          let aha = new Discord.MessageEmbed()
            .setColor('#181c20')
            .setImage('https://cdn.discordapp.com/attachments/993639717616746500/995983882170146816/kjhkgjfchg-01.png')
          let Photo = new Discord.MessageEmbed()
            .setColor('#181c20')
            .setImage('https://cdn.discordapp.com/attachments/993639717616746500/995983586366865518/ranks-01.png')
          let Image = new Discord.MessageEmbed()
            .setColor('#181c20')
            .setImage('https://cdn.discordapp.com/attachments/993639717616746500/996410126657396768/countinent-01.png')

             //   + `${MaleRole.roleEmote} for ${MaleRole.roleName}\n ` //copy this line
             //   + `${FemaleRole.roleEmote} for ${FemaleRole.roleName}\n `
             //   + `${RESIDENT.roleEmote} for ${RESIDENT.roleName}\n `) //copy this line
        //let Chanel = new Discord.MessageEmbed()
             //.setColor('#005c4a')
             //.setTitle('poop')
             //.setDescription('stinky\n\n')
        //let Agents = new Discord.MessageEmbed()
             //.setColor('#005c4a')
             //.setTitle('React to the corresponding emojis to get personalized notifications!')
             //.setDescription('Once reacting you will gain your roles!\n\n')
        //let Rank = new Discord.MessageEmbed()
             //.setColor('#005c4a')
             //.setTitle('React to the corresponding emojis to get personalized notifications!')
             //.setDescription('Once reacting you will gain your roles!\n\n')
        //let AAAAembed = new Discord.MessageEmbed()
             //.setColor('#005c4a')
             //.setTitle('React to the corresponding emojis to get personalized notifications!')
             //.setDescription('Once reacting you will gain your roles!\n\n')
        console.log("Reactionrole Message Created")
        let chenchen = await message.channel.send({embeds: [mhm]})
        let agentus = await message.channel.send({embeds: [aha]})
        let rankies = await message.channel.send({embeds: [Photo]})
        let regionEmbed = await message.channel.send({embeds: [Image]})
        //let msg = await message.channel.send({ embeds: [AAAAembed]});
        //let chen = await message.channel.send({ embeds: [Chanel]});
        //let boobs = await message.channel.send({ embeds: [Agents]});
        //let ranky = await message.channel.send({ embeds: [Rank]});
        chenchen.react(`${Roles.MainRole.roleEmote}`) //copy this
        chenchen.react(`${Roles.ConversationsRole.roleEmote}`) //copy this
        chenchen.react(`${Roles.ActivitiesRole.roleEmote}`) //copy this
        chenchen.react(`${Roles.ValorantRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentBrimstoneRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentPhoenixRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentSageRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentSovaRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentViperRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentCypherRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentReynaRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentKilljoyRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentBreachRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentOmenRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentJettRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentRazeRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentSkyeRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentYoruRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentAstraRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentKayORole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentChamberRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentNeonRole.roleEmote}`) //copy this
        agentus.react(`${Roles.AgentFadeRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentIronRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentBronzeRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentSilverRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentGoldRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentPlatinumRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentDiamondRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentAscendantRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentImmortalRole.roleEmote}`) //copy this
        rankies.react(`${Roles.AgentRadiantRole.roleEmote}`) //copy this
        regionEmbed.react(`${Roles.NARole.roleEmote}`) //copy this
        regionEmbed.react(`${Roles.SAMRole.roleEmote}`) //copy this
        regionEmbed.react(`${Roles.AFRole.roleEmote}`) //copy this
        regionEmbed.react(`${Roles.ASRole.roleEmote}`) //copy this
        regionEmbed.react(`${Roles.AURole.roleEmote}`) //copy this
        regionEmbed.react(`${Roles.EURole.roleEmote}`) //copy this
    }
}