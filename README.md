# InsultRon Bot

This little bot is a hobby project built to poke fun at friends in my close-friends Discord server.

His persona is based off of Ron Swanson of [Parks & Rec](https://www.imdb.com/title/tt1266020/)

## Details & Dependencies

InsultRon is built with **javascript** in the **Node** runtime environment. At the moment he's not hosted anywhere other than my machine, but I plan to change that once there's more functionality.

- To connect to the Discord API we're using the `discord.js` Node module

- To support .env secret variables `dotenv` is included in the project

## Commands:

- `$insultRon` followed by a mention `@user.tag`

When this command is given InsultRon will insult only the first friend you tagged. The insults come from an array, selected by a rudimentary Math.random function.

- `$wiseRon`

Once given, InsultRon will share a Swanson quote

### About the Insults

As I meantioned, this project is a just-for-laughs project I built to add to a server I share with close friends.

InsultRon's insults come from various movies, shows, and pop culture. His bite-sized pieces of sage wisdom come from Parks and Rec.

#### Resources:

I dug through a lot of docs and blog posts to build this bot.

[A Discord Bot and JavaScript Timing Events](https://cademirci.com/a-discord-bot-and-javascript-timing-events)

[JavaScript Discord Bot Tutorial](https://www.devdungeon.com/content/javascript-discord-bot-tutorial#posting_an_image_or_file_to_channel)

⭐ [Discord Bots - Sending Gifs](https://www.youtube.com/watch?v=9P1rB2MY4ZA) - Coding Train
