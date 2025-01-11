# Discord Music Bot

This is a Discord music bot built using JavaScript. It allows users to play, pause, skip, and stop music in a voice channel. The bot uses slash commands for easy interaction.

## Features

- Play music from a URL or song name
- Pause and resume playback
- Skip to the next song in the queue
- Stop playback and clear the queue
- Slash command support for easy usage

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/iammonsterbunny/Discord-Music-Bot.git
   ```

2. Navigate to the project directory:
   ```
   cd discord-music-bot
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `config.json` file in the root directory with the following structure:
   ```json
   {
     "token": "YOUR_BOT_TOKEN",
     "prefix": "/",
     "ownerId": "YOUR_DISCORD_USER_ID",
     "defaultVolume": 50
   }
   ```

5. Replace `YOUR_BOT_TOKEN` with your actual Discord bot token and `YOUR_DISCORD_USER_ID` with your Discord user ID.

## Usage

1. Run the bot:
   ```
   npm start
   ```

2. Invite the bot to your server and use the following commands in a text channel:
   - `/play <song_url_or_name>`: Play a song
   - `/pause`: Pause the currently playing song
   - `/skip`: Skip to the next song
   - `/stop`: Stop playback and clear the queue

## Contributing

Feel free to submit issues or pull requests to improve the bot!

## License

This project is licensed under the MIT License.
