const mongoose = require("mongoose");
const { urlSchema, url } = require("./models/urlSchema");
const { mongoURI } = require("./config.json")


mongoose.connect(mongoURI)
    .then(console.log("Connected to database"))
    .catch(console.error());
