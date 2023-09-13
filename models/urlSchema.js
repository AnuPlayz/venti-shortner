const { model, Schema } = require("mongoose");

let urlSchema = new Schema({
    urlToBeShortened: { type: String },
    urlShorted: { type: String }
});

const url = model('Url', urlSchema);

module.exports = { urlSchema: urlSchema, url: url };