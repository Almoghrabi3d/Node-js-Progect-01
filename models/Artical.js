const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticalSchema = new Schema({
    title: String,
    body: String,
    numberOfLikes: Number,
});

const Artical = mongoose.model("Artical", ArticalSchema);

module.exports = Artical;  