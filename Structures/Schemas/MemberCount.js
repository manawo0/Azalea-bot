const { model, Schema } = require('mongoose');

module.exports = model("language", new Schema({
    GuildId: String,
    Channel: String,
    Member: String
}))