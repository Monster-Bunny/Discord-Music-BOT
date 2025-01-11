# Discord Music Bot with Slash Commands 🎵

A modern Discord music bot built with Discord.js v14, featuring slash commands and Lavalink integration.

## ✨ Features

- 🔥 Slash Commands Support
- 🎵 High-quality music playback
- 🎯 Easy to use interface
- ⚡ Fast and reliable
- 📋 Queue management
- 🎨 Rich embed messages
- 🔗 Supports:
  - YouTube
  - Spotify
  - SoundCloud
  - Direct links

## 📋 Requirements

- Node.js 16.9.0 or higher
- Discord.js v14
- Java 13+ (for Lavalink)
- Discord Bot Token with following intents:
  - GUILDS
  - GUILD_VOICE_STATES

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iammonsterbunny/Discord-Music-BOT.git
   cd Discord-Music-BOT
   npm install
   ```

2. **Configure the bot**
   - Rename `config.json.example` to `config.json`
   - Fill in your bot token
   - Add your guild IDs for slash commands
   ```json
   {
     "token": "YOUR_BOT_TOKEN",
     "guildIds": ["YOUR_GUILD_ID_1", "YOUR_GUILD_ID_2"],
     "ownerId": "YOUR_DISCORD_USER_ID"
   }
   ```

3. **Set up Lavalink**
   - Download Lavalink server
   - Configure application.yml
   - Start Lavalink server

4. **Deploy slash commands**
   ```bash
   node src/deploy-commands.js
   ```

5. **Start the bot**
   ```bash
   node src/index.js
   ```

## 🎮 Available Slash Commands

| Command | Description |
|---------|-------------|
| `/play` | Play a song from URL or search |
| `/pause` | Pause current playback |
| `/resume` | Resume paused music |
| `/stop` | Stop playback and clear queue |
| `/skip` | Skip to next song |
| `/help` | Show all available commands |

## ⚙️ Configuration

The `config.json` file supports the following options:
