const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS"] });

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();


const { Roles } = require('./config.json');
const { botToken } = require('./config.json');
const { channel } = require('./config.json');
const { resident } = require('./config.json');
const { unverified } = require('./config.json');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`Bot is online!`);
});
client.on('guildMemberAdd', member => {
    console.log(member.bot)
    if (!member.bot) {
        member.roles.add("996472739277840514")
    }
})

client.on('guildMemberAdd', member => {
    if (!member.bot) {
        member.roles.add("996472739277840514")

    }
})

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift() .toLowerCase();



    if(command === 'ping'){
        
        client.commands.get('ping').execute(message, args, Discord, client);
    }  else if (command == 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }  else if (command == 'about') {
        client.commands.get('about').execute(message, args, Discord, client);
    }  else if (command == 'rule') {
        client.commands.get('rule').execute(message, args, Discord, client);
    }   else if (command == 'resident') {
        client.commands.get('resident').execute(message, args, Discord, client);
    }  else if (command == 'intro') {
        client.commands.get('intro').execute(message, args, Discord, client);
    }  else if (command == 'helpp') {
        client.commands.get('helpp').execute(message, args, Discord, client);
    }  else if (command == 'sug') {
        client.commands.get('sug').execute(message, args, Discord, client);
    }   else if (command == 'hrule') {
        client.commands.get('hrule').execute(message, args, Discord, client);
    }   else if (command == 'hsug') {
        client.commands.get('hsug').execute(message, args, Discord, client);
    }   else if (command == 'adrule') {
        client.commands.get('adrule').execute(message, args, Discord, client);
    }   else if (command == 'moderule') {
        client.commands.get('moderule').execute(message, args, Discord, client);
    }
});

client.on('messageReactionAdd', async (reaction, user) => { //here
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    console.log(reaction.message.channel.id)
    if (reaction.message.channel.id == channel || reaction.message.channel.id == resident) {
        console.log(reaction.emoji.id)
        if (reaction.emoji.id === Roles.ResidentRole.roleEmoteId) { 
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.ResidentRole.roleId); //these 3
            await reaction.message.guild.members.cache.get(user.id).roles.remove("996472739277840514") //you copy
        } //lines
        if (reaction.emoji.id === Roles.MainRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.MainRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ConversationsRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.ConversationsRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ActivitiesRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.ActivitiesRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ValorantRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.ValorantRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentBrimstoneRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentBrimstoneRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentPhoenixRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentPhoenixRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSageRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentSageRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSovaRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentSovaRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentViperRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentViperRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentCypherRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentCypherRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentReynaRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentReynaRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentKilljoyRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentKilljoyRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentBreachRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentBreachRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentOmenRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentOmenRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentJettRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentJettRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentRazeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentRazeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSkyeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentSkyeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentYoruRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentYoruRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentAstraRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentAstraRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentKayORole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentKayORole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentChamberRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentChamberRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentNeonRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentNeonRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentFadeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentFadeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentIronRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentIronRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentBronzeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentBronzeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSilverRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentSilverRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentGoldRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentGoldRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentPlatinumRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentPlatinumRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentDiamondRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentDiamondRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentAscendantRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentAscendantRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentImmortalRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentImmortalRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentRadiantRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AgentRadiantRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.EURole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.EURole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.NARole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.NARole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.SAMRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.SAMRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ASRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.ASRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AURole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AURole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AFRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.add(Roles.AFRole.roleId); //these 3
        } //lines
        
    }
}
);

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id == channel || reaction.message.channel.id == resident) {
        if (reaction.emoji.id === Roles.ResidentRole.roleEmoteId) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.ResidentRole.roleId); //these 3
            await reaction.message.guild.members.cache.get(user.id).roles.add("996472739277840514") //you copy
        } //lines
        if (reaction.emoji.id === Roles.MainRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.MainRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ConversationsRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.ConversationsRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ActivitiesRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.ActivitiesRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ValorantRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.ValorantRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentBrimstoneRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentBrimstoneRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentPhoenixRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentPhoenixRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSageRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentSageRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSovaRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentSovaRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentViperRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentViperRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentCypherRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentCypherRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentReynaRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentReynaRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentKilljoyRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentKilljoyRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentBreachRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentBreachRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentOmenRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentOmenRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentJettRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentJettRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentRazeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentRazeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSkyeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentSkyeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentYoruRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentYoruRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentAstraRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentAstraRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentKayORole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentKayORole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentChamberRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentChamberRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentNeonRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentNeonRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentFadeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentFadeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentIronRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentIronRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentBronzeRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentBronzeRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentSilverRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentSilverRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentGoldRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentGoldRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentPlatinumRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentPlatinumRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentDiamondRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentDiamondRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentAscendantRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentAscendantRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentImmortalRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentImmortalRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AgentRadiantRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AgentRadiantRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.EURole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.EURole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.NARole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.NARole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.SAMRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.SAMRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.ASRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.ASRole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AURole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AURole.roleId); //these 3
        } //lines
        if (reaction.emoji.id === Roles.AFRole.roleEmoteId) { //you copy
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Roles.AFRole.roleId); //these 3
        } //lines
    }
}
); //to here


client.login(`${botToken}`);