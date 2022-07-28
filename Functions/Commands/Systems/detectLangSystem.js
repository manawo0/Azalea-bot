const DB = require("../../../Structures/Schemas/LanguageSystem");
require("dotenv").config();

async function detectLang(guildId) {
  const LangPerServer = await DB.findOne({ GuildID: guildId });

  if (!LangPerServer) {
    return `../../Structures/Lang/${process.env.DEFAULT_LANG}.json`;
  }

  if (LangPerServer.LanguageID == "es") {
    return "../../Structures/Lang/es.json";
  }

  if (LangPerServer.LanguageID == "en") {
    return "../../Structures/Lang/en.json";
  }
}

module.exports = { detectLang };
