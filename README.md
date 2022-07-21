# discord-send-message
This package allows you to send automated messages to Discord channels.

Step 1) Register an application in the Discord Developer Portal, add a bot, grant the bot admin rights. Then invite the bot to your server using the link that you will generate under the Oauth2 tab in the developer portal. You should see a notification on your Discord server that the application joined.

Step 2) Generate a token in the developer portal and store it as an ENV in your application. Never disclose the token to anyone, and make sure you don't upload it to GitHub.

Step 3) Activate the Developer mode on your Discord server and copy the channel ID you want to send messages to.

Step 4) In your JS code import this package, create a messageString and pass it along with the DISCORD_TOKEN and channelId to the discordMessage function as in the example below.

Sample Usage: 

 async function sendMessageAfterProjectCreation() { \
    try { \
      await messageDiscordChannel({ \
        DISCORD_TOKEN: 'xxxx', \
        messageString: 'xxx', \
        channelId: 'xxx' \
      }) \
    } catch (error) { \
      // Handle the errors we might get from the discord-send-message library \
      // We can just log them for now or we could show a message to the user \
      console.error(error) \
    } \
  } \