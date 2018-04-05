const fs = require('fs')
const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: 'c.',
    owner: '349674631260667925',
    disableEveryone: true
});


client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'Our First Command Group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));





client.login(process.env.TOKEN)
