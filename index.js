require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`🤖 Bot online como ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ip") {
    const embed = new EmbedBuilder()
      .setColor("#FF8C00")
      .setTitle("🐝 PixelmonBee")
      .setDescription(
        "## 🎮 Bem-vindo ao PixelmonBee!\n" +
        "Prepare suas Poké Balls e venha viver sua aventura Pokémon! 🔥\n\n" +
        "━━━━━━━━━━━━━━━━━━━━"
      )
      .addFields(
        {
          name: "📡 IP DO SERVIDOR",
          value: "```PixelmonBee.aternos.me:59783```",
          inline: false
        },
        {
          name: "🌐 Plataforma",
          value: "Minecraft • Pixelmon",
          inline: true
        },
        {
          name: "🐝 Servidor",
          value: "PixelmonBee",
          inline: true
        }
      )
      .setFooter({
        text: "🐝 PixelmonBee • Prepare-se para sua aventura!"
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [embed]
    });
  }
});

client.login(process.env.TOKEN);
