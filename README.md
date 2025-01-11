# Discord Music Bot

This is a Discord music bot built using JavaScript and Lavalink for high-quality music playback. It allows users to play, pause, skip, and stop music in a voice channel.

## Prerequisites

- Node.js v16 or higher
- Java 11 or higher (for Lavalink server)
- Lavalink server

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

4. Download and Set up Lavalink:
   - Download Lavalink.jar from [GitHub Releases](https://github.com/lavalink-devs/Lavalink/releases)
   - Create an `application.yml` file in the same directory as Lavalink.jar
   - Add the following configuration:
     ```yaml
     server:
       port: 2333
       address: YOUR_SERVER_IP
     lavalink:
       server:
         password: "youshallnotpass"
     ```

5. Create a `config.json` file in the root directory with the following structure:
   ```json
   {
     "token": "YOUR_BOT_TOKEN",
     "prefix": "/",
     "ownerId": "YOUR_DISCORD_USER_ID",
     "defaultVolume": 50,
     "lavalink": {
       "nodes": [
         {
           "host": "localhost",
           "port": 2333,
           "password": "youshallnotpass",
           "retryAmount": 5,
           "retryDelay": 1000,
           "secure": false
         }
       ]
     }
   }
   ```

## Usage

1. Start the Lavalink server:
   ```
   java -jar Lavalink.jar
   ```

2. In a separate terminal, run the bot:
   ```
   npm start
   ```

3. Invite the bot to your server and use the following commands in a text channel:
   - `/play <song_url_or_name>`: Play a song
   - `/pause`: Pause the currently playing song
   - `/skip`: Skip to the next song
   - `/stop`: Stop playback and clear the queue

## Contributing

Feel free to submit issues or pull requests to improve the bot!

## Troubleshooting

- Make sure Lavalink server is running before starting the bot
- Check if Java 11 or higher is installed
- Verify the Lavalink configuration matches in both application.yml and config.json

## License

This project is licensed under the MIT License.
