// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
// const dotenv = require('dotenv');

// const commands = [{
//     name: 'ping',
//     description: 'Replies with Pong!'
// }]; 

// const rest = new REST({
//     version: '9'
// }).setToken(process.env.DISCORD_BOT_TOKEN);

// (async () => {
//   try {
//     console.log('Started refreshing application (/) commands.');

//     await rest.put(
//       Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
//       { body: commands },
//     );

//     console.log('Successfully reloaded application (/) commands.');
//   } catch (error) {
//     console.error(error);
//   }
// })();