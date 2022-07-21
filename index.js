const axios = require('axios');

async function messageDiscordChannel(options) {
    if (!options) {
      throw new Error('No options provided')
    }

    const { DISCORD_TOKEN, messageString, channelId } = options
    if (!DISCORD_TOKEN || !channelId || !messageString) {
      throw new Error('Missing Discord Token, Message string or Channel ID')
    }

    const data = { content: messageString }
    const config = {
      headers: {
        authorization: 'Bot ' + DISCORD_TOKEN,
        'content-type': 'application/json'
      }
    }

    try {
      await axios.post(
        `https://discord.com/api/v9/channels/${channelId}/messages`,
        data,
        config
      )
    } catch (error) {
      throw new Error(
        `Discord API Error. Code: ${error.response.data.code} Message: ${error.response.data.message} \nPlease check the Discord Documentation for further details https://discord.com/developers/docs/topics/opcodes-and-status-codes`
      )
    }
  }


module.exports = messageDiscordChannel;