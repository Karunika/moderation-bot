const { Client, IntentsBitField } = require('discord.js');
const dotenv = require('dotenv');

const COMMANDS = require('./commands');

dotenv.config();

const prefix = process.env.PREFIX;
console.log(prefix);

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildIntegrations,
        IntentsBitField.Flags.GuildInvites,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildBans
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

// const user = interaction.options.getUser('target');
// guild.members.ban(user);

client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix)) {
        const [commandWithPreifx, ...commandArguments] = message.content.split(' '),
            command = commandWithPreifx.replace(/^!/, '');
        message.reply(command);
        // !ban <id> reason
        switch(command) {
            case 'ban':
                const userId = commandArguments.shift(),
                    reason = commandArguments.join(' ');
                try {
                    const user = await message.guild.members.ban(userId);
                    message.channel.send(`${user.username} banned`)
                } catch(err) {
                    console.error(err);
                }

                break;
        }

    }
})

client.login(process.env.DISCORD_BOT_TOKEN);
