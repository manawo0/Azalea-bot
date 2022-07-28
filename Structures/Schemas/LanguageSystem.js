const { model, Schema } = require("mongoose");

module.exports = model(
  "language",
  new Schema({
    GuildID: String,
    LanguageID: String,
  })
);
