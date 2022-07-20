const axios = require('axios');

async function messageDiscordChannel (input) {
    if (!input.DISCORD_TOKEN) return console.error('No Discord Token provided, register a bot in the Discord Developer Portal (https://discord.com/developers/applications), grant OAuth access, invite it to your Discord server, and store the token as ENV DISCORD_TOKEN and load it in the function call');
    if (!input.messageString) return console.error('No message string provided, please format your message as string and pass it in function call');
    if (!input.channelId) return console.error('no channelID provided, please copy the channelId from Discord and pass it in the function call');


    const data = {"content": input.messageString}
    const channelId = input.channelId
    const config = {
        headers: {
            "authorization": 'Bot ' + input.DISCORD_TOKEN,
            "content-type": "application/json"
        }
    };

    try {
     const response =  await axios.post(`https://discord.com/api/v9/channels/${channelId}/messages`, data, config)

    } catch (error) {
    throw (`Error: ${error.response.data.code} ${error.response.data.message} \nPlease check the Discord Documentation for further details https://discord.com/developers/docs/topics/opcodes-and-status-codes`);
    }

}




module.exports = messageDiscordChannel;