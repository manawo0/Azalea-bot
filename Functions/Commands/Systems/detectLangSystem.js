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
  if (LangPerServer.LanguageID == "se") {
    return "../../Structures/Lang/se.json";
  }
  if (LangPerServer.LanguageID == "dk") {
    return "../../Structures/Lang/dk.json";
  }
  if (LangPerServer.LanguageID == "ru") {
    return "../../Structures/Lang/ru.json";
  }
  if (LangPerServer.LanguageID == "pt") {
    return "../../Structures/Lang/pt.json";
  }

  if(LangPerServer.LanguageID == "ar"){
    return "../../Structures/Lang/ar.json"
  }
}

module.exports = { detectLang };
