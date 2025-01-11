# Discord Music Bot 🎵

A powerful Discord music bot built with Discord.js and Lavalink. Enjoy high-quality music playback with minimal lag.

## ✨ Features

- 🎵 High-quality music playback
- 🔊 Volume control
- ⏯️ Play/Pause/Resume controls
- ⏭️ Skip tracks
- 📜 Queue system
- 🔗 Supports multiple music sources
  - YouTube
  - Spotify
  - SoundCloud
  - Direct links

## 📋 Prerequisites

- Node.js 16.x or higher
- Java 11 or higher (for Lavalink)
- Discord Bot Token
- Server to host the bot

## 🚀 Quick Start

1. **Clone and Install:**
   ```bash
   git clone https://github.com/iammonsterbunny/Discord-Music-Bot.git
   cd Discord-Music-Bot
   npm install
   ```

2. **Lavalink Setup:**
   - Download [Lavalink.jar](https://github.com/lavalink-devs/Lavalink/releases)
   - Create `application.yml`:
   ```yaml
   server:
     port: 2333
     address: YOUR_SERVER_IP
   lavalink:
     server:
       password: "youshallnotpass"
       sources:
         youtube: true
         bandcamp: true
         soundcloud: true
         twitch: true
         vimeo: true
   ```

3. **Configure Bot:**
   Create `config.json`:
   ```json
   {
     "token": "YOUR_BOT_TOKEN",
     "prefix": "!",
     "ownerId": "YOUR_DISCORD_USER_ID",
     "defaultVolume": 50,
     "status": {
       "type": "LISTENING",
       "text": "/play | Music Bot",
       "status": "online"
     },
     "lavalink": {
       "nodes": [
         {
           "host": "YOUR_SERVER_IP",
           "port": 2333,
           "password": "youshallnotpass",
           "secure": false
         }
       ]
     }
   }
   ```

## 🎮 Commands

| Command | Description |
|---------|-------------|
| `/play` | Play a song or playlist |
| `/pause` | Pause current track |
| `/resume` | Resume playback |
| `/stop` | Stop and clear queue |
| `/skip` | Skip current track |
| `/queue` | View current queue |

## 🚦 Running the Bot

1. **Start Lavalink:**
   ```bash
   java -jar Lavalink.jar
   ```

2. **Start the Bot:**
   ```bash
   npm start
   ```

## 🔧 Troubleshooting

Common issues and solutions:

- **Bot won't connect**: Check if Lavalink is running
- **No sound**: Verify bot has proper permissions
- **Connection errors**: Check firewall settings for port 2333

## 🤝 Contributing

1. Fork the repo
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📝 License

This project is [MIT](LICENSE) licensed.

## 💖 Support

Star this repo if you found it helpful!
