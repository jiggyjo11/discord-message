const axios = require('axios');

async function messageDiscordChannel({DISCORD_TOKEN, messageString, channelId}) {
    if (!DISCORD_TOKEN) throw('No DISCORD_TOKEN provided, register a bot in the Discord Developer Portal (https://discord.com/developers/applications), grant OAuth access, invite it to your Discord server, and store the token as ENV DISCORD_TOKEN and load it in the function call');
    if (!messageString) throw('No messageString string provided, please format your message as string and pass it in function call');
    if (!channelId) throw('no channelId provided, please copy the channelId from Discord and pass it in the function call');


    const data = {"content": messageString}
    const config = {
        headers: {
            "authorization": 'Bot ' + DISCORD_TOKEN,
            "content-type": "application/json"
        }
    };

    try {
     const response =  await axios.post(`https://discord.com/api/v9/channels/${channelId}/messages`, data, config)

    } catch (error) {
    throw new Error(`Error: ${error.response.data.code} ${error.response.data.message} \nPlease check the Discord Documentation for further details https://discord.com/developers/docs/topics/opcodes-and-status-codes`);
    }

}

async function run(input) {
    try {
        await messageDiscordChannel(input);
    } catch (e) {
        console.error(e);
    }
}


module.exports = run;